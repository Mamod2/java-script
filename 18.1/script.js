console.log(document);

const header = document.body.children;
console.log(header);

const queryheader = document.querySelectorAll("body *");
console.log(queryheader);

const input2 = Array.from(document.getElementsByTagName("input"));
console.log(input2);
input2.forEach((element) => {
  console.log(element);
});

const input = document.querySelectorAll("input");
console.log(input);
input.forEach((element) => {
  console.log(element);
});


