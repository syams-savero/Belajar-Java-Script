let quote = document.getElementById("quote");
let author = document.getElementById("author");
let generateButton = document.getElementById("btn");


const quotes = [
  { text: "The only way to do great work is to love what you do", author: "Steve Jobs" },
  { text: "Life is what happens when you're busy making other plans", author: "John Lennon" },
  { text: "The future belongs to those who believe in the beauty of their dreams", author: "Eleanor Roosevelt" },
  { text: "In the middle of difficulty lies opportunity", author: "Albert Einstein" },
  { text: "Success is not final, failure is not fatal", author: "Winston Churchill" },
  { text: "Be yourself, everyone else is already taken", author: "Oscar Wilde" },
  { text: "The only impossible journey is the one you never begin", author: "Tony Robbins" },
  { text: "Get busy living or get busy dying", author: "Stephen King" },
  { text: "You miss 100% of the shots you don't take", author: "Wayne Gretzky" },
  { text: "Believe you can and you're halfway there", author: "Theodore Roosevelt" },
]

function random() {
  let randomNum = Math.floor(Math.random() * quotes.length)
  quote.textContent = quotes[randomNum].text;
  author.textContent = quotes[randomNum].author;
}

