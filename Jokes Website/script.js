const apiKey = "bd983a10e486c5c6d97dd3e83232";
const api = `https://hindi-jokes-api.onrender.com/jokes?api_key=${apiKey}`;
const joke = document.querySelector("#joke");
const newJokeBtn = document.querySelector("#newJokeBtn"); 

function fetchJoke() {
    fetch(api)
        .then((res) => res.json())
        .then((data) => {
            joke.textContent = data["jokeContent"];
            document.querySelector("img").style.visibility = "visible";
        })
        .catch((error) => {
            console.error('Error fetching joke:', error);
            joke.textContent = "Failed to load a joke. Please try again!";
        });
}

fetchJoke();

newJokeBtn.addEventListener("click", fetchJoke);
