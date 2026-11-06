// 2. lépés: értesíti a Make.com-ot egy webhookkal, hogy posztolja ki a képeket FB-re és IG-re.
// A képek ekkor már fent vannak a repóban (nyilvános raw linkek), így a Make eléri őket.
// live módban sikeres küldés után lépteti a state.json-t a következő posztra.
// dryrun módban NEM küld webhookot (tehát nem megy ki semmi), csak kiírja a kép linkeket ellenőrzéshez.
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const HOOK = process.env.MAKE_WEBHOOK_URL;

(async () => {
  let plan;
  try { plan = JSON.parse(fs.readFileSync(path.join(ROOT, 'ci-plan.json'), 'utf8')); }
  catch (e) { console.log('Nincs ci-plan.json, nincs teendő.'); return; }

  if (plan.skip) { console.log('KIHAGYVA: ' + (plan.reason || '')); return; }

  if (plan.mode !== 'live') {
    console.log('DRYRUN: a képek elkészültek és feltöltődtek, de a webhook NEM indult (nem megy ki éles poszt).');
    console.log('Ellenőrizd ezeket a linkeket a böngészőben (be kell töltődniük):');
    plan.media.forEach(u => console.log('  ' + u));
    return;
  }

  if (!HOOK) throw new Error('Hiányzik a MAKE_WEBHOOK_URL titok. Állítsd be a repo Settings > Secrets alatt.');

  const payload = { id: plan.id, cta: plan.cta, caption: plan.text, images: plan.media };
  plan.media.forEach((u, i) => { payload['image' + (i + 1)] = u; });

  const res = await fetch(HOOK, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const t = await res.text();
  if (!res.ok) {
    console.error('Make webhook hiba: HTTP ' + res.status);
    console.error(t.slice(0, 1000));
    process.exit(1);
  }
  console.log(`OK: elküldve a Make-nek (${plan.id}). Válasz: ${t.slice(0, 200)}`);

  // Éles módban léptetjük az állapotot a következő posztra.
  const sp = path.join(ROOT, 'state.json');
  let st = { nextIndex: 0, lastPostedDate: null };
  try { st = JSON.parse(fs.readFileSync(sp, 'utf8')); } catch (e) {}
  st.nextIndex = (plan.index || 0) + 1;
  st.lastPostedDate = plan.todayDate;
  fs.writeFileSync(sp, JSON.stringify(st, null, 2) + '\n');
  console.log(`state.json frissítve: nextIndex=${st.nextIndex}, lastPostedDate=${st.lastPostedDate}`);
})().catch(e => { console.error(e); process.exit(1); });
