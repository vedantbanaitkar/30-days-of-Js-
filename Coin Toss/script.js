const resultText = document.getElementById("result")
const btn = document.getElementById("btn")
const loading = document.getElementById("loading")

function tossHandler(){
    var audio = new Audio("coin-sms-634.mp3");
    audio.play();

    resultText.style.display = "none";
    btn.style.display = "none";
    loading.style.display = "flex";
    
    rand = Math.round(Math.random())
    console.log(rand);
    text = "Tail"
    if(rand===0){
        text = "Head"
    }
    resultText.textContent = text
    btn.innerText = "TOSS Again"

    setTimeout(() => {
        resultText.style.display = "block";
        btn.style.display = "flex";
        loading.style.display = "none";
    }, 7840);
    
}
