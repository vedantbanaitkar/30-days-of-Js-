const userInput = document.querySelector("#userInput");
const clientId = "uCWz2SzYojvt8Xz8sqfZBMpLbTbhDfbNbzufUh8fBTY"; // Replace with your actual Unsplash Access Key
const cards = document.querySelector(".cards");

function searchImage(e) {
  e.preventDefault();
  let v = userInput.value;
  console.log(v);
  getImages(v).then(data=>createCards(data.results))
}

function createCards(cardsArray){
    cardsArray.forEach(element => {
       let imgSrc =  element.links.download
       cards.innerHTML += `
       <div class="card  w-[300px] h-[400px]"><img class="w-[100%] h-[100%] object-cover" src=${imgSrc} alt=""></div>`;
    });
}

function getImages(input) {
   return fetch(`https://api.unsplash.com/search/photos?page=1&query=${input}`, {
    headers: {
      Authorization: `Client-ID ${clientId}`, // Corrected placement
    }
  })
    .then((res) => res.json())
}
