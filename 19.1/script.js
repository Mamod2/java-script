//1. Change the text from “title 2” to “main title”
const li = document.querySelector(".start-here");
li.innerText = "Main text";
//2. Add another subtitle with the text “subtitle 4”
const newelement = document.createElement("li")
newelement.innerText="sub title 4"

li.nextElementSibling.querySelector("ul").appendChild(newelement)

//3. Delete the last <li> element from the list.
const ul = document.querySelector("ul");
console.log(ul);

const titl3=li.nextElementSibling.nextElementSibling
ul.removeChild(titl3)


//4. Change the <title> element text to “Master Of The Dom”.

const changetitlename = document.title="Master of the dom"

//5. Change the text of the <p> element ot something else of


const changenameofp= document.querySelector("div")
const child=changenameofp.children[0]
child.innerText="im the king of the dom"
child.innerHTML="<b> hi how are you <b>"

