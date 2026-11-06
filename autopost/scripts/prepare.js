// 1. lépés: eldönti, melyik poszt jön, legenerálja a 7 képet, és kiírja a tervet ci-plan.json-ba.
// A tényleges Metricool-hívás a publish.js-ben történik, miután a workflow feltöltötte a képeket.
const fs = require('fs');
const path = require('path');
const { renderPost } = require('../lib/render');
const calendar = require('../content/calendar');

const ROOT = path.join(__dirname, '..');
const TZ = process.env.TZ_NAME || 'Europe/Budapest';
const MODE = (process.env.RUN_MODE || 'live').toLowerCase();        // 'live' vagy 'draft'
const INTERVAL_DAYS = parseInt(process.env.INTERVAL_DAYS || '2', 10);
const POST_HOUR = process.env.POST_HOUR || '19:00';                 // 'HH:MM' helyi idő
const REPO = process.env.GITHUB_REPOSITORY;                         // 'owner/repo'
const BRANCH = process.env.POST_BRANCH || 'main';

function parts(d) {
  const fmt = new Intl.DateTimeFormat('en-CA', { timeZone: TZ, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false });
  const o = {};
  fmt.formatToParts(d).forEach(p => { if (p.type !== 'literal') o[p.type] = p.value; });
  return o; // {year,month,day,hour,minute}
}
function dateStr(p) { return `${p.year}-${p.month}-${p.day}`; }

function writePlan(obj) {
  fs.writeFileSync(path.join(ROOT, 'ci-plan.json'), JSON.stringify(obj, null, 2));
}

(async () => {
  const statePath = path.join(ROOT, 'state.json');
  let state = { nextIndex: 0, lastPostedDate: null };
  try { state = JSON.parse(fs.readFileSync(statePath, 'utf8')); } catch (e) {}

  const now = new Date();
  const nowP = parts(now);
  const today = dateStr(nowP);

  // Ütemezés-kapu (csak éles módban): csak INTERVAL_DAYS naponta posztolunk.
  if (MODE === 'live' && state.lastPostedDate) {
    const diffDays = (new Date(today) - new Date(state.lastPostedDate)) / 86400000;
    if (diffDays < INTERVAL_DAYS) {
      writePlan({ skip: true, reason: `Meg nem telt le a ${INTERVAL_DAYS} nap (utolso: ${state.lastPostedDate}).` });
      console.log('KIHAGYVA: meg nem esedekes.');
      return;
    }
  }

  const idx = state.nextIndex || 0;
  const post = calendar[idx];
  if (!post) {
    writePlan({ skip: true, reason: 'Elfogytak a naptarban levo posztok. Told fel ujakat a content/calendar.js vegere.' });
    console.log('KIHAGYVA: nincs tobb poszt a naptarban.');
    return;
  }

  // Képek renderelése
  const outDir = path.join(ROOT, 'images', post.id);
  fs.rmSync(outDir, { recursive: true, force: true });
  await renderPost(post.slides, outDir);
  console.log(`Legenerálva: ${post.slides.length} kép ide: images/${post.id}/`);

  if (!REPO) throw new Error('GITHUB_REPOSITORY nincs beállítva (a GitHub Actions adja meg automatikusan).');
  const base = `https://raw.githubusercontent.com/${REPO}/${BRANCH}/images/${post.id}`;
  const media = post.slides.map((_, i) => `${base}/slide_${i + 1}.jpg`);

  writePlan({
    skip: false,
    mode: MODE,
    index: idx,
    id: post.id,
    cta: post.cta,
    text: post.caption,
    media,
    todayDate: today,
  });
  console.log(`TERV kész: ${post.id} (${MODE}). A Make azonnal posztol, amikor megkapja a webhookot.`);
})().catch(e => { console.error(e); process.exit(1); });
