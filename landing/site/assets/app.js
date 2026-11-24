const $=(s,r=document)=>[...r.querySelectorAll(s)],ease=x=>x>=1?1:1-Math.pow(2,-10*x);
// split text
$('[data-words]').forEach(el=>{let n=0;el.innerHTML=el.textContent.trim().split(/\s+/).map(x=>'<span class="w"><span style="--i:'+(n++)+'">'+x+'</span></span>').join(' ')});
$('[data-chars]').forEach(el=>{let n=0;el.innerHTML=el.textContent.trim().split(/\s+/).map(w=>'<span class="nw">'+[...w].map(c=>'<span class="w"><span style="--i:'+(n++)+';--b:.5s">'+c+'</span></span>').join('')+'</span>').join(' ')});
// counters
const raf=new WeakMap();function count(s){$('.cnt',s).forEach(c=>{cancelAnimationFrame(raf.get(c));const to=+c.dataset.to,dec=+c.dataset.dec||0,pad=c.dataset.pad,t0=performance.now()+600;const f=t=>{const k=Math.max(0,(t-t0)/1800),v=to*ease(k);let o=dec?v.toFixed(dec).replace('.',','):String(Math.round(v));if(pad)o=o.padStart(2,'0');c.textContent=o;if(k<1)raf.set(c,requestAnimationFrame(f))};raf.set(c,requestAnimationFrame(f))})}
// preloader
let pc=0;const pe=document.getElementById('pc'),t0=performance.now();
const tick=()=>{pc=Math.min(100,Math.round((performance.now()-t0)/16));pe.textContent=pc;if(pc<100)requestAnimationFrame(tick)};tick();
const loaded=new Promise(r=>addEventListener('load',r));
Promise.all([loaded,new Promise(r=>setTimeout(r,1800))]).then(()=>{pe.textContent=100;const p=document.getElementById('pre');p.classList.add('open');setTimeout(()=>{document.body.classList.add('ready');$('video').forEach(v=>v.play().catch(()=>{}))},500);setTimeout(()=>p.remove(),2000)});
setTimeout(()=>{if(document.getElementById('pre')){document.body.classList.add('ready');document.getElementById('pre').classList.add('open')}},7000);
// reveal + video play only in view
const S=$('.s'),io=new IntersectionObserver(es=>es.forEach(x=>{const s=x.target;if(x.isIntersecting){if(!s.classList.contains('in')){s.classList.add('in');count(s)}$('video',s).forEach(v=>v.play().catch(()=>{}))}else{$('video',s).forEach(v=>v.pause())}}),{threshold:.3});S.forEach(s=>io.observe(s));
// path nav + progress
const nav=document.querySelector('.path'),links=$('.path a'),bar=document.querySelector('.pbar'),ln=document.querySelector('.path .line i'),topics=$('.topic'),mt=document.querySelector('.mt'),hv=document.querySelector('.hv'),hin=document.querySelector('.hin'),hero=document.querySelector('.hero'),fbg=document.querySelector('.fbg img'),uq=document.querySelector('.uq'),fin=document.querySelector('.fin');
let last=scrollY,vel=0,mx=0;
function loop(){const y=scrollY,H=innerHeight,doc=document.documentElement.scrollHeight-H;vel+=((y-last)-vel)*.1;last=y;
 bar.style.transform='scaleX('+(y/doc)+')';
 nav.classList.toggle('on',y>H*.6&&y<doc-H*.5);
 const f=topics[0].offsetTop-H*.4,e=topics[5].offsetTop+H*.5;ln.style.height=Math.min(100,Math.max(0,(y-f)/(e-f)*100))+'%';
 topics.forEach((t,i)=>{const r=t.getBoundingClientRect();if(r.top<H*.5&&r.bottom>H*.5)links.forEach((l,j)=>l.classList.toggle('a',i==j))});
 if(y<H*1.2){hv.style.transform='scale('+(1+y/H*.18)+') translateY('+y*.12+'px)';hin.style.transform='translateY('+(-y*.25)+'px)';hin.style.opacity=Math.max(0,1-y/H*1.1)}
 mx-=.6+vel*.25;mt.style.transform='translateX('+(mx%(mt.scrollWidth/6))+'px)';
 $('[data-par]').forEach(el=>{const r=el.getBoundingClientRect();if(r.bottom<-200||r.top>H+200)return;const c=(r.top+r.height/2-H/2),k=+el.dataset.par;if(el.classList.contains('bgk'))el.style.transform='translateY('+c*k+'px) rotate('+c*.004+'deg)';else{const m=el.querySelector('.mi');if(m)m.style.transform='translateY('+c*-.08+'px) scale(1.04)'}});
 const fr=fin.getBoundingClientRect(),p=Math.min(1,Math.max(0,1-fr.top/H));fbg.style.transform='scale('+(1.3-p*.3)+')';uq.style.transform='translateY('+(1-p)*-18+'vh) rotate('+(1-p)*4+'deg)';
 requestAnimationFrame(loop)}loop();
// cursor + tilt
const cur=document.querySelector('.cur');addEventListener('mousemove',e=>{cur.style.transform='translate('+e.clientX+'px,'+e.clientY+'px)'});
$('a,.card,.plate,.art,.fc').forEach(el=>{el.addEventListener('mouseenter',()=>cur.classList.add('big'));el.addEventListener('mouseleave',()=>cur.classList.remove('big'))});
$('.tilt').forEach(el=>{el.addEventListener('mousemove',e=>{const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;el.style.transform='rotateY('+x*8+'deg) rotateX('+-y*8+'deg)'});el.addEventListener('mouseleave',()=>el.style.transform='')});
$('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const t=document.querySelector(a.getAttribute('href'));if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth'})}}));
