//step one - select username,age and email and put them in vars V
const nameInput = document.querySelector(".usrname");
const ageInput = document.querySelector(".usrage");
const emailInput = document.querySelector(".usremail");

//step two - select the form section 
const formsctn= document.querySelector("#form-section")

//step three - now make empty carley brackets to put information there

const infodata = {}

//step four - now we need to make for loop to go over all data about the user and then put them inside event

// for (let input of [nameInput, ageInput, emailInput]) {
//       //{target} gets only event.target instead of the whole event (e structuring)
//     input.addEventListener('input', ({target})=> {
//         // more structuring: grabs the name and value of the target

//     })
// }

//step four - make event for every input 

nameInput.addEventListener('input', (e) => {
    infodata['name'] = e.target.value
})
ageInput.addEventListener('input', (e) => {
    infodata['age'] = e.target.value
})
emailInput.addEventListener('input', (e) => {
    infodata['email'] = e.target.value
})



