// Latihan soal menyelesaikan lookup menggunakan for loop
// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

/*lookUpProfile("Kristian", "lastName") should return the string Vos
lookUpProfile("Sherlock", "likes") should return ["Intriguing Cases", "Violin"]
lookUpProfile("Harry", "likes") should return an array
lookUpProfile("Bob", "number") should return the string No such contact
lookUpProfile("Bob", "potato") should return the string No such contact
lookUpProfile("Akira", "address") should return the string No such property */

function lookUpProfile(name, prop) {
    for (let a = 0; a < contacts.length; a++) {
        if (name === contacts[a].firstName) {
            if (contacts[a].hasOwnProperty(prop)) {
                return contacts[a][prop];
            } else {
                return "No such property";
            }
        }
    } 
    return "No such name";
};

console.log(lookUpProfile("Kristian", "likes"))
console.log(lookUpProfile("Bob", "address"))