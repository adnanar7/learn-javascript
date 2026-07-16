let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

function randomItem(){
    randomNumber = Math.floor((Math.random() * 3))
    // console.log(hands[randomNumber])
    return hands[randomNumber]
}

console.log(randomItem())
