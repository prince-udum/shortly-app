const mobileMenu = document.querySelector(".mobile-menu");
const navLinks = document.querySelector(".navlinks");
const form = document.querySelector("form");
const errorMsg = document.querySelector(".error-msg");
const input = document.querySelector(".shorten-input");
const shortenLinkContainer = document.querySelector(".shorten-link");

const url = "https://api-ssl.bitly.com/v4/shorten";

mobileMenu.addEventListener("click", function toggleMobileMenu() {
  navLinks.classList.toggle("show-navlinks");
});

form.addEventListener("submit", async function submitLink(e) {
  e.preventDefault();
  console.log(input.value);

  if (input.value) {
    errorMsg.style.display = "none";
    input.value = "";
  } else {
    errorMsg.style.display = "block";
  }
});
