const BtnaddNumber = document.getElementById("add-number");
var boxNumbers = document.getElementById("box");
var numberofBox = 6

function addNumber(){
    numberofBox ++

    if(numberofBox > 9){
        BtnaddNumber.style.display = "none"
    }

   boxNumbers.innerHTML += `<p class="numbers"> ${numberofBox} </p>`     
}


function sortButton(){
    // const myNumbers = [5,15,20,25,30,35]
    const Numbers = document.querySelectorAll(".numbers")

    BtnaddNumber.style.display = "none"

    Numbers.forEach( (numb)=>{
        numb.innerText = "55"
    })

}
