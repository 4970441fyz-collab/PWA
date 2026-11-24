const {scene,cover,fin}=require('./scenes.js');const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
const jobs=[...[1,2,3,4,5,6].map(n=>[`c${n}`,scene(n,'r'),1400,738,28]),['cover',cover('r'),1920,1080,0],['fin',fin('r'),1040,1500,0]];
for(const [f,svg,w,h,r] of jobs){const p=await b.newPage({viewport:{width:w,height:h}});await p.setContent(`<body style="margin:0;background:transparent"><div style="width:${w}px;height:${h}px;border-radius:${r}px;overflow:hidden">${svg.replace('<svg ','<svg style="width:100%;height:100%;display:block" ')}</div>`);await p.screenshot({path:`a/${f}.png`,omitBackground:true});await p.close()}
await b.close()})();
