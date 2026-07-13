let person = {
  name: "Savero",
  age: 19,
  country: "Indonesia"
}

function logData() {
    console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
  }

logData()


let age = 76;

if (age < 6) {
  console.log("free");
} else if (age <= 17) {
  console.log("Child Discount");
} else if (age <= 26) {
  console.log("Student Diccount");
} else if (age <= 66) {
  console.log("full price");
} else {console.log("Senior citizen discount")}


