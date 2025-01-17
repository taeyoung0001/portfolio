const personalBtn = document.getElementById("personalProjectBtn");
const teamBtn = document.getElementById("teamProjectBtn");
const personalContainer = document.querySelector(".personalContainer");
const teamContainer = document.querySelector(".teamContainer");

personalBtn.addEventListener("click", () => {
  personalContainer.style.display = "block";
  teamContainer.style.display = "none";
});

teamBtn.addEventListener("click", () => {
  personalContainer.style.display = "none";
  teamContainer.style.display = "block";
});
