let numberContainer = document.querySelector(".bottoms")
let ratedNumber = document.querySelector(".interactive-number")
let firstSection = document.querySelector(".main")
let secondSection = document.querySelector(".second-section")
let submit = document.querySelector(".submit")

numberContainer.addEventListener("click", event=>{
    let numberSelection = event.target.innerText;
    ratedNumber.innerText = " " + numberSelection;
    console.log(ratedNumber)
    if(numberSelection == 1 || numberSelection==2 || numberSelection == 3 || numberSelection ==4 || numberSelection ==5){
        submit.addEventListener("click", ()=>{
            firstSection.style.display = "none"
            secondSection.style.display = "flex"
        })
    }
})


