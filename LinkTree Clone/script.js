// const Facebook = document.querySelector(".Facebook");
// const Twitter = document.querySelector(".Twitter");
// const Linkdin = document.querySelector(".Linkdin");
// const Instagram = document.querySelector(".Instagram");

const buttons = document.querySelectorAll(".btn");
const name = document.querySelector(".name");
const bio = document.querySelector(".bio");

const socialMediaLinks = {
    Facebook: "https://www.facebook.com/",
    Twitter: "https://www.twitter.com/",
    Linkdin: "https://www.linkedin.com/",
    Instagram: "https://www.instagram.com/",
};

buttons.forEach(element => {
    element.addEventListener("click", clickHandler)
});

function clickHandler(e){
    let btn = e.target.textContent.trim();
    openNewTab(socialMediaLinks[btn])

};

function openNewTab(url) {
  window.open(url, "_blank", "noopener,noreferrer");
};

let Name = "Vedant Banaitkar";
let Bio = "Full Stack Developer | Spring/SpringBoot | JavaFX | TensorFlow";

name.textContent = Name
bio.textContent = Bio
