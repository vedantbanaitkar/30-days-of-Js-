const days = document.querySelector("#days")
const quote = document.querySelector("#quote")
const api = "https://zenquotes.io/api/today"

let today = new Date()
let currentYear = today.getFullYear()
let nextyear = new Date(currentYear+1, 0, 1)

let milisecondInaDay = 24*60*60*1000
let daysLeft = Math.floor((nextyear-today)/milisecondInaDay)

days.textContent = daysLeft

fetch(api).then(res=>res.json()).then(data=>quote.textContent = data[0]["q"])