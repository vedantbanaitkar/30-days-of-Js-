const buttons = document.querySelectorAll("button")
const input = document.querySelector("input")

let calculationData = ""

buttons.forEach(btn => btn.addEventListener("click", (e) => addInput(e))
)

function addInput(e){
    let userInput = e.target.innerHTML
    
    if(userInput === "C"){
        calculationData = ""
    }
    else if(userInput === "B"){
        calculationData = calculationData.substring(0, calculationData.length-1)
    }
    else if(userInput === "X"){
        calculationData += "*"
    }

    else if(userInput === "="){
        calculationData = eval(calculationData)
    }
    else{
        calculationData += userInput;
    }
    input.value = calculationData
}