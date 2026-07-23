let button = document.getElementById("btn")
let list = document.getElementById("list")

button.addEventListener("click", async () => {
  try {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({ name: "Syams"})
      }
  );
  const data = await response.json();
  let dataArr = [data]
  let name = nameList(dataArr);
  console.log(response.ok)
  console.log(name)
  list.innerHTML = `<p> berikut adalah list nama yang ada : ${name.join(', ')}</p>`
  } catch (error) {
    console.log("error:", error)
    list.innerHTML = "<p style='color:red'>Gagal ambil data</p>"
  }
})

function nameList(userName) {
  let list = [];
  for (let i = 0; i < userName.length; i++) {
    list.push(userName[i].name)
  }
  return list;
}
