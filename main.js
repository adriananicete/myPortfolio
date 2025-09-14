const heroContainer = document.querySelector(".hero-container");
const aboutContainer = document.querySelector(".about-container");
const projectContainer = document.querySelector(".projects-container");
const skillContainer = document.querySelector(".skills-container");
const homeBtn = document.querySelector("#home");
const aboutBtn = document.querySelector("#about");
const aboutBtn2 = document.querySelector(".about-btn");
const projectBtn = document.querySelector("#project");
const skillsBtn = document.querySelector("#skills");

const month = document.querySelector(".month");
const day = document.querySelector(".day");
const year = document.querySelector(".year");
const hour = document.querySelector(".hour");
const min = document.querySelector(".sec");
const pmAm = document.querySelector(".pm-am");

// //get date
let date = new Date();

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const fullMonth = monthNames[date.getMonth()];
const monthTrim = fullMonth.slice(0, 3);

month.textContent = monthTrim;
day.textContent = date.getDate();
year.textContent = date.getFullYear();

//get time
function updateDateTime() {
  const date = new Date();

  let hours = date.getHours();
  const ampm = hours >= 12 ? "PM" : "AM";
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

  skillContainer.style.display = "none";
  aboutContainer.style.display = "none";
  projectContainer.style.display = "none";
  heroContainer.style.display = "flex";
}

function goToAbout(event) {
  event.preventDefault();
  event.stopPropagation();

  skillContainer.style.display = "none";
  heroContainer.style.display = "none";
  projectContainer.style.display = "none";
  aboutContainer.style.display = "flex";
}

function goToProject(event) {
  event.preventDefault();
  event.stopPropagation();

  skillContainer.style.display = "none";
  aboutContainer.style.display = "none";
  heroContainer.style.display = "none";
  projectContainer.style.display = "flex";
}

function goToSkill(event) {
  event.preventDefault();
  event.stopPropagation();

  skillContainer.style.display = "flex";
  aboutContainer.style.display = "none";
  heroContainer.style.display = "none";
  projectContainer.style.display = "none";
}

homeBtn.addEventListener("click", goToHome);
aboutBtn.addEventListener("click", goToAbout);
aboutBtn2.addEventListener("click", goToAbout);
projectBtn.addEventListener("click", goToProject);
skillsBtn.addEventListener("click", goToSkill);

// document.addEventListener("keydown", function(e) {
//     // Disable F12
//     if (e.key === "F12") {
//       e.preventDefault();
//     }

//     // Disable Ctrl+Shift+I / Ctrl+Shift+J / Ctrl+U
//     if ((e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) ||
//         (e.ctrlKey && e.key === "U")) {
//       e.preventDefault();
//     }
//   });

//   // Detect right click
//   document.addEventListener("contextmenu", function(e) {
//     e.preventDefault();
//   });

function downloadResume() {
  const link = document.createElement("a");
  link.href = "./assets/AdrianAnicete_FullStackDeveloper_2025.pdf";
  link.download = "AdrianAnicete_FullStackDeveloper_2025.pdf";
  link.click();
}
