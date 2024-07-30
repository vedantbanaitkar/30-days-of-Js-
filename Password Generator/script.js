const specialCharactersInput = document.querySelector("#specialChar");
const numberInput = document.querySelector("#number");
const rangeInput = document.querySelector("#range");
const inp = document.querySelector("#inp");
const copyButton = document.querySelector("#copyBtn");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
const specialCharacters = "!@#$%^&*()".split("");
const number = "1234567890".split("");

function copyTextToClipboard(text) {
  // Create a temporary textarea element
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

copyButton.addEventListener("click", copyHandler)

function copyHandler(e){
    copyTextToClipboard(inp.value);
    console.log(inp.value);
}



function submitHandler(e){
    e.preventDefault();
    let s = []
    let p = []
    rangeValue = rangeInput.value;
    s = [...upperCase, ...lowerCase];
    if(specialCharactersInput.checked){
        s = [...s, ...specialCharacters];
    }
    if(numberInput.checked){
        s = [...s, ...number];
    }
    console.log(s.length);
    for (let index = 0; index < rangeValue; index++) {
        let randomIndex = Math.floor(Math.random()*s.length)+1;
        p.push(s[randomIndex])
        
    }
    p = p.join("");

    inp.value = p
    
    

    
}
