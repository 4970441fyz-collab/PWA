import zipfile,re,sys
src,dst=sys.argv[1:3]
zi=zipfile.ZipFile(src);zo=zipfile.ZipFile(dst,'w',zipfile.ZIP_DEFLATED)
def timing(items):
    n=[2]
    def nid(): n[0]+=1; return n[0]
    eff='';first=True
    for sid,g,wipe in items:
        nt='afterEffect' if first else 'withEffect';first=False
        pid,sub,flt,dur=(22,8,'wipe(left)',800) if wipe else (10,0,'fade',700)
        eff+=(f'<p:par><p:cTn id="{nid()}" presetID="{pid}" presetClass="entr" presetSubtype="{sub}" fill="hold" nodeType="{nt}"><p:stCondLst><p:cond delay="{g*320}"/></p:stCondLst><p:childTnLst>'
        f'<p:set><p:cBhvr><p:cTn id="{nid()}" dur="1" fill="hold"><p:stCondLst><p:cond delay="0"/></p:stCondLst></p:cTn><p:tgtEl><p:spTgt spid="{sid}"/></p:tgtEl><p:attrNameLst><p:attrName>style.visibility</p:attrName></p:attrNameLst></p:cBhvr><p:to><p:strVal val="visible"/></p:to></p:set>'
        f'<p:animEffect transition="in" filter="{flt}"><p:cBhvr><p:cTn id="{nid()}" dur="{dur}"/><p:tgtEl><p:spTgt spid="{sid}"/></p:tgtEl></p:cBhvr></p:animEffect></p:childTnLst></p:cTn></p:par>')
    return ('<p:transition spd="slow"><p:fade/></p:transition><p:timing><p:tnLst><p:par><p:cTn id="1" dur="indefinite" restart="never" nodeType="tmRoot"><p:childTnLst><p:seq concurrent="1" nextAc="seek"><p:cTn id="2" dur="indefinite" nodeType="mainSeq"><p:childTnLst>'
    '<p:par><p:cTn id="900" fill="hold"><p:stCondLst><p:cond delay="indefinite"/><p:cond evt="onBegin" delay="0"><p:tn val="2"/></p:cond></p:stCondLst><p:childTnLst><p:par><p:cTn id="901" fill="hold"><p:stCondLst><p:cond delay="0"/></p:stCondLst><p:childTnLst>'
    +eff+'</p:childTnLst></p:cTn></p:par></p:childTnLst></p:cTn></p:par></p:childTnLst></p:cTn><p:prevCondLst><p:cond evt="onPrev" delay="0"><p:tgtEl><p:sldTgt/></p:tgtEl></p:cond></p:prevCondLst><p:nextCondLst><p:cond evt="onNext" delay="0"><p:tgtEl><p:sldTgt/></p:tgtEl></p:cond></p:nextCondLst></p:seq></p:childTnLst></p:cTn></p:par></p:tnLst></p:timing>')
for it in zi.infolist():
    d=zi.read(it.filename)
    if re.fullmatch(r'ppt/slides/slide\d+\.xml',it.filename):
        x=d.decode('utf8')
        items=[(m.group(1),int(m.group(3)),'wipe' in m.group(2)) for m in re.finditer(r'<p:cNvPr id="(\d+)" name="((?:\w*?)g(\d+)_[^"]*)"',x)]
        items=[(a,g,w) for a,n,g,w in [(i[0],0,i[1],i[2]) for i in items]] if False else items
        x=x.replace('</p:sld>',timing(items)+'</p:sld>')
        d=x.encode('utf8')
    zo.writestr(it,d)
zo.close()
