// Mirip seperti sebelumnya disini kita akan membuat angka random tapi dengan range
// contoh random number range 1 - 10
function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
};

let a = randomRange(10, 20);
console.log(a);

// Output nya adalah angka angka random dari 10 - 20

// dibawah ini adalah contoh analogi jika menggunakan rumus matematika
// Diket : Math.random = 0.5
// Jawab : 0.5 x (20 - 10 + 1) + 10
//         0.5 x 11 + 10
//         5.5 + 10
//         16.5
//         16.5 dibulatkan mennggunakan Math.floor() maka hasilnya adalah 16