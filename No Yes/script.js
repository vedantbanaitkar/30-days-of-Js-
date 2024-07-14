const buttons = document.querySelector(".buttons")
const yesBtn = document.querySelector("#yes")
const noBtn = document.querySelector("#no")
const normal = buttons.innerHTML

noBtn.addEventListener("mouseenter", (e)=>{
    if (buttons.style.flexDirection === "column-reverse"){
        buttons.style.cssText = "flex-direction: column";
    }
    else{
        buttons.style.cssText = "flex-direction: column-reverse";
    }
      
    
});

yesBtn.addEventListener("click", (e)=>{
    window.open(
      "https://api.whatsapp.com/send/?phone=9175827849&text=hi,%20i%20like%20you"
    );
})

