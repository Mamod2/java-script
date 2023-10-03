const inputy = document.querySelector("input");
const btn = document.querySelector("button");
const smileycon = document.querySelector(".smileycon");
const inputvalue = parseInt(inputy.value.length);
let inputnum;
inputy.addEventListener("input", (event) => {
  inputnum = parseInt(event.target.value);
});

btn.addEventListener("click", (event) => {
  p.innertext = "smiley";
  while (inputnum > 0) {
    const p = document.createElement("p");
    p.innerText = "smiley";
    smileycon.append(p);
    inputnum -= 1;
  }
});
