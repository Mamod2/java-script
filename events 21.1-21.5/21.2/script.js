const btninc= document.querySelector(".btn1")
const btndec= document.querySelector(".btn2")
const para= document.querySelector("p")
const parastyle= window.getComputedStyle(para)
let parasize= parseInt(parastyle.fontSize)
btninc.addEventListener('click', ()=> {
   if (parasize < 100) {
    parasize++
   para.style.fontSize=`${parasize}px`
   }
})

btndec.addEventListener('click', ()=> {
    if (parasize > 6) {
        parasize--
    para.style.fontSize=`${parasize}px`
    }
 })
 
 