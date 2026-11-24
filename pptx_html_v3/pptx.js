const pptxgen=require('pptxgenjs');const {applyTheme}=require('/mnt/skills/public/pptx/scripts/apply_theme.js');
const {T,F,cover}=require('./content.json');
const RED='E61E14',INK='121214',PAPER='F6F2EB',CARD='222226',F0='Onest',KJ='Yu Mincho';
const THEME={name:'Путь эксперта',headFontFace:F0,bodyFontFace:F0,colors:{dk1:INK,lt1:'FFFFFF',dk2:CARD,lt2:PAPER,accent1:RED,accent2:'8B1528',accent3:'FFB7C5',accent4:'D4A843',accent5:'6B6B70',accent6:'C9C1B4',hlink:RED,folHlink:'8B1528'}};
const pres=new pptxgen();pres.layout='LAYOUT_WIDE';pres.theme={headFontFace:F0,bodyFontFace:F0};pres.title='Путь эксперта';
['LIGHT','DARK'].forEach(n=>pres.defineSlideMaster({title:n,background:{color:n=='LIGHT'?PAPER:INK},objects:[]}));
const sh=(s,t,o)=>s.addShape(t,Object.assign({line:{color:o.fill.color,width:0}},o));
const tx=(s,t,o)=>s.addText(t,Object.assign({isTextBox:true,margin:0,fontFace:F0},o));
const hanko=(s,x,y,sz,ch,g)=>{sh(s,'roundRect',{x,y,w:sz,h:sz,rectRadius:sz*.12,fill:{color:RED},objectName:g+'_hanko'});tx(s,ch,{x,y,w:sz,h:sz,fontSize:sz*38,fontFace:KJ,bold:true,color:'FFFFFF',align:'center',valign:'middle',objectName:g+'_hankot'});};
// cover
{const s=pres.addSlide({masterName:'LIGHT'});
 s.addImage({path:'a/cover.png',x:0,y:0,w:13.333,h:7.5,altText:'Самурай на фоне красного солнца (можно заменить)'});
 tx(s,cover.k.toUpperCase(),{x:.8,y:1.75,w:6.5,h:.3,fontSize:13,bold:true,color:RED,charSpacing:3,objectName:'g1_k'});
 tx(s,cover.t,{x:.8,y:2.15,w:6.4,h:1.2,fontSize:58,bold:true,color:INK,valign:'top',objectName:'g2_wipe_t'});
 tx(s,cover.s,{x:.8,y:3.5,w:5.2,h:1.5,fontSize:19,color:'3A3A40',valign:'top',objectName:'g3_s'});
 sh(s,'roundRect',{x:.8,y:5.9,w:2.2,h:.5,rectRadius:.25,fill:{color:INK},objectName:'g4_pill'});
 tx(s,cover.d,{x:.8,y:5.9,w:2.2,h:.5,fontSize:14,color:'FFFFFF',align:'center',valign:'middle',objectName:'g4_pillt'});
 hanko(s,3.3,5.85,.6,'道','g4');}
T.forEach((t,i)=>{const dk=i%2==0,s=pres.addSlide({masterName:dk?'DARK':'LIGHT'});
 const fg=dk?'FFFFFF':INK,cb=dk?CARD:'FFFFFF',bd=dk?'3A3A40':'E4DCCF',mu=dk?'D9D4CA':'3A3A40',off=dk?'55555C':'C9C1B4';
 tx(s,'ШАГ '+(i+1)+' ИЗ 6',{x:.6,y:.55,w:3,h:.25,fontSize:12,bold:true,color:RED,charSpacing:3,objectName:'g1_k'});
 for(let j=0;j<6;j++)sh(s,'roundRect',{x:4.2+j*.46+(j>i?.4:0),y:.62,w:j==i?.8:.34,h:.1,rectRadius:.05,fill:{color:j==i?RED:off},objectName:'g1_dot'+j});
 tx(s,t[1],{x:.6,y:1.0,w:7.2,h:1.4,fontSize:28,bold:true,color:fg,valign:'top',objectName:'g1_wipe_title'});
 const wt=[t[2],t[3]].map(x=>Math.ceil(x.length/50)+2.4),tot=wt[0]+wt[1];let cy=2.6;
 [['ЧТО ПРОИСХОДИТ?',t[2]],['ПОЧЕМУ ЭТО ВАЖНО КЛИЕНТУ?',t[3]]].forEach((c,k)=>{const ch=4.05*wt[k]/tot,y=cy;cy+=ch+.25;
  sh(s,'roundRect',{x:.6,y,w:7.2,h:ch,rectRadius:.2,fill:{color:cb},line:{color:bd,width:1},objectName:'g'+(2+k)+'_card'});
  sh(s,'roundRect',{x:.6,y:y+ch*.2,w:.07,h:ch*.6,rectRadius:.03,fill:{color:RED},objectName:'g'+(2+k)+'_bar'});
  tx(s,[{text:c[0],options:{fontSize:12,bold:true,color:RED,charSpacing:3,breakLine:true,paraSpaceAfter:7}},{text:c[1],options:{fontSize:17,color:mu}}],{x:1.0,y:y+.1,w:6.55,h:ch-.2,valign:'middle',objectName:'g'+(2+k)+'_txt'});});
 s.addImage({path:`a/c${i+1}.png`,x:8.2,y:.6,w:4.55,h:2.4,altText:'Японская иллюстрация (можно заменить)',objectName:'g2_wipe_img'});
 sh(s,'roundRect',{x:8.45,y:2.45,w:1.15,h:.4,rectRadius:.2,fill:{color:INK},objectName:'g3_num'});
 tx(s,'0'+(i+1)+' / 06',{x:8.45,y:2.45,w:1.15,h:.4,fontSize:12,bold:true,color:'FFFFFF',align:'center',valign:'middle',objectName:'g3_numt'});
 hanko(s,12.05,.4,.55,'道','g3');
 sh(s,'roundRect',{x:8.2,y:3.25,w:4.55,h:3.65,rectRadius:.25,fill:{color:RED},objectName:'g4_wipe_plate'});
 tx(s,t[0],{x:11.2,y:6.05,w:1.4,h:.85,fontSize:44,fontFace:KJ,color:'FFFFFF',transparency:70,align:'right',valign:'bottom',objectName:'g4_kanji'});
 tx(s,'ЧТО ОБСУДИТЬ С КЛИЕНТОМ?',{x:8.6,y:3.6,w:3.8,h:.3,fontSize:13,bold:true,color:'FFFFFF',charSpacing:3,objectName:'g5_plab'});
 sh(s,'rect',{x:8.6,y:4.05,w:.8,h:.05,fill:{color:'FFFFFF'},objectName:'g5_line'});
 tx(s,t[4],{x:8.6,y:4.3,w:3.75,h:2.5,fontSize:20,bold:true,color:'FFFFFF',valign:'top',objectName:'g6_ptxt'});});
// final
{const s=pres.addSlide({masterName:'DARK'});
 s.addImage({path:'a/fin.png',x:0,y:0,w:5.2,h:7.5,altText:'Фудзи, тории и красное солнце (можно заменить)'});
 // sizing crop uses full-size w/h: set below
 tx(s,F.title,{x:5.9,y:.7,w:6.9,h:1.6,fontSize:30,bold:true,color:'FFFFFF',valign:'top',objectName:'g1_wipe_title'});
 F.c.forEach((c,i)=>{const y=2.6+i*1.45,hl=i==2;
  sh(s,'roundRect',{x:5.9,y,w:6.85,h:1.3,rectRadius:.2,fill:{color:hl?RED:CARD},line:{color:hl?RED:'3A3A40',width:1},objectName:'g'+(2+i)+'_card'});
  tx(s,'0'+(i+1),{x:6.15,y,w:.9,h:1.3,fontSize:30,bold:true,color:hl?'FFFFFF':RED,valign:'middle',objectName:'g'+(2+i)+'_n'});
  tx(s,[{text:c[0],options:{bold:true,fontSize:17,color:'FFFFFF',breakLine:true}},{text:c[1],options:{fontSize:13,color:hl?'FFFFFF':'D9D4CA'}}],{x:7.1,y:y+.12,w:5.4,h:1.06,valign:'middle',objectName:'g'+(2+i)+'_t'});});
 hanko(s,12.1,.45,.55,'道','g5');}
require('fs').writeFileSync('o.json','1');
pres.writeFile({fileName:'raw.pptx'}).then(()=>applyTheme('raw.pptx',THEME)).then(()=>console.log('ok'));
