// 1-create text area V
//2 - createa button V
// 3- adding event click V
// 4- adding text length V
// 5- adding if statment

const text = document.querySelector("#text-area");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const textleng = text.value.length;
  if (textleng < 100) {
    document.body.style.backgroundColor = "red";
  } else {
    document.body.style.backgroundColor = "green";
  }
});
