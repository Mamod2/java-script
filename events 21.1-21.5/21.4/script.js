const lightbulb = document.querySelector("img");
let islightOn = false;
lightbulb.addEventListener("click", () => {
  if (islightOn) {
    lightbulb.src = "./img/lightbulboff.jpg";
    islightOn = false;
  } else {
    lightbulb.src = "./img/lightbulbon.jpeg";
    islightOn = true;
  }
});
