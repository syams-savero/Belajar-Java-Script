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



// For loop

let largeCountries = ["China", "India", "Indonesia", "USA", "Pakistan"];

for (let i = 0; i < largeCountries.length; i++) {
  console.log("- " + largeCountries[i]);
}


// Push, pop, unshift, shift 
let Countries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];

Countries.pop()
Countries.push("Pakistan")
Countries.shift()
Countries.unshift("China")
console.log(Countries)


// Logical Operator 
let dayOfMonth = 13;
let weekDay = "Friday";

if (weekDay === "Friday" && dayOfMonth === 13) {
  console.log("Run")
}


// Random Number
let hand = ["papper", "rock", "scissor"]

function rps() {
  let random = Math.floor(Math.random() * 3);
    console.log(hand[random])
}

rps()
