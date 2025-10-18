// Cara mengubah array dalam variabel yang menggunakan const
// seperti yang kita tau bahwa variabel yang menggunakan const maka isinya tiadk dapat diganti
// tetapi array di dalam variabel const tetap bisa diganti
// caranya :

const array = [3, 1, 2];
// kita ingin mengubah urutan angka di atas menjadi 1, 2, 3

function ubahArray() {
    array[0] = 1
    array[1] = 2
    array[2] = 3
    return array
};

console.log(ubahArray());