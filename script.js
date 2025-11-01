// Interações leves
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Menu mobile
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');
toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});

// Newsletter fake submit
document.getElementById('newsletter')?.addEventListener('submit', (e) => {
  const status = document.getElementById('form-status');
  status.textContent = 'Obrigado! Em breve enviaremos novidades.';
});

// Vídeo modal (lazy embed YouTube)
const modal = document.getElementById('video-modal');
const modalClose = modal?.querySelector('.modal__close');
const videoContainer = document.getElementById('video-container');

function openVideo(id){
  if(!modal || !videoContainer) return;
  modal.setAttribute('aria-hidden','false');
  videoContainer.innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${id}?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>`;
}
function closeVideo(){
  if(!modal || !videoContainer) return;
  modal.setAttribute('aria-hidden','true');
  videoContainer.innerHTML = '';
}
modalClose?.addEventListener('click', closeVideo);
modal?.addEventListener('click', (e) => { if(e.target === modal) closeVideo(); });

document.querySelectorAll('.video-card').forEach(btn => {
  btn.addEventListener('click', () => openVideo(btn.dataset.video));
});

// Acessibilidade extra: smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    const target = document.querySelector(id);
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth'});
    }
  });
});
