# Auto poszt rendszer — Pénzügyekről Patrikkal (GitHub + Make.com)

Ez a rendszer **2 naponta magától** legyárt egy lapozós (carousel) posztot, feltölti a képeket egy nyilvános helyre, majd a **Make.com** ingyenes automatizálóval **kiposztolja Facebookra és Instagramra**. Metricool nem kell hozzá, és saját Meta app sem.

A Make oldalát (webhook + forgatókönyv) **már létrehoztam neked**, a képmezők és a szöveg előre be vannak kötve. Neked három dolgod maradt: (1) feltölteni ezt a kódot egy GitHub repóba, (2) a Make-ben bekötni a Facebook/Instagram fiókot, (3) bemásolni egy titkot. Lent lépésről lépésre.

---

## Amit már beállítottam helyetted a Make-ben
- **Webhook** létrejött. Az URL-je:
  `https://hook.eu1.make.com/natnf0vj3r4mg2gd7a4o58jdxzjl0k5u`
- **Forgatókönyv** létrejött „Auto poszt (FB + IG)" néven: Webhook → Instagram carousel → Facebook poszt. A 7 kép és a caption már be van kötve a modulokba.
- A forgatókönyv még **KI van kapcsolva**, és a Facebook/Instagram fiók bekötése (OAuth) rád vár, mert azt csak te tudod engedélyezni.

---

## A) GitHub beállítása (a robot)

1. Hozz létre egy **ÚJ, PUBLIC (nyilvános) GitHub repót** (be vagy jelentkezve: `csernakpatrik`), pl. néven: `penzugyekrol-media`.
   - Fontos, hogy **public** legyen, különben a képek linkje nem lesz nyilvános, és az Instagram nem éri el őket. (Az Instagram API kifejezetten csak nyilvános linkről tölt le, Google Drive-ról pl. nem.)
2. Töltsd fel ebbe a repóba ennek a mappának a **teljes tartalmát** (minden fájlt és almappát, köztük a `.github` mappát is). Legegyszerűbben a repo oldalán: „Add file → Upload files".
3. A repóban: **Settings → Secrets and variables → Actions → New repository secret**.
   - Name: `MAKE_WEBHOOK_URL`
   - Secret: `https://hook.eu1.make.com/natnf0vj3r4mg2gd7a4o58jdxzjl0k5u`
   - Mentés.

## B) Facebook/Instagram bekötése a Make-ben

1. Lépj be a make.com-ra, nyisd meg az **Auto poszt (FB + IG)** forgatókönyvet.
2. Kattints az **Instagram** modulra → **Add** (connection) → engedélyezd az Instagram fiókodat (a Facebook oldalon keresztül). Majd a „Page" mezőnél válaszd ki a Pénzügyekről Patrikkal oldalhoz tartozó Instagram fiókot.
3. Kattints a **Facebook** modulra → **Add** (connection) → engedélyezd, és a „Page" mezőnél válaszd a Pénzügyekről Patrikkal oldalt.
   - A képek és a szöveg mezői már ki vannak töltve, ezeket nem kell állítgatnod. (Ha a Make kéri, a webhooknál nyomhatsz „Redetermine data structure"-t, de a mezők futáskor így is kitöltődnek.)
4. Mentsd, és **kapcsold BE** a forgatókönyvet (bal alul a kapcsoló „ON").

> Az Instagram automata posztoláshoz Business/Creator fiók kell, a Facebook oldalhoz kötve (nálad ez megvan).

---

## Első teszt (biztonságos, NEM megy ki semmi)

1. GitHub repó → **Actions** fül (ha kér, engedélyezd a workflow-kat).
2. **Auto poszt (FB + IG, Make.com)** → **Run workflow** → `mode`: **dryrun** → Run.
3. Várj 2-3 percet. A futás legyártja és feltölti a 7 képet, és a logban kiírja a **kép linkjeit**. Nyiss meg egyet böngészőben: be kell töltődnie. Ekkor még NEM megy ki semmi élesben.

## Élesítés / első éles poszt

Ha a dryrun képek jók és a Make-ben bekötötted a fiókokat + bekapcsoltad a forgatókönyvet:
- **Teszteld egyben:** GitHub → Run workflow → `mode: live`. Ez elküldi az 5. posztot a Make-nek, ami kiposztolja FB-re és IG-re. Nézd meg az eredményt a Make „History" fülén és az oldaladon.
- Ha jó, **nincs több teendő**: a napi futás 2 naponta élesben kiteszi a következő posztot (sorban: 5, 6, 7, ...).

---

## Beállítások (ha változtatnál)
A `.github/workflows/autopost.yml` tetején:
- `cron: '0 18 * * *'` — a futás ideje (18:00 UTC, kb. 19:00-20:00 Budapest).
- `INTERVAL_DAYS: '2'` — hány naponta posztoljon.

## Új posztok hozzáadása
A `content/calendar.js` egy lista, a rendszer felülről lefelé halad (a `state.json` tartja, hol jár). Ha elfogynak, a futás nem csinál semmit (nem hibázik). Szólj, és legyártok új adagot.

### Szabályok a tartalomhoz
- SOHA hosszú kötőjel (– —), helyette vessző vagy pont.
- Soha „garantált hozam", mindig „akár".
- Adószám/plafon esetén publikálás előtt ellenőrizd az adott évi értéket.

## Komment-kulcsszavak
- `AUDIT`, `SZÁMOLÓ`, `NYUGDÍJ` — már a ManyChatben.
- `HITEL` — új (07. poszt), vedd fel a ManyChatbe vagy addig kézzel válaszolj rá.

## Ha valami nem megy
- **Instagram nem posztol / „media not accessible":** a repo legyen PUBLIC, és a képek JPEG-ek (a robot már JPEG-et készít). Nyisd meg egy kép linkjét böngészőben.
- **A Make nem indul:** a forgatókönyv legyen BEKAPCSOLVA, és a `MAKE_WEBHOOK_URL` titok pontosan a fenti URL.
- **Fiókhiba:** a Make-ben az IG/FB kapcsolat legyen élő, az IG Business/Creator, az oldalhoz kötve.
- GitHub futások: **Actions** fül (zöld = siker). Make futások: a scenario **History** fül.

A GitHub Actions és a Make.com ingyenes kerete bőven elég ehhez.
