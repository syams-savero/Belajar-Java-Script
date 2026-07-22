let button = document.getElementById("btn")
let list = document.getElementById("list")

button.addEventListener("click", async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  const data = await response.json();
  let name = nameList(data);
  console.log(name)
  list.innerHTML = `<p> berikut adalah list nama yang ada : ${name.join(', ')}</p>`
})

function nameList(userName) {
  let list = [];
  for (let i = 0; i < userName.length; i++) {
    list.push(userName[i].name)
  }
  return list;
}
