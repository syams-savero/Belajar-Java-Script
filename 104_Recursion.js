// rekursi ini mirip seperti loop namun dia berguna untuk data yang bercabang dan tidak beraturan
/* // Fungsi rekursi untuk menjumlahkan elemen pertama sampai ke-n dalam array
// Penjelasan simpel:
// 1. Base case: kalau n <= 0 atau lebih dari panjang array, berhenti dan return 0
// 2. Rekursi: fungsi manggil dirinya sendiri untuk menghitung total elemen sebelumnya (n-1)
// 3. Tambahkan elemen ke-n sekarang (arr[n - 1]) ke hasil dari langkah sebelumnya
// 4. Hasil akhir = jumlah semua elemen dari awal sampai n
*/
// Contoh sederhana penggunaan rekursi

let array = [1, 2, 3, 4];

function rekursi(arr, n) {
    if (n <= 0 || n > array.length) {
        return 0;
    } else {
        return rekursi(arr, n - 1) + arr[n - 1];
    }
}

console.log(rekursi(array, 4));