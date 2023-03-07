// Header
const header = document.getElementById("header");
let currentValue = 0;

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  if (scrollY > currentValue) {
    header.classList.add("-translate-y-10");
    header.classList.remove("translate-y-0");
  } else {
    header.classList.remove("-translate-y-10");
    header.classList.add("translate-y-0");
  }

  currentValue = scrollY;
});

// Dot Button
const dotButton = document.getElementById("dot_button");
const dotDropdown = document.getElementById("dot_dropdown");

dotButton.addEventListener("click", () => {
  const isHidden = dotDropdown.classList.contains("hidden");

  if (isHidden) {
    dotDropdown.classList.replace("hidden", "block");
  } else {
    dotDropdown.classList.replace("block", "hidden");
  }
});

dotButton.addEventListener("blur", () => {
  dotDropdown.classList.replace("block", "hidden");
});

// Burder menu
const burgerMenu = document.getElementById("burger_menu");
const mainMenu = document.getElementById("main_app_menu");
const menuIcons = burgerMenu.querySelectorAll("svg");

console.log(menuIcons);

burgerMenu.addEventListener("click", () => {
  const isHidden = mainMenu.classList.contains("h-0");

  if (isHidden) {
    mainMenu.classList.replace("h-0", "h-[calc(100vh_-_90px)]");
    menuIcons[0].classList.add("hidden");
    menuIcons[1].classList.remove("hidden");
  } else {
    mainMenu.classList.replace("h-[calc(100vh_-_90px)]", "h-0");
    menuIcons[0].classList.remove("hidden");
    menuIcons[1].classList.add("hidden");
  }
});

// Dropdown
const docButton = document.getElementById("doc_button");
const docDropdown = document.getElementById("doc_dropdown");
const docArrow = document.getElementById("doc_arrow");

let active = false;

docButton.addEventListener("click", () => {
  const scrollHeight = docDropdown.scrollHeight;

  active = !active;

  if (active) {
    docDropdown.style.height = `${scrollHeight}px`;
    docArrow.style.transform = `rotate(180deg)`;
  } else {
    docDropdown.style.height = `0px`;
    docArrow.style.transform = `rotate(0deg)`;
  }
});

docButton.addEventListener("blur", () => {
  active = false;
  docDropdown.style.height = `0px`;
  docArrow.style.transform = `rotate(0deg)`;
});

docButton.addEventListener("mouseenter", () => {
  const scrollHeight = docDropdown.scrollHeight;

  active = !active;

  if (active) {
    docDropdown.style.height = `${scrollHeight}px`;
    docArrow.style.transform = `rotate(180deg)`;
  } else {
    docDropdown.style.height = `0px`;
    docArrow.style.transform = `rotate(0deg)`;
  }
});

docButton.addEventListener("mouseleave", () => {
  active = false;
  docDropdown.style.height = `0px`;
  docArrow.style.transform = `rotate(0deg)`;
});

const comButton = document.getElementById("com_button");
const comDropdown = document.getElementById("com_dropdown");
const comArrow = document.getElementById("com_arrow");

let activeCom = false;

comButton.addEventListener("click", () => {
  const scrollHeight = comDropdown.scrollHeight;

  active = !active;

  if (active) {
    comDropdown.style.height = `${scrollHeight}px`;
    comArrow.style.height = `rotate(180deg)`;
  } else {
    comDropdown.style.height = `0px`;
    comArrow.style.height = `rotate(0deg)`;
  }
});

comButton.addEventListener("blur", () => {
  active = false;
  comDropdown.style.height = `0px`;
  comArrow.style.height = `rotate(0deg)`;
});

comButton.addEventListener("mouseenter", () => {
  const scrollHeight = comDropdown.scrollHeight;

  active = !active;

  if (active) {
    comDropdown.style.height = `${scrollHeight}px`;
    comArrow.style.height = `rotate(180deg)`;
  } else {
    comDropdown.style.height = `0px`;
    comArrow.style.height = `rotate(0deg)`;
  }
});

comButton.addEventListener("mouseleave", () => {
  active = false;
  comDropdown.style.height = `0px`;
  comArrow.style.height = `rotate(0deg)`;
});

// Scroll top button
const scrollTopBtn = document.getElementById("scrolltop_btn");

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0 });
});
