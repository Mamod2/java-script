const btn = document.querySelector("button")
const input = document.querySelector("input")

btn.addEventListener('click', ()=> {
    if (parseInt(input.value) >= 18) {
    console.log("you can drink");
    }
    else {
        console.log("you are too young");
    }
    
})

    