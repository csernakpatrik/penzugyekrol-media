// Slide-renderelő a "Pénzügyekről Patrikkal" carousel posztokhoz.
// Márka: "P." jel, színek (#C8102E / #FBF8F6 / #231F20 / #FFD15C), Poppins.
const { chromium } = require('playwright');

const RED = '#C8102E', RED_D = '#A60D26', CREAM = '#FBF8F6', INK = '#231F20',
      BODY = '#4A4446', PINK = '#FBD9DF', CREAMTXT = '#FDEBEE';

const PATH = 'M84.26-64.60Q84.26-55.80 80.20-48.59Q76.15-41.37 67.97-37.04Q59.79-32.71 47.97-32.71L34.64-32.71L34.64 0L7.70 0L7.70-96.90L47.97-96.90Q59.65-96.90 67.83-92.78Q76.01-88.65 80.13-81.37Q84.26-74.08 84.26-64.60M45.36-54.15Q56.77-54.15 56.77-64.60Q56.77-75.18 45.36-75.18L34.64-75.18L34.64-54.15L45.36-54.15M108.17 1.10Q101.02 1.10 96.69-2.82Q92.36-6.73 92.36-12.78Q92.36-18.83 96.69-22.82Q101.02-26.80 108.17-26.80Q115.18-26.80 119.51-22.82Q123.84-18.83 123.84-12.78Q123.84-6.87 119.51-2.89Q115.18 1.10 108.17 1.10';

function mark(dark) {
  const circle = dark ? '#ffffff' : RED;
  const p = dark ? RED : '#ffffff';
  return `<svg viewBox="0 0 200 200" width="54" height="54" style="display:block"><circle cx="100" cy="100" r="92" fill="${circle}"/><g transform="translate(34.23,147.90)"><path d="${PATH}" fill="${p}"/></g></svg>`;
}

const FONT = `<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&display=swap" rel="stylesheet">`;

function slide(s) {
  const red = s.bg === 'red';
  const bg = red ? `background:linear-gradient(160deg,${RED} 0%,${RED_D} 100%);` : `background:${CREAM};`;
  const titleColor = red ? '#fff' : INK;
  const kickerColor = red ? PINK : RED;
  const bodyColor = red ? CREAMTXT : BODY;
  const num = s.num;
  const cue = s.cue ? `<div style="font-family:Poppins;font-weight:800;font-size:40px;color:${red ? '#fff' : RED};letter-spacing:1px;">${s.cue}</div>` : '<div></div>';
  return `<!doctype html><html><head><meta charset=utf-8>${FONT}<style>*{margin:0;padding:0;box-sizing:border-box}html,body{width:1080px;height:1350px}
 .wrap{width:1080px;height:1350px;${bg}font-family:Poppins,Arial,sans-serif;position:relative;padding:92px 86px;display:flex;flex-direction:column;}
 .brandrow{display:flex;align-items:center;gap:18px;}
 .brandrow .bn{font-family:Poppins;font-weight:800;font-size:30px;letter-spacing:.5px;color:${red ? '#fff' : INK};}
 .kicker{font-family:Poppins;font-weight:800;font-size:30px;letter-spacing:6px;text-transform:uppercase;color:${kickerColor};margin-top:64px;}
 .title{font-family:Poppins;font-weight:800;line-height:1.06;letter-spacing:-1px;color:${titleColor};margin-top:22px;font-size:${s.titleSize || 86}px;}
 .title .hl{color:${red ? '#FFD15C' : RED};}
 .body{font-family:Poppins;font-weight:500;line-height:1.4;color:${bodyColor};margin-top:30px;font-size:${s.bodySize || 44}px;}
 .body b{font-weight:800;color:${red ? '#fff' : INK};}
 .spacer{flex:1;}
 .footrow{display:flex;align-items:center;justify-content:space-between;}
 .num{font-family:Poppins;font-weight:700;font-size:30px;color:${red ? PINK : '#B9B2B0'};}
 .amt{display:flex;align-items:center;justify-content:space-between;border-bottom:2px solid ${red ? 'rgba(255,255,255,.25)' : '#E7E6EA'};padding:20px 0;font-family:Poppins;}
 .amt .l{font-weight:600;font-size:42px;color:${red ? '#fff' : INK};}
 .amt .v{font-weight:800;font-size:42px;color:${red ? '#FFD15C' : RED};}
 .amt.big .l,.amt.big .v{font-size:50px;}
 .small{font-family:Poppins;font-weight:500;font-size:26px;color:${red ? PINK : '#8C8A8F'};margin-top:20px;}
 </style></head><body><div class="wrap">
  <div class="brandrow">${mark(red)}<span class="bn">Pénzügyekről Patrikkal</span></div>
  ${s.kicker ? `<div class="kicker">${s.kicker}</div>` : ''}
  <div class="title">${s.title}</div>
  ${s.body ? `<div class="body">${s.body}</div>` : ''}
  <div class="spacer"></div>
  <div class="footrow">${cue}<div class="num">${num}</div></div>
 </div></body></html>`;
}

async function renderPost(slides, outDir) {
  const fs = require('fs');
  fs.mkdirSync(outDir, { recursive: true });
  const b = await chromium.launch();
  const paths = [];
  for (let i = 0; i < slides.length; i++) {
    const p = await b.newPage({ viewport: { width: 1080, height: 1350 }, deviceScaleFactor: 1 });
    await p.goto('data:text/html;charset=utf-8,' + encodeURIComponent(slide(slides[i])));
    try { await p.evaluate(() => document.fonts.ready); } catch (e) {}
    await p.waitForTimeout(600);
    const fp = `${outDir}/slide_${i + 1}.jpg`;
    await p.screenshot({ path: fp, type: 'jpeg', quality: 90 });
    paths.push(fp);
    await p.close();
  }
  await b.close();
  return paths;
}

module.exports = { slide, renderPost };
