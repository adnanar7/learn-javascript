// Refactor the code so that it uses .addEventListener()
// when you click the SAVE INPUT button

// function saveLead() {
//     console.log("Button clicked!")
// }

let inputBtn_el = document.getElementById("input-btn")
inputBtn_el.addEventListener("click", function saveLead() {
    console.log("Button Clicked!")
})


