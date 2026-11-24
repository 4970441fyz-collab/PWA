const fs=require('fs');const {T,F,cover}=require('./content.json');
T[5][4]='Надёжность страховых программ, финансовая устойчивость страховщика и механизмы защиты капитала.';
const e=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;');
const num=s=>e(s).replace(/(\d+(?:,\d+)?)(?=%| тысяч| млн)/g,m=>`<span class="cnt" data-to="${m.replace(',','.')}" data-dec="${m.includes(',')?1:0}">${m}</span>`);
const M=[{t:'img',src:'s1.png',cls:'cardm'},{t:'vid',src:'s2',cls:'cardm'},{t:'vid',src:'s3',cls:'cutv'},{t:'img',src:'s4.png',cls:'cut'},{t:'vid',src:'s5',cls:'ghost'},{t:'img',src:'s6.jpg',cls:'cardm',pos:'50% 38.5%'}];
const media=m=>m.t=='vid'?`<video muted loop playsinline preload="auto" poster="assets/${m.src}.jpg" style="object-position:${m.pos||'50% 50%'}"><source src="assets/${m.src}.mp4" type="video/mp4"></video>`:`<img src="assets/${m.src}" alt="" style="object-position:${m.pos||'50% 50%'}">`;
const seg=i=>[0,1,2,3,4,5].map(j=>`<i class="${j==i?'a':''}"></i>`).join('');
let h=`<!DOCTYPE html><html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Путь эксперта — Путь к Японии</title><link rel="stylesheet" href="assets/style.css"></head><body>
<div id="pre"><div class="door l"></div><div class="door r"></div><img class="plogo" src="assets/logo_alfa.svg" alt="Альфа Жизнь"><div class="sunp"><span>道</span><b id="pc">0</b></div></div>
<div class="cur"></div><div class="pbar"></div>
<nav class="path"><div class="line"><i></i></div>${T.map((t,i)=>`<a href="#t${i+1}" data-i="${i}"><span class="n">0${i+1}</span><span class="kj">${t[0]}</span></a>`).join('')}</nav>
<section class="s hero d" id="top"><video class="hv" muted loop playsinline autoplay preload="auto" poster="assets/hero.jpg"><source src="assets/hero.mp4" type="video/mp4"></video><div class="shade"></div><img class="petals pl" src="assets/petals.gif" alt=""><img class="petals pr" src="assets/petals.gif" alt="">
<div class="top"><span class="lab">${e(cover.k.replace(' · ','  '))}</span><img class="logo" src="assets/logo.svg" alt="Альфа Жизнь"></div>
<div class="hin"><h1 data-chars>${e(cover.t)}</h1><p class="rv"><b>6 тем,</b> с которых начинается экспертный разговор с клиентом — и переход к продаже почти любой идеи</p><a href="#t1" class="go rv"><span>Начать путь</span><i></i></a></div></section>
<div class="mq"><div class="mt">${'<span>ПУТЬ ЭКСПЕРТА</span><em>道</em><span>ШЕСТЬ ШАГОВ</span><em>道</em>'.repeat(6)}</div></div>`;
T.forEach((t,i)=>{const dk=i%2==0,m=M[i];h+=`<section class="s topic ${dk?'d':'l'} ${dk?'pr':'pb'}" id="t${i+1}" data-i="${i}"><div class="bgk" data-par="-.18">${t[0]}</div><img class="petals pr" src="assets/petals.gif" alt="">
${m.cls=='ghost'?`<video class="cornerv" muted loop playsinline preload="auto" poster="assets/${m.src}.jpg"><source src="assets/${m.src}.mp4" type="video/mp4"></video>`:''}<div class="wrap"><div class="left"><div class="step"><span class="k">Шаг <span class="cnt" data-to="${i+1}">${i+1}</span> из 6</span><span class="seg">${seg(i)}</span></div><h2 data-words>${e(t[1])}</h2>
<div class="card rv" style="--d:.5s;--f:${Math.ceil(t[2].length/50)+2.4}"><b>ЧТО ПРОИСХОДИТ?</b><p>${num(t[2])}</p></div><div class="card rv" style="--d:.75s;--f:${Math.ceil(t[3].length/50)+2.4}"><b>ПОЧЕМУ ЭТО ВАЖНО КЛИЕНТУ?</b><p>${num(t[3])}</p></div></div>
<div class="right"><figure class="art ${m.cls}${m.cls=='ghost'?'':' wipe tilt'}" data-par="0"><div class="mi">${m.cls=='ghost'?'':media(m)}</div><span class="hk">道</span><span class="stp"><span class="cnt" data-to="${i+1}" data-pad="2">0${i+1}</span> / 06</span></figure>
<div class="plate wipe tilt" style="--d:.5s"><b>ЧТО ОБСУДИТЬ С КЛИЕНТОМ?</b><hr><p>${num(t[4])}</p><div class="kj">${t[0]}</div></div></div></div></section>`});
h+=`<section class="s end d" id="end"><div class="koi wipe"><video muted loop playsinline preload="auto" poster="assets/koi.jpg"><source src="assets/koi.mp4" type="video/mp4"></video></div><img class="petals pl" src="assets/petals.gif" alt=""><div class="ew"><h2 data-words>${e(F.title)}</h2>`;
F.c.forEach((c,i)=>{h+=`<div class="fc rv ${i==2?'h':''}" style="--d:${.5+i*.22}s"><em><span class="cnt" data-to="${i+1}" data-pad="2">0${i+1}</span></em><div><strong>${e(c[0])}</strong><p>${e(c[1])}</p></div></div>`});
h+=`</div></section>
<section class="s fin d" id="fin"><div class="fbg"><img src="assets/final.png" alt="Путь к Японии"></div><img class="uq" src="assets/final2.png" alt=""><img class="petals pr" src="assets/petals.gif" alt=""><a href="#top" class="up" aria-label="Наверх"><span>道</span></a></section>
<script src="assets/app.js"></script></body></html>`;
fs.writeFileSync('site/index.html',h);
