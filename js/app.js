const year = document.getElementById("current-year");
year.textContent = new Date().getFullYear();

const toUpBtn = document.createElement("button");
toUpBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

toUpBtn.style.cssText =
  "width: 50px; height: 50px; background-color: darkred; position: fixed; border-radius: 10px; bottom: 20px; right: 20px; z-index: 7; cursor: pointer; border: none; outline: none; color: white; font-size: 1.5rem; transition: all 0.5s;";
toUpBtn.style.display = "none"; // Initially hide the button
document.body.appendChild(toUpBtn);

function toUp() {
  console.log(window.scrollY); // Check scrolling value in the console
  if (window.scrollY >= 370) {
    toUpBtn.style.display = "block";
  } else {
    toUpBtn.style.display = "none";
  }
}


window.addEventListener("scroll", toUp);

toUpBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});