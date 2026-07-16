let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")


inputBtn.addEventListener("click", function() {
    // Push the value from the inputEl into the myLeads array 
    // instead of the hard-coded "www.awesomeleads.com" value
    // Google -> "get value from input field javascript"
    
    const input_value = document.getElementById("input-el").value
    myLeads.push(input_value)
    console.log(myLeads)
})


