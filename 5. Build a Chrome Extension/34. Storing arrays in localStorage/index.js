let myLeads = '["www.awesomelead.com"]'
// 1. Turn myLead String into an array
// 2. Push a new value to an array 
// 3. Turn the array into a string agian
// 4. Console.log the string using typeofto verify that it's a string

myLeads = JSON.parse(myLeads)
myLeads.push("adnan.com")
myLeads = JSON.stringify(myLeads)
console.log(typeof myLeads)



const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems  
}
