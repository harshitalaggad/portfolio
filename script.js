function showPage(pageName) {
  document.querySelectorAll('.page').forEach(page => page.classList.add('hidden'));
  document.getElementById(pageName + '-page').classList.remove('hidden');
  document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active'));
  event.target.classList.add('active');
  const flipContainer = document.getElementById('flipContainer');
  if (flipContainer) flipContainer.classList.remove('flipped');
  window.scrollTo(0, 0);
}

function flipCard() {
  document.getElementById('flipContainer').classList.toggle('flipped');
}

function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  if (navLinks.style.display === 'flex') navLinks.style.display = 'none';
  else {
    navLinks.style.display = 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '60px';
    navLinks.style.right = '20px';
    navLinks.style.background = '#F5F3EE';
    navLinks.style.padding = '20px';
    navLinks.style.borderRadius = '8px';
    navLinks.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
  }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => e.preventDefault());
});
