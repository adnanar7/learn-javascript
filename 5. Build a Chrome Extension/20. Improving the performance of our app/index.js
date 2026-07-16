let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

// 1. Create a variable, listItems, to hold all the HTML for the list items
// Assign it to an empty string to begin with
let listItems = "";

for (let i = 0; i < myLeads.length; i++) {
    // 2. Add the item to the listItems variable instead of the ulEl.innerHTML
    listItems += "<li>" + myLeads[i] + "</li>"
    console.log(listItems)
}
// 3. Render the listItems inside the unordered list using ulEl.innerHTML
ulEl.innerHTML  = listItems


// DOM manipulation has a cost and you have to make it lower , for example in this case DOM was being manipualted 3 times in the loop , and in our new code it is being manipulated only 1 time.
