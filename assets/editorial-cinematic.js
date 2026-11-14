/* Progressive enhancements for secondary pages; no dependency on other animation libraries. */
(()=>{
 const btn=document.querySelector('.cin-sub-header .cin-menu-button');
 const nav=document.querySelector('.cin-sub-header .cin-mobile-menu');
 if(btn&&nav){
   const close=()=>{nav.hidden=true;btn.setAttribute('aria-expanded','false');btn.setAttribute('aria-label','Apri menu')};
   btn.addEventListener('click',()=>{const open=nav.hidden;nav.hidden=!open;btn.setAttribute('aria-expanded',String(open));btn.setAttribute('aria-label',open?'Chiudi menu':'Apri menu')});
   nav.addEventListener('click',e=>{if(e.target.closest('a'))close()});
   document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!nav.hidden){close();btn.focus()}});
   window.addEventListener('resize',()=>{if(window.innerWidth>1050)close()});
 }
})();
