let container =document.querySelector(".container")

let chosenColor = "";
function handleClick(event){
  console.log(event.target)
  event.target.style.backgroundColor = chosenColor;
}
container.addEventListener("click", handleClick);

let colors = document.querySelector(".colors")


function handleColorSelection(event){
  console.log(event.target)
  chosenColor = event.target.classList[1];
}
colors.addEventListener("click", handleColorSelection)

//other code
// // var body = document.querySelector('body');
var table = document.createElement('table');
var tblB = document.createElement('tbody');
// var cont = document.getElementsByClassName('container')
// // body.appendChild(cont)
// console.log(cont);
container.appendChild(tblB);


for(var i=0; i<10; i++){
  var tr = document.createElement('tr');
  tblB.appendChild(tr);
  // tr.innerText = "city on fire"
  // tr.className = "city"

  for (var j = 0; j< 20; j++){
    var td = document.createElement('td')
    tr.appendChild(td);
    td.className = "city"
  }
}
