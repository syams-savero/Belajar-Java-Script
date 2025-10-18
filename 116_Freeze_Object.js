// Cara membuat freeze object
// fungsi nya adlaah agar isi dari object itu tidak dapat dirubah lagi
// intinya kita lock object itu agar gabisa di edit edit
// conoth :

let object = {
    satu: 1,
    dua: 2, 
    tiga: 3
};

// biasanya kita bisa edit object dengan cara

object["empat"] = 4;
// atau
object.lima = 5;

console.log(object);

// sekarang isi dari variabel object ada 5
// jika kita tidak ingin object bisa di edit maka kita menggunakan object.freeze
// contoh :

let object2 = {
    enam: 6,
    tujuh: 7,
    delapan: 8
};

Object.freeze(object2);

// kita akan coba edit object2
object2.sembilan = 9;
// Menjalankan object2
console.log(object2);

// hasilnya adalah walau object2 sudah ditambah properties sembilan akan tetapi isi dari objest2 masih sama
