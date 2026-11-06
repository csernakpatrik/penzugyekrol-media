// Tartalomnaptár: a posztok sorrendben. A rendszer felülről lefelé halad.
// Minden poszt: id (mappanév a képekhez), cta (komment-kulcsszó), caption (kész szöveg),
// slides (7 db slide a recept szerint). Új poszt: csak adj hozzá egy új elemet a tömb végére.
// Szabály: SOHA hosszú kötőjel (– —), vesszőt/pontot használj. Soha garantált hozam, mindig "akár".

const DISC = '<div class="small" style="margin-top:28px;">Tájékoztató jellegű tartalom, nem pénzügyi tanácsadás.</div>';

module.exports = [

// 1) ÉLETBIZTOSÍTÁS — CTA: AUDIT
{
  id: 'poszt_05_eletbiztositas',
  cta: 'AUDIT',
  caption: `Ha holnap kiesne a jövedelmed, meddig bírná a család? 💭

A legtöbben a nyugdíjról és a megtakarításról gondolkodunk, közben a legfontosabb kérdést kihagyjuk: mi történik, ha a fő keresővel történik valami? A fizetés eltűnhet egyik napról a másikra, a hiteltörlesztő és a rezsi viszont nem áll le.

A jó hír: egy valódi védelmet adó családi életbiztosítás akár havi 5-10 ezer Ft-ból elindítható. Nagyjából egy pizzarendelés ára, a család biztonságáért.

👉 Nézzük meg együtt, jól van-e most lefedve a családod. Írd kommentbe: AUDIT, és elküldöm az ingyenes, 2 perces öntesztet.

Tájékoztató jellegű tartalom, nem pénzügyi tanácsadás.

#életbiztosítás #családbiztonság #pénzügyitudatosság #családiköltségvetés #öngondoskodás #pénzügyekrőlpatrikkal`,
  slides: [
    { bg: 'red', kicker: 'Családvédelem', titleSize: 76, title: 'Mi lesz a családoddal, ha holnap <span class="hl">kiesik</span> a jövedelmed?', body: 'A kérdés kényelmetlen. De pont ezért kell feltenni.', cue: 'Lapozz →', num: '1 / 7' },
    { bg: 'cream', kicker: 'A valóság', titleSize: 84, title: 'A baj nem kér időpontot.', body: 'Egy betegség, egy baleset, és a fő kereső jövedelme egyik napról a másikra eltűnhet. A számlák viszont nem állnak le.', num: '2 / 7' },
    { bg: 'cream', kicker: 'Számoljunk együtt', titleSize: 62, title: 'Mi marad a család nyakán?', body: '<div class="amt"><span class="l">Kieső nettó jövedelem</span><span class="v">akár 500 000 Ft/hó</span></div><div class="amt"><span class="l">Hiteltörlesztő</span><span class="v">nem áll le</span></div><div class="amt"><span class="l">Rezsi, kaja, suli</span><span class="v">nem áll le</span></div><div class="amt big"><span class="l">A kasszában havonta</span><span class="v">mínusz 500 000 Ft</span></div><div class="small">Egy átlagos családi nettó jövedelemmel számolva.</div>', num: '3 / 7' },
    { bg: 'red', kicker: 'A lényeg', titleSize: 78, title: 'Az életbiztosítás nem <span class="hl">neked</span> szól.', body: 'Hanem azoknak, akik utánad maradnak. Ez az a pénz, ami megtartja a lakást, és időt ad a családnak, hogy talpra álljon.', num: '4 / 7' },
    { bg: 'cream', kicker: 'A kifogások', titleSize: 64, title: 'A három leggyakoribb kifogás:', body: '„<b>Fiatal vagyok, ráér.</b>" „<b>Biztos drága.</b>" „<b>Úgysem történik velem.</b>" Közben pont fiatalon a legolcsóbb, és pont a család miatt számít a legtöbbet.', num: '5 / 7' },
    { bg: 'cream', kicker: 'Mennyibe kerül?', titleSize: 70, title: 'Kevesebbe, mint gondolnád.', body: 'Egy valódi védelmet adó családi életbiztosítás akár <b>havi 5-10 ezer Ft-ból</b> elindítható. Nagyjából egy pizzarendelés ára havonta, a család biztonságáért.', num: '6 / 7' },
    { bg: 'red', kicker: 'Következő lépés', titleSize: 70, title: 'Jól van most lefedve a családod?', body: 'Csináljunk egy gyors, 2 perces biztosítási AUDIT-ot. Írd kommentbe: <b>AUDIT</b>, és elküldöm az ingyenes öntesztet. ' + DISC, cue: 'AUDIT', num: '7 / 7' },
  ],
},

// 2) INFLÁCIÓ — CTA: SZÁMOLÓ
{
  id: 'poszt_06_inflacio',
  cta: 'SZÁMOLÓ',
  caption: `A pénzed lassan olvad a bankszámlán, és észre sem veszed. 🫠

Ami a folyószámládon ül, annak a vásárlóértékét az infláció évről évre csökkenti. A szám ugyanaz marad, de egyre kevesebbet ér. Ha 1 millió Ft ott pihen és az infláció évi 5%, 5 év alatt kb. 220 ezer Ft-nyi vásárlóértéket veszítesz, tétlenül.

A megoldás nem bonyolult: a vésztartalékon felüli részt érdemes olyan megtakarításba tenni, ami legalább lépést tart az inflációval. Nem kell hozzá nagy összeg, csak elkezdeni és rendszeresen tenni.

👉 Írd kommentbe: SZÁMOLÓ, és elküldöm a kalkulátort, amivel pár perc alatt megnézed, mennyit hozhatna ki a pénzed.

Tájékoztató jellegű tartalom, nem pénzügyi tanácsadás.

#infláció #megtakarítás #pénzügyitudatosság #öngondoskodás #családiköltségvetés #pénzügyekrőlpatrikkal`,
  slides: [
    { bg: 'red', kicker: 'Infláció', titleSize: 80, title: 'A pénzed <span class="hl">lassan olvad</span> a bankszámlán.', body: 'És észre sem veszed. Megmutatom, mennyit.', cue: 'Lapozz →', num: '1 / 7' },
    { bg: 'cream', kicker: 'Mi történik?', titleSize: 76, title: 'A számlapénz nem „biztonságos".', body: 'Ami a folyószámlán ül, annak a vásárlóértékét az infláció évről évre csökkenti. A szám ugyanaz marad, de egyre kevesebbet ér.', num: '2 / 7' },
    { bg: 'cream', kicker: 'Egy példa', titleSize: 64, title: 'Mit tesz évi 5% infláció?', body: '<div class="amt"><span class="l">Ma a számládon</span><span class="v">1 000 000 Ft</span></div><div class="amt"><span class="l">1 év múlva annyit ér, mint</span><span class="v">kb. 950 000 Ft</span></div><div class="amt"><span class="l">5 év múlva, mint</span><span class="v">kb. 780 000 Ft</span></div><div class="amt big"><span class="l">Elveszett érték 5 év alatt</span><span class="v">kb. 220 000 Ft</span></div><div class="small">Szemléltető számítás évi 5% inflációval.</div>', num: '3 / 7' },
    { bg: 'red', kicker: 'A csapda', titleSize: 74, title: 'A „majd ott biztonságban van" tévhit.', body: 'A pénz a számlán nem nő, csak áll. Közben a tej, a rezsi, a suli egyre drágább. Állni ma visszafelé haladás.', num: '4 / 7' },
    { bg: 'cream', kicker: 'Mit lehet tenni?', titleSize: 72, title: 'Dolgoztasd a pénzed.', body: 'A vésztartalékon felüli részt érdemes olyan megtakarításba tenni, ami legalább lépést tart az inflációval, vagy akár megelőzi azt. Nem kell nagy összeg a kezdéshez.', num: '5 / 7' },
    { bg: 'cream', kicker: 'A kulcs', titleSize: 76, title: 'Idő és rendszeresség.', body: 'Nem az időzítés a lényeg, hanem hogy elkezdd, és havonta tedd. Minél hamarabb kezded, annál többet dolgozik helyetted a kamatos kamat.', num: '6 / 7' },
    { bg: 'red', kicker: 'Következő lépés', titleSize: 66, title: 'Kíváncsi vagy, mennyit hozna ki a pénzed?', body: 'Írd kommentbe: <b>SZÁMOLÓ</b>, és elküldöm a kalkulátort, amivel pár perc alatt kiszámolod. ' + DISC, cue: 'SZÁMOLÓ', num: '7 / 7' },
  ],
},

// 3) HITEL / THM — CTA: HITEL
{
  id: 'poszt_07_hitel',
  cta: 'HITEL',
  caption: `Ne a havi törlesztő alapján válassz hitelt. Ez a legdrágább hiba. 🏦

Négy dolog, amit nézned kell, mielőtt aláírsz: a THM (ez mutatja a hitel valódi árát, nem a kamat), a futamidő (a hosszabb futamidő kisebb törlesztő, de sokkal több visszafizetés), a teljes visszafizetendő összeg, és az előtörlesztés feltételei. Ugyanaz a hitel más futamidővel akár több millió forint különbséget jelent a végén.

👉 Hitel előtt állsz? Írd kommentbe: HITEL, és elküldöm az ingyenes útmutatót, amivel átlátod a teljes képet.

Tájékoztató jellegű tartalom, nem pénzügyi tanácsadás.

#hitel #lakáshitel #thm #pénzügyitudatosság #ingatlan #pénzügyekrőlpatrikkal`,
  slides: [
    { bg: 'red', kicker: 'Hitel', titleSize: 76, title: 'Ne a törlesztő alapján válassz <span class="hl">hitelt</span>.', body: 'A legdrágább hiba, amit el lehet követni. Mutatom, mire nézz.', cue: 'Lapozz →', num: '1 / 7' },
    { bg: 'cream', kicker: '1. THM', titleSize: 80, title: 'A THM mond el mindent.', body: 'Nem a kamat, hanem a <b>THM</b> mutatja a hitel valódi árát, mert minden költséget tartalmaz. Két ajánlatot csak THM alapján érdemes összehasonlítani.', num: '2 / 7' },
    { bg: 'cream', kicker: '2. Futamidő', titleSize: 70, title: 'A hosszú futamidő csapdája.', body: 'A hosszabb futamidő kisebb havi törlesztőt jelent, de összességében sokkal többet fizetsz vissza. A kényelemnek ára van.', num: '3 / 7' },
    { bg: 'cream', kicker: 'Egy példa', titleSize: 62, title: 'Ugyanaz a hitel, más futamidő:', body: '<div class="amt"><span class="l">10 millió Ft, 15 év</span><span class="v">kevesebb kamat</span></div><div class="amt"><span class="l">10 millió Ft, 25 év</span><span class="v">kisebb törlesztő</span></div><div class="amt big"><span class="l">Különbség a visszafizetésben</span><span class="v">akár több millió Ft</span></div><div class="small">Szemléltető példa, a konkrét számok ajánlatfüggők.</div>', num: '4 / 7' },
    { bg: 'red', kicker: '3. Teljes visszafizetés', titleSize: 68, title: 'Mindig a végösszeget nézd.', body: 'Ne csak azt kérdezd, mennyi a havi törlesztő. Kérdezd meg: <b>összesen</b> mennyit fizetek vissza a futamidő alatt? Ez a valódi ár.', num: '5 / 7' },
    { bg: 'cream', kicker: '4. Rugalmasság', titleSize: 66, title: 'Van előtörlesztés? Mi a díja?', body: 'Jó, ha később nagyobb összeget is betehetsz a hitelbe. Nézd meg, engedi-e a szerződés, és mennyibe kerül. Ez évekkel rövidítheti a futamidőt.', num: '6 / 7' },
    { bg: 'red', kicker: 'Következő lépés', titleSize: 76, title: 'Hitel előtt állsz?', body: 'Írd kommentbe: <b>HITEL</b>, és elküldöm az ingyenes útmutatót, amivel átlátod a teljes képet, mielőtt aláírsz. ' + DISC, cue: 'HITEL', num: '7 / 7' },
  ],
},

// 4) GYERMEKMEGTAKARÍTÁS — CTA: SZÁMOLÓ
{
  id: 'poszt_08_gyermek',
  cta: 'SZÁMOLÓ',
  caption: `Mikor kezdd félretenni a gyerekednek? A válasz: most. ⏳

Nem az összeg számít, hanem az idő. Havi 20 ezer forinttal, 18 éven át, a rendszeresség és a hozam együtt akár 7-8 millió forintos induló tőkét adhat a gyerekednek. Albérlet kaució, első autó, egyetem, saját vállalkozás. Olyan indulás, amiért te dolgozol meg időben, nem ő pánikban.

A titok nem a nagy összeg, hanem a kitartás: minden hónapban keveset, éveken át.

👉 Írd kommentbe: SZÁMOLÓ, és elküldöm a kalkulátort, amivel kiszámolod, mennyit gyűjthetsz neki.

Tájékoztató jellegű tartalom, nem pénzügyi tanácsadás.

#gyermekmegtakarítás #családitervezés #megtakarítás #gyereknevelés #öngondoskodás #pénzügyekrőlpatrikkal`,
  slides: [
    { bg: 'red', kicker: 'Gyermekmegtakarítás', titleSize: 74, title: 'Mikor kezdd félretenni a <span class="hl">gyerekednek</span>?', body: 'A válasz egyszerűbb, mint gondolnád. És most van a legjobb idő.', cue: 'Lapozz →', num: '1 / 7' },
    { bg: 'cream', kicker: 'Az igazság', titleSize: 76, title: 'Nem az összeg számít. Az idő.', body: 'Nem kell sok pénz ahhoz, hogy komoly induló tőkét adj a gyerekednek. Elég egy kis összeg, de minél hamarabb kezded.', num: '2 / 7' },
    { bg: 'cream', kicker: 'Egy példa', titleSize: 64, title: 'Havi 20 000 Ft, 18 éven át:', body: '<div class="amt"><span class="l">Amit összesen beteszel</span><span class="v">kb. 4,3 M Ft</span></div><div class="amt"><span class="l">Amit a hozam hozzátesz</span><span class="v">akár több millió Ft</span></div><div class="amt big"><span class="l">A gyereked 18 évesen</span><span class="v">akár 7-8 M Ft</span></div><div class="small">Szemléltető számítás, a hozam nem garantált.</div>', num: '3 / 7' },
    { bg: 'red', kicker: 'Mire lesz jó?', titleSize: 80, title: 'Indulás az életbe.', body: 'Albérlet kaució, első autó, egyetem, vállalkozás indítása. Olyan induló tőke, amiért te dolgozol meg időben, nem ő pánikban.', num: '4 / 7' },
    { bg: 'cream', kicker: 'A kulcs', titleSize: 62, title: 'A rendszeresség veri a nagy összeget.', body: 'Nem az a nyerő, aki egyszer betesz sokat, hanem aki minden hónapban keveset, éveken át. A kitartás a titok.', num: '5 / 7' },
    { bg: 'cream', kicker: 'Jó tudni', titleSize: 72, title: 'Többféle forma létezik.', body: 'A rugalmas megtakarítástól a hosszú távú programokig több megoldás van. A lényeg, hogy hozzád és a céljaidhoz illjen.', num: '6 / 7' },
    { bg: 'red', kicker: 'Következő lépés', titleSize: 66, title: 'Kíváncsi vagy, mennyit gyűjthetsz neki?', body: 'Írd kommentbe: <b>SZÁMOLÓ</b>, és elküldöm a kalkulátort, amivel kiszámolod. ' + DISC, cue: 'SZÁMOLÓ', num: '7 / 7' },
  ],
},

// 5) HALOGATÁS / KAMATOS KAMAT — CTA: NYUGDÍJ
{
  id: 'poszt_09_halogatas',
  cta: 'NYUGDÍJ',
  caption: `„Majd jövőre elkezdem." Ez a mondat milliókba kerülhet. 💸

Minden év, amit kihagysz a megtakarításból, nem csak egy elmaradt befizetés. A kamatos kamat miatt a kihagyott évek a legdrágábbak. Anna 25 évesen kezd havi 20 ezer forintot, Bea ugyanannyit, de 35 évesen. Nyugdíjas korukra Anna vagyona akár kétszerese lehet, pusztán a 10 évnyi előny miatt.

A legjobb idő elkezdeni ma van. A második legjobb szintén ma.

👉 Írd kommentbe: NYUGDÍJ, és elküldöm az útmutatót, amivel még idén el tudod kezdeni.

Tájékoztató jellegű tartalom, nem pénzügyi tanácsadás.

#nyugdíj #kamatoskamat #megtakarítás #öngondoskodás #pénzügyitudatosság #pénzügyekrőlpatrikkal`,
  slides: [
    { bg: 'red', kicker: 'Halogatás', titleSize: 70, title: '„Majd jövőre elkezdem." <span class="hl">Mennyibe kerül ez?</span>', body: 'Többe, mint hinnéd. Pontosan megmutatom.', cue: 'Lapozz →', num: '1 / 7' },
    { bg: 'cream', kicker: 'Az igazság', titleSize: 74, title: 'A halogatásnak ára van.', body: 'Minden év, amit kihagysz a megtakarításból, nem csak egy befizetés. A kamatos kamat miatt a kihagyott évek a legdrágábbak.', num: '2 / 7' },
    { bg: 'cream', kicker: 'Két barát', titleSize: 66, title: 'Anna és Bea, havi 20 000 Ft:', body: '<div class="amt"><span class="l">Anna 25 évesen kezd</span><span class="v">havi 20 000 Ft</span></div><div class="amt"><span class="l">Bea 35 évesen kezd</span><span class="v">havi 20 000 Ft</span></div><div class="amt big"><span class="l">Anna vagyona 65 évesen</span><span class="v">akár 2x annyi</span></div><div class="small">Szemléltető példa kamatos kamattal. A 10 évnyi előny a kulcs.</div>', num: '3 / 7' },
    { bg: 'red', kicker: 'A varázslat', titleSize: 80, title: 'A kamatos kamat.', body: 'A pénzed hozamára is hozam termelődik. Évről évre gyorsul. De csak akkor, ha időt adsz neki. Az idő a legnagyobb szövetségesed.', num: '4 / 7' },
    { bg: 'cream', kicker: 'A kifogás', titleSize: 70, title: '„Most nincs rá keretem."', body: 'Nem az összeg a lényeg a kezdéskor, hanem a <b>kezdés</b>. Havi 10-20 ezer forinttal is el lehet indulni, és később emelni.', num: '5 / 7' },
    { bg: 'cream', kicker: 'A lényeg', titleSize: 68, title: 'A legjobb idő elkezdeni: ma.', body: 'A második legjobb idő szintén ma. Minden halasztott hónap kihagyott kamatos kamat, amit később sokszoros befizetéssel sem pótolsz.', num: '6 / 7' },
    { bg: 'red', kicker: 'Következő lépés', titleSize: 78, title: 'Ne a jövő éved bánja.', body: 'Írd kommentbe: <b>NYUGDÍJ</b>, és elküldöm az útmutatót, amivel még idén el tudod kezdeni. ' + DISC, cue: 'NYUGDÍJ', num: '7 / 7' },
  ],
},

// 6) VÉSZTARTALÉK — CTA: AUDIT
{
  id: 'poszt_10_vesztartalek',
  cta: 'AUDIT',
  caption: `Mi történik, ha holnap elromlik a mosógép ÉS az autó? 🔧🚗

A család pénzügyi stabilitása egyetlen dolgon múlik: van-e vésztartalék. Nélküle egy váratlan kiadást hitelkártyából vagy gyorskölcsönből fedezel, és a baj még drágább lesz. Az ökölszabály: 3-6 havi kiadásnyi tartalék, elérhető helyen, de külön a költőpénztől.

A legjobb módszer: automatizáld. Állíts be egy havi átutalást a fizetésed utáni napra. Amit nem látsz a számládon, azt nem költöd el.

👉 Van elég tartalékod egy rossz hónapra? Írd kommentbe: AUDIT, és elküldöm a 2 perces öntesztet.

Tájékoztató jellegű tartalom, nem pénzügyi tanácsadás.

#vésztartalék #pénzügyitudatosság #családiköltségvetés #megtakarítás #öngondoskodás #pénzügyekrőlpatrikkal`,
  slides: [
    { bg: 'red', kicker: 'Vésztartalék', titleSize: 62, title: 'Mi történik, ha <span class="hl">holnap</span> elromlik a mosógép és az autó?', body: 'A család pénzügyi stabilitása egyetlen számon múlik. Mutatom.', cue: 'Lapozz →', num: '1 / 7' },
    { bg: 'cream', kicker: 'Az alap', titleSize: 72, title: 'Vésztartalék nélkül minden hitel.', body: 'Ha nincs félretett pénz, egy váratlan kiadást hitelkártyából vagy gyorskölcsönből fedezel. Így a baj még drágább lesz.', num: '2 / 7' },
    { bg: 'cream', kicker: 'Mennyi kell?', titleSize: 66, title: 'A szabály: 3-6 havi kiadás.', body: '<div class="amt"><span class="l">Havi kiadás a családban</span><span class="v">pl. 400 000 Ft</span></div><div class="amt"><span class="l">3 havi tartalék</span><span class="v">1,2 M Ft</span></div><div class="amt"><span class="l">6 havi tartalék</span><span class="v">2,4 M Ft</span></div><div class="small">A pontos összeg a ti kiadásaitoktól függ.</div>', num: '3 / 7' },
    { bg: 'red', kicker: 'Hol tartsd?', titleSize: 68, title: 'Elérhető, de ne a folyószámlán.', body: 'A vésztartalék legyen gyorsan hozzáférhető, de külön a költőpénztől, hogy ne olvadjon el észrevétlenül. Külön helyen, külön fejben.', num: '4 / 7' },
    { bg: 'cream', kicker: 'A sorrend', titleSize: 72, title: 'Előbb a pajzs, utána a kard.', body: 'Előbb a vésztartalék (a pajzs), és csak utána a hosszú távú megtakarítás és befektetés (a kard). Fordítva kockázatos.', num: '5 / 7' },
    { bg: 'cream', kicker: 'Hogyan gyűjtsd?', titleSize: 78, title: 'Automatizáld.', body: 'Állíts be egy havi automatikus átutalást a fizetésed utáni napra. Amit nem látsz a számládon, azt nem költöd el.', num: '6 / 7' },
    { bg: 'red', kicker: 'Következő lépés', titleSize: 66, title: 'Van elég tartalékod egy rossz hónapra?', body: 'Csináljunk egy gyors, 2 perces AUDIT-ot. Írd kommentbe: <b>AUDIT</b>, és elküldöm az öntesztet. ' + DISC, cue: 'AUDIT', num: '7 / 7' },
  ],
},

// 7) NYUGDÍJ — 3 dolog — CTA: NYUGDÍJ
{
  id: 'poszt_11_nyugdij3',
  cta: 'NYUGDÍJ',
  caption: `3 dolog a nyugdíjról, amit senki nem mond el. A harmadik a legfontosabb. 👇

1. Az állami nyugdíj egyre kevesebb lesz, mert egyre kevesebb aktív dolgozó tart el egyre több nyugdíjast. 2. Az állam segít, ha magad is teszel: a nyugdíjcélú megtakarításod befizetésének 20%-át évente visszakapod az adódból, éves plafonig. 3. Az idő fontosabb, mint az összeg: aki 10 évvel korábban kezd, a kamatos kamat miatt gyakran többet gyűjt kevesebb befizetésből.

Nem kell nagy pénz a kezdéshez, havi pár tízezer forint is sokat számít, ha időben indul.

👉 Nem tudod, melyik forma való neked? Írd kommentbe: NYUGDÍJ, és elküldöm az ingyenes útmutatót.

Tájékoztató jellegű tartalom, nem pénzügyi tanácsadás.

#nyugdíj #öngondoskodás #adójóváírás #megtakarítás #pénzügyitudatosság #pénzügyekrőlpatrikkal`,
  slides: [
    { bg: 'red', kicker: 'Nyugdíj', titleSize: 72, title: '3 dolog a nyugdíjról, amit <span class="hl">senki</span> nem mond el.', body: 'A harmadik a legfontosabb. Lapozz végig.', cue: 'Lapozz →', num: '1 / 7' },
    { bg: 'cream', kicker: '1.', titleSize: 64, title: 'Az állami nyugdíj egyre kevesebb lesz.', body: 'Egyre kevesebb aktív dolgozó tart el egyre több nyugdíjast. Aki ma fiatal, annak az állami nyugdíj önmagában kevés lesz a megszokott élethez.', num: '2 / 7' },
    { bg: 'cream', kicker: '2.', titleSize: 64, title: 'Az állam segít, ha magad is teszel.', body: 'A nyugdíjcélú megtakarításod befizetésének <b>20%-át</b> évente visszakapod az adódból, éves plafonig. Ez a saját pénzed, amit amúgy adóként befizetsz.', num: '3 / 7' },
    { bg: 'red', kicker: '3.', titleSize: 66, title: 'Az idő fontosabb, mint az összeg.', body: 'Aki 10 évvel korábban kezdi, az a kamatos kamat miatt gyakran többet gyűjt kevesebb befizetésből. A kezdés dátuma a legnagyobb döntés.', num: '4 / 7' },
    { bg: 'cream', kicker: 'A tévhit', titleSize: 72, title: '„Ráérek, fiatal vagyok."', body: 'Pont a fiatalság a legnagyobb előnyöd. Minél tovább vársz, annál többet kell majd havonta félretenned ugyanazért az eredményért.', num: '5 / 7' },
    { bg: 'cream', kicker: 'A jó hír', titleSize: 72, title: 'Kis összeggel is elindulhatsz.', body: 'Nem kell nagy pénz a kezdéshez. Havi pár tízezer forint is sokat számít, ha idejében indul és rendszeres.', num: '6 / 7' },
    { bg: 'red', kicker: 'Következő lépés', titleSize: 70, title: 'Nem tudod, melyik forma való neked?', body: 'Írd kommentbe: <b>NYUGDÍJ</b>, és elküldöm az ingyenes útmutatót. ' + DISC, cue: 'NYUGDÍJ', num: '7 / 7' },
  ],
},

];
