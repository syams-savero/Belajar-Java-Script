// Menggunakan function dan rekursi untuk membuat countdown atau hitung mundur (tidak menggunakan loop)
// hasil yang diminta adalah jika kita input angka 10 maka akan mengeluarkan output array 10, 9, 8 hingga 1

function countdown(nomor) {
    if (nomor < 1) {
        return [];
    } else {
        let arr = countdown(nomor - 1);
        arr.unshift(nomor);
        return arr;
    }
};

console.log(countdown(7));
