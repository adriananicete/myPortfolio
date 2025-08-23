const heroContainer = document.querySelector('.hero-container'); 
const aboutContainer = document.querySelector('.about-container'); 
const homeBtn = document.querySelector('#home'); 
const aboutBtn = document.querySelector('#about'); 
const aboutBtn2 = document.querySelector('.about-btn');

function goToHome(event) {
  event.preventDefault(); // Para sa links
  event.stopPropagation(); // Para hindi mag-bubble
  
  heroContainer.style.display = 'flex';
  aboutContainer.style.display = 'none';
}

function goToAbout(event) {
  event.preventDefault(); // Para sa links
  event.stopPropagation(); // Para hindi mag-bubble
  
  
  aboutContainer.style.display = 'flex';
  heroContainer.style.display = 'none';
}

homeBtn.addEventListener('click', goToHome);
aboutBtn.addEventListener('click', goToAbout);
aboutBtn2.addEventListener('click', goToAbout);