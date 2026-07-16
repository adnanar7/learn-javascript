// Create two variables:
// myLeads -> should be assigned to an empty array
// inputEl -> should be assigned to the text input field

let myLeads = []

const inputEl = document.getElementById("input-el");    // difference between let and const is that you can't reassign the varibale declared with const.
const inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function() {
    console.log("Button clicked!")
})


