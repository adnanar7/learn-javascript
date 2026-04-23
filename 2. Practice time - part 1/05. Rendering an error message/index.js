// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

paraEl = document.getElementById("error")

function errorMessage(){
    paraEl.innerText = "Something went wrong, please try again"
}
