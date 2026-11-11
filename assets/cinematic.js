/* Cinematic scroll / one continuous approved photo, reversible car zoom and procedural vortex.
   No wheel interception, no autoplay media, no external libraries. */
(() => {
  'use strict';
  const film=document.getElementById('esperienza');
  const canvas=document.getElementById('cin-reel');
  if(!film || !canvas)return;
  const ctx=canvas.getContext('2d',{alpha:false});
  const header=document.querySelector('.cin-header');
  const caps=[...film.querySelectorAll('[data-caption]')];
  const chapters=[...film.querySelectorAll('.cin-chapter')];
  const percent=document.getElementById('cin-percent');
  const fill=film.querySelector('.cin-progress-fill');
  const portal=document.getElementById('cin-portal');
  const portalLabel=document.getElementById('cin-portal-label');
  const portalCount=document.getElementById('cin-portal-count');
  const portalFill=document.getElementById('cin-portal-meter-fill');
  const menuBtn=document.querySelector('.cin-menu-button');
  const menu=document.getElementById('cin-mobile-menu');
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
  const shots=[{src:'/assets/scroll-02-hd.webp',fx:.57,fy:.51,fxM:.70,fyM:.50}];
  const clamp=(v,a=0,b=1)=>Math.min(b,Math.max(a,v));
  const smooth=v=>{v=clamp(v);return v*v*(3-2*v)};
  const easeIn=v=>v*v*v;
  let target=0,visible=0,raf=0,w=0,h=0,dpr=1,lastW=0,lastH=0,active=-1;

  function preload(s){
    if(s.image||s.loading)return;
    s.loading=true;
    // The source <img> is authoritative: it has a real /assets URL online and
    // an embedded data URL in the downloaded single-file preview. Reuse it.
    const source=film.querySelector('.cin-frame-fallback');
    if(source){
      const ready=()=>{s.image=source;s.loading=false;requestDraw()};
      if(source.complete && source.naturalWidth){ready();return}
      source.addEventListener('load',ready,{once:true});
      source.addEventListener('error',()=>{s.loading=false}, {once:true});
      return;
    }
    const img=new Image();img.decoding='async';
    img.onload=()=>{s.image=img;s.loading=false;requestDraw()};
    img.onerror=()=>{s.loading=false};
    img.src=s.src;
  }
  function resize(){
    const rect=canvas.getBoundingClientRect();
    const bw=Math.max(1,Math.round(rect.width)),bh=Math.max(1,Math.round(rect.height));
    if(lastW===bw&&lastH===bh)return;
    lastW=bw;lastH=bh;
    dpr=Math.min(devicePixelRatio||1,2,Math.sqrt(5100000/(bw*bh)));
    ctx.imageSmoothingEnabled=true; ctx.imageSmoothingQuality='high';
    w=canvas.width=Math.round(bw*dpr);h=canvas.height=Math.round(bh*dpr);
    requestDraw();
  }
  function shotRect(s,scaleFactor=1,stage=0){
    const im=s.image;if(!im)return null;
    const mobile=w/h<.8;
    const cover=Math.max(w/im.width,h/im.height);
    const zoom=scaleFactor;
    const dw=im.width*cover*zoom,dh=im.height*cover*zoom;
    const fx=mobile?s.fxM:s.fx,fy=mobile?s.fyM:s.fy;
    return {x:(w-dw)*fx+(stage-.5)*(mobile?.007:.025)*w,
            y:(h-dh)*fy+(stage-.5)*(mobile?.014:.022)*h,
            dw,dh};
  }
  function paintPhoto(s,zoom=1,stage=0,alpha=1){
    if(!s.image||alpha<=.001)return;
    const r=shotRect(s,zoom,stage);
    ctx.globalAlpha=alpha;
    ctx.drawImage(s.image,r.x,r.y,r.dw,r.dh);
    ctx.globalAlpha=1;
  }
  // One continuous high-resolution photo from the opening through the camera dive.
  // Scale stays moderate; the mathematically rendered vortex takes over before photo detail softens.
  const PHOTO_ZOOM = 1.21;
  const PHOTO_STAGE = .65;
  function paintCarZoom(p){
    const s=shots[0]; if(!s.image)return;
    const base=shotRect(s,PHOTO_ZOOM,PHOTO_STAGE);
    const u=smooth((p-.37)/.355);
    const fromX=(w*.5-base.x)/base.dw, fromY=(h*.5-base.y)/base.dh;
    const focusX=fromX+(.405-fromX)*u;
    const focusY=fromY+(.725-fromY)*u;
    const mult=1+.79*Math.pow(u,1.21);
    const dw=base.dw*mult,dh=base.dh*mult;
    const x=w*.5-focusX*dw,y=h*.5-focusY*dh;
    ctx.save();ctx.imageSmoothingEnabled=true;ctx.imageSmoothingQuality='high';
    ctx.drawImage(s.image,x,y,dw,dh);
    ctx.restore();
  }
  function vortex(p){
    const v=smooth((p-.595)/.255);
    if(v<=0)return;
    const cx=w*.5,cy=h*.5;
    const rr=Math.hypot(w,h)*.63;
    ctx.save();
    ctx.translate(cx,cy);
    // The graphic emerges from the hood: rather than magnify raster beyond
    // its captured details, drawn light trails create apparent forward depth.
    const blackout=smooth((v-.19)/.7)*.94;
    const veil=ctx.createRadialGradient(0,0,rr*.04,0,0,rr);
    veil.addColorStop(0,`rgba(2,12,8,${blackout*.96})`);
    veil.addColorStop(.38,`rgba(7,22,13,${blackout*.85})`);
    veil.addColorStop(1,`rgba(5,12,8,${Math.min(1,blackout+.15*v)})`);
    ctx.fillStyle=veil;ctx.fillRect(-cx,-cy,w,h);
    ctx.globalCompositeOperation='screen';
    // Luminous oval tunnel architecture: crisp vectors remain pin-sharp at any zoom.
    const halo=ctx.createRadialGradient(0,0,rr*.05,0,0,rr*.66);
    halo.addColorStop(0,`rgba(82,180,28,${v*.025})`);
    halo.addColorStop(.28,`rgba(163,242,58,${v*.14})`);
    halo.addColorStop(.62,`rgba(81,177,46,${v*.085})`);
    halo.addColorStop(1,'rgba(77,197,42,0)');
    ctx.fillStyle=halo;ctx.fillRect(-cx,-cy,w,h);
    ctx.save();ctx.rotate(v*.48);
    for(let k=0;k<6;k++){
      const wave=((k/6+v*.62)%1);
      const radius=rr*(.08+Math.pow(wave,1.8)*.86);
      const light=v*(.26+.55*(1-wave));
      ctx.beginPath();ctx.ellipse(0,0,radius,radius*.68,v*.19+k*.16,0,Math.PI*2);
      ctx.shadowBlur=13*dpr;ctx.shadowColor='#a5ff46';
      ctx.strokeStyle=`rgba(137,244,66,${light*.6})`;
      ctx.lineWidth=(4.2+1.8*(1-wave))*dpr;
      ctx.stroke();
      ctx.shadowBlur=0;
      ctx.strokeStyle=`rgba(240,255,199,${light*.85})`;
      ctx.lineWidth=1.25*dpr;ctx.stroke();
    }
    ctx.restore();
    const spin=v*6.4;
    const count=w<700?42:74;
    for(let i=0;i<count;i++){
      const unit=((i*0.618033988749895)%1);
      const ang=(i/count)*Math.PI*2;
      const span=rr*(.38+unit*.58)*(0.65+.38*v);
      const inner=rr*(.025+unit*.14)*(1-v*.5);
      ctx.beginPath();
      ctx.moveTo(Math.cos(ang+spin*.25)*inner,Math.sin(ang+spin*.25)*inner);
      ctx.bezierCurveTo(
        Math.cos(ang+spin*.4)*span*.26,Math.sin(ang+spin*.4)*span*.2,
        Math.cos(ang+spin*.1+.3)*span*.67,Math.sin(ang+spin*.1+.3)*span*.55,
        Math.cos(ang+spin*.05+.4)*span,Math.sin(ang+spin*.05+.4)*span);
      ctx.strokeStyle=i%8===0?`rgba(250,241,189,${v*.78})`:i%3===0?`rgba(161,243,65,${v*.57})`:`rgba(87,169,52,${v*.4})`;
      ctx.lineWidth=Math.max(.8,dpr*(i%9===0?2.6:1.2))*Math.max(.3,v);
      ctx.stroke();
    }
    for(let j=0;j<13;j++){
      const q=((j/13+v*.75)%1);
      const ringR=rr*Math.pow(q,2.7)*.8;
      ctx.strokeStyle=j%4===0?`rgba(244,239,170,${v*(1-q)*.46})`:`rgba(143,231,70,${v*(1-q)*.28})`;
      ctx.lineWidth=dpr*(j%4===0?2:1);
      ctx.beginPath();ctx.ellipse(0,0,ringR,ringR*.68,spin*.06+j*.16,0,Math.PI*2);ctx.stroke();
    }
    ctx.globalCompositeOperation='source-over';
    const center=ctx.createRadialGradient(0,0,0,0,0,rr*.33);
    center.addColorStop(0,`rgba(0,4,2,${v*.99})`);
    center.addColorStop(.48,`rgba(5,18,9,${v*.93})`);
    center.addColorStop(1,'rgba(0,4,2,0)');
    ctx.fillStyle=center;ctx.beginPath();ctx.arc(0,0,rr*.33,0,Math.PI*2);ctx.fill();
    ctx.restore();
  }
  function draw(){
    if(!ctx||!w||!h||reduced.matches||!shots[0].image)return;
    const p=visible;
    ctx.globalAlpha=1;ctx.fillStyle='#070b0b';ctx.fillRect(0,0,w,h);
    // No photo change anywhere: always the original sunset Lamborghini shot.
    if(p<.37){
      paintPhoto(shots[0],1.08+.13*smooth(p/.37),PHOTO_STAGE,1);
    } else if(p<.865){
      paintCarZoom(p);
    }
    vortex(p);
    const darkness=smooth((p-.835)/.105);
    if(darkness>0){ctx.fillStyle=`rgba(5,9,7,${darkness})`;ctx.fillRect(0,0,w,h)}
    const flash=smooth((p-.838)/.025)*(1-smooth((p-.878)/.065));
    if(flash>.001){
      const fg=ctx.createRadialGradient(w*.5,h*.5,0,w*.5,h*.5,Math.max(w,h)*.61);
      fg.addColorStop(0,`rgba(234,255,201,${flash*.48})`);
      fg.addColorStop(.19,`rgba(150,235,77,${flash*.22})`);
      fg.addColorStop(1,'rgba(68,120,21,0)');
      ctx.fillStyle=fg;ctx.fillRect(0,0,w,h);
    }
  }
  function chapterIndex(p){return p<.365?0:p<.625?1:2}
  function captionsOpacity(p,index){
    return index===0?(1-smooth((p-.17)/.15)):0;
  }
  function ui(){
    const p=visible;
    caps.forEach((el,i)=>{
      const opacity=reduced.matches?(i===0?1:0):captionsOpacity(p,i);
      el.style.opacity=opacity.toFixed(3);
      el.style.transform=`translate3d(0,${((1-opacity)*29).toFixed(1)}px,0) scale(${(.98+opacity*.02).toFixed(3)})`;
      el.style.pointerEvents=opacity>.6?'auto':'none';
      el.setAttribute('aria-hidden',opacity>.35?'false':'true');
    });
    const chapter=chapterIndex(p);
    if(active!==chapter){chapters.forEach((e,i)=>{e.classList.toggle('is-active',i===chapter);e.setAttribute('aria-pressed',String(i===chapter))});active=chapter;}
    if(percent)percent.textContent=String(Math.round(p*100)).padStart(2,'0')+'%';
    if(fill)fill.style.width=(p*100).toFixed(1)+'%';
    const load=clamp((p-.78)/.19),appearance=smooth((p-.79)/.10);
    if(portal){portal.style.opacity=reduced.matches?'0':String(appearance);
      portal.style.transform=`scale(${(.82+.18*appearance).toFixed(3)})`;
      portal.style.setProperty('--orbit-angle',`${(p*950).toFixed(1)}deg`);
      portal.setAttribute('aria-hidden',appearance>.1?'false':'true');}
    const n=Math.round(load*100);
    if(portalCount)portalCount.textContent=String(n).padStart(2,'0')+'%';
    if(portalFill)portalFill.style.width=n+'%';
    if(portalLabel)portalLabel.textContent=load>=.999?'BENVENUTO NEL MIO MONDO':'CARICAMENTO';
    film.classList.toggle('cin-is-vortex',p>.64);
    header?.classList.toggle('cin-header--solid',window.scrollY>window.innerHeight*.7);
  }
  function requestDraw(){if(raf)return;raf=requestAnimationFrame(()=>{raf=0;draw();ui()})}
  function animate(){raf=0;const diff=target-visible;visible+=Math.abs(diff)<.0006?diff:diff*.2;draw();ui();if(Math.abs(target-visible)>.0006)raf=requestAnimationFrame(animate)}
  function scroll(){
    const start=film.getBoundingClientRect().top+window.scrollY;
    const span=Math.max(1,film.offsetHeight-window.innerHeight);
    target=clamp((window.scrollY-start)/span);
    if(reduced.matches){visible=target;ui();return}
    if(!raf)raf=requestAnimationFrame(animate);
  }
  function start(){
    resize();preload(shots[0]);
    if(!reduced.matches)document.body.classList.add('cin-motion');
    scroll();
    const ob=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('cin-inview')}),{threshold:.09,rootMargin:'0px 0px -40px 0px'});
    document.querySelectorAll('.cin-appear').forEach(e=>ob.observe(e));
  }
  window.addEventListener('scroll',scroll,{passive:true});
  window.addEventListener('resize',()=>{resize();scroll()},{passive:true});
  document.addEventListener('visibilitychange',()=>{if(!document.hidden)scroll()});
  if(reduced.addEventListener)reduced.addEventListener('change',()=>{document.body.classList.toggle('cin-motion',!reduced.matches);scroll()});
  chapters.forEach(btn=>btn.addEventListener('click',()=>{
    const begin=film.getBoundingClientRect().top+window.scrollY;
    const span=Math.max(1,film.offsetHeight-window.innerHeight);
    const go=clamp(Number(btn.dataset.go)||0);
    window.scrollTo({top:begin+span*go,behavior:reduced.matches?'instant':'smooth'});
  }));
  if(menuBtn&&menu){
    const close=()=>{menu.hidden=true;menuBtn.setAttribute('aria-expanded','false');menuBtn.setAttribute('aria-label','Apri menu')};
    menuBtn.addEventListener('click',()=>{const opens=menu.hidden;menu.hidden=!opens;menuBtn.setAttribute('aria-expanded',String(opens));menuBtn.setAttribute('aria-label',opens?'Chiudi menu':'Apri menu')});
    menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
    window.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
    window.addEventListener('resize',()=>{if(innerWidth>850)close()});
  }
  start();
})();
