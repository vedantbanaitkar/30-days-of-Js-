const apiKey = "1e9c398347e6ef79f8f40e36c69f24e5" ;
let city = "";
let data = "";

const cityInput = document.querySelector(".cityInput");
const cityName = document.querySelector("#cityName");
const temperature = document.querySelector("#temperature");
const humidity = document.querySelector("#humidity");
const wind = document.querySelector("#wind");
const weatherIcon = document.getElementById("weatherIcon");

cityName.classList.add("hidden");
temperature.classList.add("hidden");
humidity.classList.add("hidden");
wind.classList.add("hidden");
weatherIcon.classList.add("hidden");


async function submitHandler(e) {
    e.preventDefault();
    city = cityInput.value;
    cityInput.value = ""
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    let res = await fetch(apiUrl);
    data = await res.json()
    console.log(data["cod"]);
    if(data["cod"]== 200){
      console.log(data);
      console.log();
      cityName.textContent = data["name"];
      temperature.textContent = `${data["main"]["temp"].toFixed(1)} C`;
      humidity.textContent = `${data["main"]["humidity"]} %`;
      wind.textContent = `${data["wind"]["speed"]} Km `;
      weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

      cityName.classList.remove("hidden");
      temperature.classList.remove("hidden");
      humidity.classList.remove("hidden");
      wind.classList.remove("hidden");
      weatherIcon.classList.remove("hidden");
    }
    else if (data["cod"] == 404) {
        cityName.classList.remove("hidden");
      cityName.textContent = "City Not Found"
      temperature.classList.add("hidden");
      humidity.classList.add("hidden");
      wind.classList.add("hidden");
      weatherIcon.classList.add("hidden");
    }


}
