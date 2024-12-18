let rock = document.querySelector(".rock")
let paper = document.querySelector(".paper")
let scissor = document.querySelector(".scissor")
let score = document.querySelector(".score")
let turn = document.querySelector(".turn")
let isGuessCorrect = document.querySelector(".isGuessCorrect")
let arr = ["rock", "paper", "scissor"]
let count = 0 
let turns = 0
// let randomNumber = Math.floor(Math.random()* 3)

rock.addEventListener("click", ()=> {
    turns++
turn.innerHTML = turns
    let randomNumber = Math.floor(Math.random()* 3)
    console.log(arr[randomNumber]);
    if (arr[randomNumber] == "rock") {
    isGuessCorrect.innerHTML = "Correct!"
      isGuessCorrect.style.color = "green"
        count++
        score.innerHTML = count
    } else {
        isGuessCorrect.innerHTML = "Incorrect!"
          isGuessCorrect.style.color = "red"
    }
})

paper.addEventListener("click", ()=> {
    turns++
turn.innerHTML = turns
    let randomNumber = Math.floor(Math.random()* 3)
    console.log(arr[randomNumber]);
    if (arr[randomNumber] == "paper") {
          isGuessCorrect.innerHTML = "Correct"
          isGuessCorrect.style.color = "green"
        count++
        score.innerHTML = count
    } else {
        isGuessCorrect.innerHTML = "Incorrect!"
          isGuessCorrect.style.color = "red"
    }
})

scissor.addEventListener("click", ()=> {
    turns++
turn.innerHTML = turns
    let randomNumber = Math.floor(Math.random()* 3)
    console.log(arr[randomNumber]);
    if (arr[randomNumber] == "scissor") {
          isGuessCorrect.innerHTML = "Correct"
            isGuessCorrect.style.color = "green"
        count++
        score.innerHTML = count
    } else {
        isGuessCorrect.innerHTML = "Incorrect!"
          isGuessCorrect.style.color = "red"
    }
})