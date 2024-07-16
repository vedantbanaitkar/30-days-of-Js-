const btn = document.querySelector(".btn");
const image = document.querySelector(".image")
const api = "https://meme-api.com/gimme"
btn.addEventListener("click", generateMeme);
function generateMeme(){
    fetch(api).then((response)=>response.json()).then(({url})=>{
        image.src = url;
    })
}

