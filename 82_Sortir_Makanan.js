// Latihan soal
// Bikin function eat(food) dengan counter global health.

/*Aturan perubahan:
Kalau food = "salad", "fruit", "veggie" → +1
Kalau food = "burger", "pizza", "fries" → -1
Makanan lain → 0 (tidak berubah)
Return string:
"health Healthy" kalau health > 0
"health Unhealthy" kalau health <= 0
*/

let health = 0;

function eat(food) {
    switch(food) {
        case "salad":
        case "fruit":
        case "veggie":
        health += 1;
        break;
        case "burger":
        case "pizza":
        case "fries":
        health -= 1;
        break;
    }

    if (health > 0) {
        return health + " Healthy";
    } else {
        return health + " Unhealthy";
    }
}

console.log(eat("burger")); // -1
console.log(eat("veggie")); // +1
console.log(eat("fruit"));  // +1