let button = document.getElementById("btn")
let list = document.getElementById("list")
let buttonGET = document.getElementById("btn-get")
let listGet = document.getElementById("list-get")

// function POST 
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
  list.innerHTML = `<p> berikut adalah nama yang di POST : ${name.join(', ')}</p>`
  } catch (error) {
    console.log("error:", error)
    list.innerHTML = "<p style='color:red'>Gagal POST data</p>"
  }
})


//function GET 
buttonGET.addEventListener("click", async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json();
    let name = nameList(data)
    console.log(response.ok)
    console.log(name)
    listGet.innerHTML = `<p> List nama yang ada : ${name.join(', ')}</p>`
  } catch (error) {
    console.log("error:", error)
    listGet.innerHTML = "<p style='color:red'>Gagal ambil data</p>"
  }
})

// read Array function 
function nameList(userName) {
  let list = [];
  for (let i = 0; i < userName.length; i++) {
    list.push(userName[i].name)
  }
  return list;
}
