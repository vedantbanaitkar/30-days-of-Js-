const userAge = document.querySelector(".userAge");
const ageMessage = document.querySelector(".ageMessage");

function calculateAge(e){
    e.preventDefault()
    const dobDateObject = new Date(userAge.value);
    const currentDateObject = new Date();
    console.log(currentDateObject.getDate());

    const year = currentDateObject.getFullYear() - dobDateObject.getFullYear()
    const month = currentDateObject.getMonth() - dobDateObject.getMonth()
    const date = currentDateObject.getDate() - dobDateObject.getDate()
    ageMessage.textContent = `You are ${year} years : ${month} months : ${date} days old...!`
    
}
