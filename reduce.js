const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const initialValue = 5;
const sumWithInitial = arr.reduce(
  (accumulator, currentValue) => accumulator + currentValue, initialValue
)

console.log(sumWithInitial)


const tabungan = [{nama: "Andi", uang: 50000},
                  {nama: "Akmal", uang: 75000},
                  {nama: "Amar", uang: 65000}]

const totalTabungan = 0;
const iterasiTabungan = tabungan.reduce((accumulator, currentValue) => accumulator + currentValue.uang, totalTabungan)
console.log(iterasiTabungan)

const panjangUsername = 0;
const totalPanjangUsername = tabungan.reduce((accumulator, currentValue) => accumulator + currentValue.nama.length, panjangUsername)
console.log(totalPanjangUsername)
