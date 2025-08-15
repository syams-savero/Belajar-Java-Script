// Mengubah if else menjadi switch
// Soal :
/*
function chainToSwitch(val) {
  let answer = "";
  if (val === "bob") {
    answer = "Marley";
  } else if (val === 42) {
    answer = "The Answer";
  } else if (val === 1) {
    answer = "There is no #1";
  } else if (val === 99) {
    answer = "Missed me by this much!";
  } else if (val === 7) {
    answer = "Ate Nine";
  }
  return answer;
}

ubah menjadi menggunakan switch dan jalankan hasilnya */

function chainToSwitch(val) {
    let answer = "";
switch (val) {
    case "bob":
        answer = "Marley";
        break;
    case 42:
        answer = "The Answer";
        break;
    case 1:
        answer = "There is no #1";
        break;
    case 99:
        answer = "Missed me by this much!";
        break;
    case 7:
        answer = "Ate Nine";
        break;
}
return answer
}

let hasil1 = chainToSwitch("bob");
console.log(hasil1);

let hasil2 = chainToSwitch(42);
console.log(hasil2);

let hasil3 = chainToSwitch(1);
console.log(hasil3);

let hasil4 = chainToSwitch(99);
console.log(hasil4);

let hasil5 = chainToSwitch(7);
console.log(hasil5);