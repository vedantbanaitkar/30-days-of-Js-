const images = document.querySelectorAll(".image")
const playerImage = document.querySelector(".playerImage"); 
const compImage = document.querySelector(".compImage"); 
const select = document.querySelector(".select"); 
const line = document.querySelector(".line"); 



let userSelection = 0;
let compSelection = 0;

let s = ""


images.forEach(element => {
    element.addEventListener("click", play)
});

function play(e){
    
    setTimeout(() => {
        let r = Math.floor(Math.random() * 3 + 1);
        compImage.src = `images/${r}.png`;
        compSelection = r

        playerImage.src = e.target.src;
        userSelection = e.target.src.split("/")
        userSelection = Number(userSelection[userSelection.length -1].charAt(0))

        if(userSelection === compSelection){
            s = "It's A TIE!...."
        }
        else if (
          (userSelection == 1 && compSelection == 3) ||
          (userSelection == 2 && compSelection == 1) ||
          (userSelection == 3 && compSelection == 2)
        ) {
            s = "You WON!...."
        }
        else{
            s = "You LOST!...."
        }
        select.classList.add("hidden")
        line.innerHTML = s
        line.classList.remove("hidden")



    }, 200);
    
    
        
    
}

