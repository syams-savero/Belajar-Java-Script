// mengganti isi dari objects, mirip seperti mengganti isi dari variabel
// Contoh cara 1:
let hewan = {
    anjing: "dawg",
    kucing: "cat",
    kelinci: "rabbit"
};

// Ubah dawg menjadi dog
hewan.anjing = "dog";

// Menjalankan Objects dengan properties anjing
console.log(hewan.anjing);


// Contoh cara 2
let makanan = {
    sushi: "makanan korea",
    lumpia: "makanan indonesisa",
    pizza: "makanan italia"
};

// ubah isi dari properties sushi menjadi "makanan jepang"//
makanan["sushi"] = "makanan jepang";

// Menjalankan Objects dengan properties sushi
console.log(makanan["sushi"]);
