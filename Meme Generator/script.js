const btn = document.querySelector(".btn");
const image = document.querySelector(".image")
const loading = document.querySelector(".loading")
const api = "https://meme-api.com/gimme"
btn.addEventListener("click", generateMeme);
function generateMeme(){
    image.style.display = "none";
    loading.style.display = "block";
    fetch(api).then((response)=>response.json()).then(({url})=>{
        loading.style.display = "none";
        image.src = url;
        image.style.display = "block";
    })
}

