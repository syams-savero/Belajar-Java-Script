let button = document.getElementById("btn")
let list = document.getElementById("list")
let buttonGET = document.getElementById("btn-get")
let listGet = document.getElementById("list-get")
let buttonPUT = document.getElementById("btn-put")
let listPUT = document.getElementById("put")

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


// function PUT 
buttonPUT.addEventListener("click", async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1", {
      method: "PUT",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({
        name: "Syams",
        username: "syamssavero",
        email: "syams@email.com"
      })
    })
    const data = await response.json();
    console.log(response.ok);
    console.log(data);
    listPUT.innerHTML = `<p> Berikut adalah data yang di PUT : <br> nama : ${data.name} <br> username : ${data.username} <br> email : ${data.email} </p>`
  } catch (error) {
    console.log("error:", error)
    listPUT.innerHTML = "<p>Gagal PUT</p>"
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
