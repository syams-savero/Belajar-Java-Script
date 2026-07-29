const arr = [1, 2, 3, 4]
console.log(arr.find((a) => a > 2))

const users = [
  {nama: "agus", umur: 20},
  {nama: "arka", umur: 17},
  {nama: "supri", umur: 38}
]

console.log(users.find((namaUser) => namaUser.umur > 17))
