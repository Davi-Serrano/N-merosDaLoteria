var boxNumbers = document.getElementById("box");
const sortBtn = document.getElementById("changeButton");
const saveBtn = document.getElementById("save");
const cancelBtn = document.getElementById("cancel");
const BtnaddNumber = document.getElementById("add-number");
var numberOfBox = 6
const myNumbers = [];

function addBox(){
    numberOfBox ++

    if(numberOfBox > 9){
        BtnaddNumber.style.display = "none"
    }

   boxNumbers.innerHTML += `<p class="numbers"> ${numberOfBox} </p>`     
}

function changeNumbers(quantifyOfNumbers){
    for(let i = 0; i < quantifyOfNumbers; i++){
        var numberAleaotry = Math.floor(Math.random() * 60)

        if(numberAleaotry === 0) {
            numberAleaotry = 1
        }
        
        if(myNumbers[i] === numberAleaotry){
            numberAleaotry ++
        }

        myNumbers.push(numberAleaotry)
    }

    return myNumbers
}

function sortButton(){
    const numbers = changeNumbers(numberOfBox)
    const Numbers = document.querySelectorAll(".numbers")

    BtnaddNumber.style.display = "none"

    const NumbersInArray = Array.from(Numbers)
    
    NumbersInArray.map( (num, i)=>{
        num.innerHTML = `<p>${numbers[i]} </p>`
    })

    hiddenDrawBtnAndShowSaveAndCancelBtn()
}

function hiddenDrawBtnAndShowSaveAndCancelBtn(){
    sortBtn.style.display = "none"
    saveBtn.style.display = "block"
    cancelBtn.style.display = "block"
} 

function reloadPage(){
    location.reload()
}

function saveNumberDrawed(){
    alert("Salvo com sucesso")
    localStorage.setItem('meuGato', myNumbers);
    reloadPage()
}

sortBtn.addEventListener("click", sortButton)
cancelBtn.addEventListener("click", reloadPage)
saveBtn.addEventListener("click", saveNumberDrawed)
