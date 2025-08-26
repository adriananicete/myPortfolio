const heroContainer = document.querySelector('.hero-container'); 
const aboutContainer = document.querySelector('.about-container'); 
const homeBtn = document.querySelector('#home'); 
const aboutBtn = document.querySelector('#about'); 
const aboutBtn2 = document.querySelector('.about-btn');
const month = document.querySelector('.month');
const day = document.querySelector('.day');
const year = document.querySelector('.year');
const hour = document.querySelector('.hour');
const min = document.querySelector('.sec');
const pmAm = document.querySelector('.pm-am');

// //get date
let date = new Date();

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const fullMonth = monthNames[date.getMonth()];
const monthTrim = fullMonth.slice(0,3);

month.textContent = monthTrim;
day.textContent = date.getDate();
year.textContent = date.getFullYear();

//get time
function updateDateTime() {
  
  const date = new Date(); 

  let hours = date.getHours();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12; 

  let minutes = date.getMinutes();
  minutes = minutes < 10 ? `0${minutes}` : minutes;

  hour.textContent = hours;
  min.textContent = minutes;
  pmAm.textContent = ampm;
}

updateDateTime();

setInterval(updateDateTime, 1000);


function goToHome(event) {
  event.preventDefault(); 
  event.stopPropagation(); 
  heroContainer.style.display = 'flex';
  aboutContainer.style.display = 'none';
}

function goToAbout(event) {
  event.preventDefault(); 
  event.stopPropagation(); 
  
  
  aboutContainer.style.display = 'flex';
  heroContainer.style.display = 'none';
}

homeBtn.addEventListener('click', goToHome);
aboutBtn.addEventListener('click', goToAbout);
aboutBtn2.addEventListener('click', goToAbout);
