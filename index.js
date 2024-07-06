
window.addEventListener("load", () => {
  document.querySelector(".loader").classList.add("loader--hidden");
});

let text2 = document.getElementById("bejir");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  text2.style.top = value * -1 + "px ";
});

document.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");

  // const nav2 = document.querySelector(".sidebar");

  if (window.scrollY > 290) {
    nav.classList.add("scroll");

    //   na2.classList.add("scroll");
  } else {
    nav.classList.remove("scroll");
  }
});

const menu_btn = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".sidebar");

menu_btn.addEventListener("click", function () {
  menu_btn.classList.toggle("active");
  mobileNav.classList.toggle("active");
});

var typed = new Typed("#hi", {
  strings: ["Hi!!.", "안녕.", "Hola.", " Konnichiwa.", "Ni Hao.", "Ciao"],
  typeSpeed: 70,
  backSpeed: 70,
  loop: true,
});