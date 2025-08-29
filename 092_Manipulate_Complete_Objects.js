// Membuat Objects yang kompleks
// Kamu diberikan sebuah array bernama myMovies yang berisi objek dengan informasi tentang sebuah film. Setiap objek punya properti title, director, release_year, genres (array string), dan rating.

// Film 1 
const myMovies = [
  {
    "title": "Inception",
    "director": "Christopher Nolan",
    "release_year": 2010,
    "genres": [
      "Sci-Fi",
      "Thriller",
      "Action"
    ],
    "rating": 8.8
  }, 
    {
    "title": "Ambatubass",
    "director": "Mas Amba",
    "release_year": 1945,
    "genres": ["horor", "action"],
    "rating": 11/10
}
];

// Cara akses object
console.log(myMovies[0].title);     //judul film 1
console.log(myMovies[1].title);     //judul film 2
console.log(myMovies[0].director);  //direktor film 1
