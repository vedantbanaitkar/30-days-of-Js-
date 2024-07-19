const image = document.querySelector("#qrimg")
const inputBox = document.querySelector("#inp")

function generateQr(){
    // e.preventDefault();
    let inp = inputBox.value
    image.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inp}`;
    image.style.display = "block"
    inputBox.value = ""
    console.log(inp);
}