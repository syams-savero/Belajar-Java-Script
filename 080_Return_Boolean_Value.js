// Mengembalikan Boolean dari Fungsi
// Perbandingan (<, >, ===, !==, dll) langsung menghasilkan true/false.
// Jadi, nggak perlu pakai if/else.
// Contoh :
function isMore(a, b) {
  return a < b; // langsung mengembalikan true atau false
}

// Contoh biasanya yang sebenarnya tidak perlu:
function isLess(a, b) {
  if (a < b) {
    return true;
  } else {
    return false;
  }
}

console.log(isLess(10, 15)); // true
console.log(isLess(20, 5));  // false
console.log(isLess(7, 7));   // false
