let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr  // using the textContent instead of innerText because it do not show the space at the end in " - "
}

// Google:
// innerText alternative mdn
