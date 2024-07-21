const apiKey = "bd983a10e486c5c6d97dd3e83232";
const api = `https://hindi-jokes-api.onrender.com/jokes?api_key=${apiKey}`;
const joke = document.querySelector("#joke");

fetch(api)
  .then((res) => res.json())
  .then((data) => joke.textContent = data["jokeContent"]
                    ,document.querySelector("img").style.visibility = "visible");