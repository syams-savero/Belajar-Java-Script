const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const initialValue = 5;
const sumWithInitial = arr.reduce(
  (accumulator, currentValue) => accumulator + currentValue, initialValue
)

console.log(sumWithInitial)
