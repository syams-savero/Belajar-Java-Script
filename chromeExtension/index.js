let myLeads = [1, 2, 3];
let inputEl = document.getElementById("input-el") 
let inputBtn = document.getElementById("input-btn")



inputBtn.addEventListener("click", function() {
  myLeads.push(inputEl.value)
  console.log(myLeads)
})

for (let i = 0; i < myLeads.length; i++) {
  console.log(myLeads[i]);
}
