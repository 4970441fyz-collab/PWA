const fs=require('fs');const {T,F,cover}=require('./content.json');const {scene,cover:cv,fin}=require('./scenes.js');
const b=(f,m)=>`data:${m};base64,`+fs.readFileSync(f).toString('base64');
const e=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;');
const num=s=>e(s).replace(/(\d+(?:,\d+)?)(?=%| тысяч| млн)/g,(m)=>`<span class="cnt" data-to="${m.replace(',','.')}" data-dec="${m.includes(',')?1:0}">${m}</span>`);
const ds=(g)=>'';
let h=`<!DOCTYPE html><html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Путь эксперта</title><style>
@font-face{font-family:Onest;src:url(${b('a/Onest.woff','font/woff')}) format('woff');font-weight:100 900}
:root{--r:#E61E14;--ink:#121214;--paper:#F6F2EB;--card:#222226;--ease:cubic-bezier(.16,1,.3,1)}
*{box-sizing:border-box;margin:0}html{scroll-snap-type:y mandatory;scroll-behavior:smooth;background:var(--ink)}
body{font-family:Onest,Arial,sans-serif;letter-spacing:-.02em;-webkit-font-smoothing:antialiased}
.s{height:100vh;min-height:560px;scroll-snap-align:start;position:relative;overflow:hidden;display:flex;align-items:center;padding:0 6vw}
.l{background:var(--paper);color:var(--ink)}.d{background:var(--ink);color:#fff}
.d::before{content:"";position:absolute;inset:0;opacity:.05;background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='24'%3E%3Cg fill='none' stroke='%23fff' stroke-width='1'%3E%3Ccircle cx='24' cy='24' r='22'/%3E%3Ccircle cx='24' cy='24' r='16'/%3E%3Ccircle cx='24' cy='24' r='10'/%3E%3Ccircle cx='0' cy='12' r='22'/%3E%3Ccircle cx='0' cy='12' r='16'/%3E%3Ccircle cx='0' cy='12' r='10'/%3E%3Ccircle cx='48' cy='12' r='22'/%3E%3Ccircle cx='48' cy='12' r='16'/%3E%3Ccircle cx='48' cy='12' r='10'/%3E%3C/g%3E%3C/svg%3E");pointer-events:none}
.k{color:var(--r);font-size:max(12px,.85vw);font-weight:700;letter-spacing:.05em;text-transform:uppercase}
.w{display:inline-block;overflow:hidden;vertical-align:top;padding-bottom:.14em;margin-bottom:-.14em}.w>span{display:inline-block;transform:translateY(115%);transition:transform 1.1s var(--ease) calc(var(--i)*70ms + var(--b,.15s))}.on .w>span{transform:none}
.rv{opacity:0;transform:translateY(24px);transition:opacity .9s var(--ease) var(--t,0s),transform .9s var(--ease) var(--t,0s)}.on .rv{opacity:1;transform:none}
.cl{clip-path:inset(0 100% 0 0);transition:clip-path 1.2s var(--ease) var(--t,0s)}.on .cl{clip-path:inset(0)}
h1,h2{font-weight:700;line-height:1.08}
.hanko{position:absolute;display:grid;place-items:center;background:var(--r);color:#fff;border-radius:12%;font:700 1.3vw 'Yu Mincho','Noto Serif CJK JP',serif;width:2.6vw;height:2.6vw;min-width:34px;min-height:34px}
.kj{font-family:'Yu Mincho','Noto Serif CJK JP',serif}
.intro{padding:0}.intro .bgimg{position:absolute;inset:0;overflow:hidden}.slot,.slot svg,.slot img{position:absolute;inset:0;width:100%;height:100%;display:block;object-fit:cover}.intro .slot{animation:kb 22s ease-in-out infinite alternate;transform-origin:75% 40%}
@keyframes kb{from{transform:scale(1)}to{transform:scale(1.09)}}
.intro .tx{position:relative;z-index:2;padding:6vh 6vw 0;width:50vw}.intro h1{font-size:clamp(44px,6.2vw,110px);margin:2.2vh 0 3vh}.intro p{font-size:clamp(16px,1.5vw,26px);max-width:30vw;color:#3A3A40;line-height:1.4;font-weight:300}
.pill{display:inline-block;margin-top:5vh;background:var(--ink);color:#fff;border-radius:100px;padding:1.4vh 1.8vw;font-size:max(13px,.9vw)}
.sun{position:absolute;left:34vw;top:14vh;width:5vw;height:5vw;border-radius:50%;background:var(--r);opacity:.0;animation:pulse 5s ease-in-out infinite}@keyframes pulse{50%{transform:scale(1.15);opacity:.18}}
.g{display:grid;grid-template-columns:1.5fr 1fr;gap:3vw;width:100%;height:84vh;position:relative}
.lc{display:flex;flex-direction:column;gap:2vh;min-width:0}.lc h2{font-size:clamp(24px,2.6vw,46px);margin:1.4vh 0 1vh;min-height:3.2em}
.c{background:#fff;border:1px solid #E4DCCF;border-radius:20px;padding:2vh 1.8vw 2vh 2.2vw;flex:var(--f,1) 1 0;position:relative;display:flex;flex-direction:column;justify-content:center}.d .c{background:var(--card);border-color:#3A3A40}
.c::before{content:"";position:absolute;left:0;top:18%;bottom:18%;width:5px;background:var(--r);border-radius:0 5px 5px 0;transform:scaleY(0);transition:transform 1s var(--ease) calc(var(--t,0s) + .4s)}.on .c::before{transform:none}
.c b{display:block;color:var(--r);font-size:max(11px,.75vw);letter-spacing:.05em;margin-bottom:1.2vh}.c p{font-size:clamp(16px,1.65vw,28px);line-height:1.45;font-weight:300;color:#3A3A40}.d .c p{color:#D9D4CA}
.rc{display:flex;flex-direction:column;gap:2vh;min-width:0}
.art{height:30vh;border-radius:24px;overflow:hidden;position:relative;--t:.3s}
.pw{position:absolute;inset:0;transform:translate(calc(var(--mx,0)*-14px),calc(var(--my,0)*-9px)) scale(1.08)}
.art .z{position:absolute;inset:0;animation:kb 16s ease-in-out infinite alternate}
.step{position:absolute;left:1.1vw;bottom:1.6vh;background:var(--ink);color:#fff;border-radius:100px;padding:.8vh 1.1vw;font-size:max(12px,.9vw);font-weight:700;letter-spacing:0}
.art .hanko{right:1vw;top:1.6vh}
.pl{background:var(--r);color:#fff;border-radius:28px;padding:4vh 2.2vw;flex:1;position:relative;overflow:hidden;--t:.9s}.pl b{font-size:max(12px,.95vw);letter-spacing:.05em}.pl hr{border:0;height:4px;width:56px;background:#fff;margin:2.2vh 0;transform-origin:left;transform:scaleX(0);transition:transform .9s var(--ease) 1.5s}.on .pl hr{transform:none}
.pl p{font-size:clamp(18px,1.8vw,31px);font-weight:700;line-height:1.3;position:relative;z-index:2}.pl .kj{position:absolute;right:1.4vw;bottom:.4vh;font-size:min(8vw,14vh);opacity:.25;line-height:1}
.nav{position:fixed;left:0;top:0;height:4px;background:var(--r);z-index:9;transition:width .8s var(--ease)}
.dots{position:fixed;right:1.6vw;top:50%;transform:translateY(-50%);display:flex;flex-direction:column;gap:12px;z-index:9}.dots i{width:8px;height:8px;border-radius:50%;background:#9a9a9a66;cursor:pointer;transition:all .5s var(--ease)}.dots i.a{background:var(--r);height:26px;border-radius:6px}
.vt{position:absolute;left:1.6vw;top:50%;transform:translateY(-50%);writing-mode:vertical-rl;font:700 1vw 'Yu Mincho','Noto Serif CJK JP',serif;letter-spacing:.5em;opacity:.35}
.fin{padding:0}.fin .art{position:absolute;left:0;top:0;bottom:0;width:38vw;height:auto;border-radius:0}.fin .rt{margin-left:44vw;width:48vw;position:relative}.fin h2{font-size:clamp(26px,3vw,52px);margin-bottom:5vh}
.fc{display:flex;gap:1.6vw;align-items:center;background:var(--card);border:1px solid #3A3A40;border-radius:20px;padding:2.4vh 1.8vw;margin-bottom:2vh}.fc.h{background:var(--r);border-color:var(--r)}
.fc em{font-style:normal;font-weight:700;font-size:clamp(28px,3vw,52px);color:var(--r);min-width:2.4ch}.fc.h em{color:#fff}.fc strong{display:block;font-size:clamp(16px,1.5vw,25px);margin-bottom:.6vh}.fc p{font-size:clamp(13px,1.1vw,18px);font-weight:300;color:#D9D4CA;line-height:1.4}.fc.h p{color:#fff}
@media(max-width:820px){.s{height:auto;min-height:100vh;padding:9vh 6vw}.g{grid-template-columns:1fr;height:auto}.intro .tx{width:100%}.intro p{max-width:none}.art{height:30vh}.fin .art{position:relative;width:100%;height:30vh}.fin .rt{margin:0;width:100%}.dots,.vt{display:none}}
@media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}.w>span,.rv{transform:none;opacity:1}.cl{clip-path:none}}
</style></head><body><div class="nav"></div><div class="dots"></div>
`;
const words=(t,b=.15)=>`<span data-split style="--b:${b}s">${e(t)}</span>`;
h+=`<section class="s l intro"><div class="bgimg"><div class="slot" data-slot="cover">${cv("cv")}</div></div><div class="tx"><div class="k rv">${e(cover.k)}</div><h1 data-split data-chars>${e(cover.t)}</h1><p class="rv" style="--t:.9s">${e(cover.s)}</p><span class="pill rv" style="--t:1.2s">${e(cover.d)}</span></div><div class="hanko rv" style="right:3vw;bottom:4vh;--t:1.4s">道</div></section>`;
const P=(k)=>`<div class="slot" data-slot="s${k}">${scene(k,'s'+k)}</div>`;
T.forEach((t,i)=>{h+=`<section class="s ${i%2==0?'d':'l'}"><div class="g"><div class="lc"><div class="k rv">Шаг ${i+1} из 6</div><h2 data-split>${e(t[1])}</h2><div class="c rv" style="--t:.5s;--f:${Math.ceil(t[2].length/50)+2.4}"><b>ЧТО ПРОИСХОДИТ?</b><p>${num(t[2])}</p></div><div class="c rv" style="--t:.75s;--f:${Math.ceil(t[3].length/50)+2.4}"><b>ПОЧЕМУ ЭТО ВАЖНО КЛИЕНТУ?</b><p>${num(t[3])}</p></div></div><div class="rc"><div class="art cl"><div class="pw"><div class="z">${P(i+1)}</div></div><span class="step"><span class="cnt" data-to="${i+1}" data-pad="2">0${i+1}</span> / 06</span><div class="hanko">道</div></div><div class="pl cl"><b>ЧТО ОБСУДИТЬ С КЛИЕНТОМ?</b><hr><p class="rv" style="--t:1.3s">${num(t[4])}</p><div class="kj">${t[0]}</div></div></div></div></section>`});
h+=`<section class="s d fin"><div class="art cl"><div class="pw"><div class="z"><div class="slot" data-slot="final">${fin('fn')}</div></div></div></div><div class="rt"><h2 data-split>${e(F.title)}</h2>`;
F.c.forEach((c,i)=>{h+=`<div class="fc rv ${i==2?'h':''}" style="--t:${.6+i*.25}s"><em><span class="cnt" data-to="${i+1}" data-pad="2">0${i+1}</span></em><div><strong>${e(c[0])}</strong><p>${e(c[1])}</p></div></div>`});
h+=`</div><div class="hanko rv" style="right:3vw;top:5vh;--t:1.6s">道</div></section>
<script>
/* ЗАМЕНА КАРТИНОК: впишите путь к файлу рядом с этим html, например s1:'samurai.jpg'. Пустая строка = оставить рисунок. */
const IMAGES={cover:'',s1:'',s2:'',s3:'',s4:'',s5:'',s6:'',final:''};
document.querySelectorAll('.slot').forEach(el=>{const u=IMAGES[el.dataset.slot];if(u)el.innerHTML='<img src="'+u+'" alt="">'});
document.querySelectorAll('[data-split]').forEach(el=>{const ch=el.hasAttribute('data-chars');const p=ch?el.textContent.trim().split(/\\s+/):el.textContent.trim().split(/\\s+/);let n=0;el.innerHTML=p.map(x=>ch?'<span style="display:inline-block;white-space:nowrap">'+[...x].map(c=>'<span class="w"><span style="--i:'+(n++)+'">'+c+'</span></span>').join('')+'</span>':'<span class="w"><span style="--i:'+(n++)+'">'+x+'</span></span>').join(' ')});
const S=[...document.querySelectorAll('.s')],D=document.querySelector('.dots'),N=document.querySelector('.nav');
S.forEach((s,i)=>{const d=document.createElement('i');d.onclick=()=>s.scrollIntoView({behavior:'smooth'});D.append(d)});
const ease=x=>x>=1?1:1-Math.pow(2,-10*x);let raf=new WeakMap();
function count(s){s.querySelectorAll('.cnt').forEach(c=>{cancelAnimationFrame(raf.get(c));const to=+c.dataset.to,dec=+c.dataset.dec||0,pad=c.dataset.pad,t0=performance.now()+700;const f=t=>{const k=Math.max(0,(t-t0)/1700),v=to*ease(k);let o=dec?v.toFixed(dec).replace('.',','):String(Math.round(v));if(pad)o=o.padStart(2,'0');c.textContent=o;if(k<1)raf.set(c,requestAnimationFrame(f))};raf.set(c,requestAnimationFrame(f))})}
const io=new IntersectionObserver(es=>es.forEach(x=>{const s=x.target;if(x.isIntersecting){s.classList.add('on');count(s);const i=S.indexOf(s);N.style.width=((i+1)/S.length*100)+'%';[...D.children].forEach((d,j)=>d.classList.toggle('a',j==i))}else s.classList.remove('on')}),{threshold:.55});
S.forEach(s=>io.observe(s));
addEventListener('mousemove',e=>{const r=document.documentElement.style;r.setProperty('--mx',(e.clientX/innerWidth-.5).toFixed(3));r.setProperty('--my',(e.clientY/innerHeight-.5).toFixed(3))});
addEventListener('keydown',e=>{const k=e.key;if(['ArrowRight','ArrowDown','PageDown',' '].includes(k)){e.preventDefault();scrollBy(0,innerHeight)}if(['ArrowLeft','ArrowUp','PageUp'].includes(k)){e.preventDefault();scrollBy(0,-innerHeight)}});
</script></body></html>`;
fs.writeFileSync('/mnt/user-data/outputs/Put_eksperta_v3.html',h);console.log(h.length)
