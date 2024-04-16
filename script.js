const mobileMenu = document.querySelector(".mobile-menu");
const navLinks = document.querySelector(".navlinks");
const form = document.querySelector("form");
const errorMsg = document.querySelector(".error-msg");
const input = document.querySelector(".shorten-input");
const shortenLinkContainer = document.querySelector(
  ".generated-shorten-container"
);

const url = "https://api-ssl.bitly.com/v4/shorten";

mobileMenu.addEventListener("click", function toggleMobileMenu() {
  navLinks.classList.toggle("show-navlinks");
});

form.addEventListener("submit", async function submitLink(e) {
  e.preventDefault();
  if (input.value) {
    errorMsg.style.display = "none";
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: "Bearer 12306e7c6602905ecde1beac050fd3c0f4492ab5",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          long_url: input.value,
        }),
      });
      const { link, long_url } = await res.json();
      const div = document.createElement("div");
      div.setAttribute("class", "shorten-link-card");
      // create the inside of the div
      const childP = document.createElement("p");
      childP.setAttribute("class", "long-link");
      childP.textContent = long_url;
      const childDiv = document.createElement("div");
      childDiv.innerHTML = `<p class='short-link'>${link}</p> <button class='copy-btn'>copy<button>`;

      childDiv.setAttribute("class", "generated-link");
      // append the elements created to the div
      div.appendChild(childP);
      div.appendChild(childDiv);

      shortenLinkContainer.appendChild(div);
    } catch (error) {
      console.log(error);
    }
    copyLink();
  } else {
    errorMsg.style.display = "block";
  }
});

function copyLink() {
  const copyBtns = document.querySelectorAll(".copy-btn");
  const shortLink = document.querySelector(".short-link");

  copyBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      navigator.clipboard.writeText(shortLink.textContent);
      btn.textContent = "copied";
      btn.style.background = "#3b3054";
    });
  });
}
