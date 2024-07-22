
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
const btn6 = document.querySelector("#btn6");

function cleanUp(){
}

let r = Math.floor(Math.random() * 6 + 1);
console.log(r);
const buttons = document.querySelectorAll(".number-button");
function clickHandler(e){


   const clickedButton = event.target;
   const clickedNumber = Number(clickedButton.textContent);

   if (clickedNumber === r) {
    
     clickedButton.classList.add("bg-green-300"); // Add green background for correct guess
     setTimeout(() => {
        buttons.forEach((button) =>
          button.classList.remove("bg-green-300", "bg-red-300")
        ); // Remove previous colors from all buttons
        r = Math.floor(Math.random() * 6 + 1);
     }, 2000);
        
   } else {
     clickedButton.classList.add("bg-red-300"); // Add red background for incorrect guess
   }
}
buttons.forEach((button) => button.addEventListener("click", clickHandler));

// btn1.addEventListener("click", clickHandler);
// btn2.addEventListener("click", clickHandler);
// btn3.addEventListener("click", clickHandler);
// btn4.addEventListener("click", clickHandler);
// btn5.addEventListener("click", clickHandler);
// btn6.addEventListener("click", clickHandler);