// Membuat fungsi countdown juga seperti sebelumnya tapi kita bisa memilih ingin hitung mundur dari angka berapa sampe berapa
// contoh 5 dan 2, maka akan hitung mundur dari 5 sampai 2

function countdown(min, max) {
    if (max < min) {
        return [];
    } else {
        let arr = countdown(min, max - 1);
        arr.unshift(max);
        return arr;
    };
};

console.log(countdown(5, 10));
