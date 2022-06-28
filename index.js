const BtnaddNumber = document.getElementById("add-number");
var boxNumbers = document.getElementById("box");
var numberOfBox = 6
const myNumbers = [5,15,20,25,30,35]

function addBox(){
    numberOfBox ++

    if(numberofBox > 9){
        BtnaddNumber.style.display = "none"
    }

   boxNumbers.innerHTML += `<p class="numbers"> ${numberOfBox} </p>`     
}

function changeNumbers(NumbersQuantify){
    
    for(let i = 0; i < NumbersQuantify; i++){
        var numberAleaotry =  Math.floor(Math.random() * 60)

        if(numberAleaotry === 0) {
            numberAleaotry = 1
        }
      
        myNumbers.push(numberAleaotry)
    }
}

function sortButton(){
    const Numbers = document.querySelectorAll(".numbers")

    BtnaddNumber.style.display = "none"

    Numbers.forEach( (numb)=>{
        numb.innerText = "55"
    })
}
