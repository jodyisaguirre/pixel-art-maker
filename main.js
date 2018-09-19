let container =document.querySelector(".container")
let chosenColor = "";

function handleClick(event){
  event.target.style.backgroundColor = chosenColor;
}
container.addEventListener("click", handleClick);

let colors = document.querySelector(".colors")

function handleColorSelection(event){
  console.log(event.target)
  chosenColor = event.target.classList[1];
}
colors.addEventListener("click", handleColorSelection)

var table = document.createElement('table');
var tblB = document.createElement('tbody');

container.appendChild(tblB);

for(var i=0; i<10; i++){
  var tr = document.createElement('tr');
  tblB.appendChild(tr);

  for (var j = 0; j< 20; j++){
    var td = document.createElement('td')
    tr.appendChild(td);
    td.className = "city"
  }
}
