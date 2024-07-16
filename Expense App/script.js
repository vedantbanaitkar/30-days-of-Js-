let whichBtn = ""
const transactionParent = document.querySelector("#transactions")
const amountInput = document.querySelector("#amount")
const detailsInput = document.querySelector("#details");
const mBal = document.querySelector("#mbal")
const expenseP = document.querySelector("#expense") 
const incomeP = document.querySelector("#income") 
let mainBal = 0
let income = 0
let expense = 0

function clickHandler1(){
    whichBtn = "Expense"
}
function clickHandler2(){
    whichBtn = "Income"
}


function submitHandler(e) {
    e.preventDefault();
    let amount = Number(amountInput.value);
    let details = detailsInput.value;
    amountInput.value = ""
    detailsInput.value = ""
    const t = document.createElement("h1")
    t.className = "border-2 border-violet-400 rounded-xl w-[80%] px-4 text-xl";
    t.textContent = `${whichBtn} - ₹${amount} [${details}]`;
    
    if(whichBtn === "Income"){
        mainBal += amount
        incomeP.textContent = amount +Number(incomeP.textContent)
        t.classList.add("text-green-400")
    }
    else{
        mainBal -= amount
        expenseP.textContent = amount + Number(expenseP.textContent);
        t.classList.add("text-red-400");
    }
    transactionParent.appendChild(t);
    mBal.textContent = `₹${mainBal}`
    
    
}


const form = document.getElementById("form");
form.addEventListener("submit", submitHandler)