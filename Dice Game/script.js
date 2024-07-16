const p1Img = document.querySelector("#p1img")
const p2Img = document.querySelector("#p2img")
const message = document.querySelector("#message")

function getRandomDiceNumber(){
    return Math.floor(Math.random()*6+1);
}

function clickHandler(e){
    let x = getRandomDiceNumber()
    let y = getRandomDiceNumber()
    p1Img.src = `http://127.0.0.1:5500/Dice%20Game/images/dice${x}.png`
    p2Img.src = `http://127.0.0.1:5500/Dice%20Game/images/dice${y}.png`
    if(x==y){
        message.textContent = "It's a TIE!"
    }
    else if(x>y){
        message.textContent = "Player 1 Won";
    }
    else{
        message.textContent = "Player 2 Won";
    }
}


