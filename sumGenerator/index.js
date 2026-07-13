let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let stageEl = document.getElementById("sum")
let fightButton = document.getElementById("generateButton")

fightButton.addEventListener("click", function() {
  let random1 = Math.floor(Math.random() * number.length)
  let random2 = Math.floor(Math.random() * number.length)
  stageEl.textContent = number[random1] + "+" + number[random2]
  
})

