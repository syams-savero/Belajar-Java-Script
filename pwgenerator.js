// 12 Digit password generator
// buat variabel karakter angka dan huruf
// gunakan for loop dan math number untuk memilih karakter secara acak 
// console.log variabel hasil generate 


let character = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 1, 2, 3, 4, 5, 6, 7, 8, 9, 1];
let generated = "";
for (let i = 0; i < 12; i++) {
  let generate = Math.floor(Math.random() * character.length);
  generated += character[generate];
}

console.log(generated)
