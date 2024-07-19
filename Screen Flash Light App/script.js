const main = document.querySelector("#main");
const onoff = document.querySelector("#onoff")
function handleEvent(){
    main.classList.toggle("flashOff")
    if(onoff.textContent=="ON"){
        onoff.textContent="OFF";
    }
    else{
        onoff.textContent = "ON";
    }
}

main.addEventListener("click", handleEvent)