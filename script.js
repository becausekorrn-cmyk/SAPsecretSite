
document.addEventListener('DOMContentLoaded', function(){
  const menuItems = document.querySelectorAll('.anomaly-menu li');
  const dossiers = document.querySelectorAll('.dossier');
  const modal = document.getElementById('modal');
  const closeModal = document.getElementById('closeModal');

  function setActive(id){
    menuItems.forEach(li=>{
      if(li.getAttribute('data-id') === id || li.textContent.trim().startsWith(id)){
        li.classList.add('active');
      } else li.classList.remove('active');
    });
    dossiers.forEach(d=>{
      if(d.getAttribute('data-id') === id) d.classList.add('active'), d.scrollIntoView({behavior:'smooth', block:'center'});
      else d.classList.remove('active');
    });
  }

  // map clicks
  menuItems.forEach(li=>{
    li.addEventListener('click', ()=>{
      const txt = li.getAttribute('data-id') || li.textContent.trim().split('.')[0];
      // if unknown, show modal
      if(txt === '??1' || txt === '??2' || txt === '??3' || li.textContent.includes('Неизвестный')) {
        modal.classList.remove('hidden');
      } else {
        setActive(txt);
      }
    });
  });

  closeModal.addEventListener('click', ()=> modal.classList.add('hidden'));

  // initial active is 50
  setActive('50');

  // small film jitter
  let t=0;
  setInterval(()=>{
    t+=0.03;
    document.body.style.backgroundPosition = (Math.sin(t)*3)+'px '+(Math.cos(t)*3)+'px';
  },50);

  // quick pulse on stamp to feel alive
  const stamps = document.querySelectorAll('.dossier-stamp');
  setInterval(()=> {
    stamps.forEach(s=> s.style.transform = 'rotate(-10deg) scale(1.02)');
    setTimeout(()=> stamps.forEach(s=> s.style.transform = 'rotate(-10deg) scale(1)'), 220);
  }, 4200);

});
