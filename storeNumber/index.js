let number = [0, 1, 0, 1, 1]
let Shelf0 = document.getElementById("apple-shelf")
let Shelf1 = document.getElementById("orange-shelf")

function autoShelf() {
  for (let i = 0; i < number.length; i++) {
    if (number[i] === 0) {
      Shelf0.textContent += number[i]
    } else {
      Shelf1.textContent += number[i]
    }
  }
}

autoShelf()
