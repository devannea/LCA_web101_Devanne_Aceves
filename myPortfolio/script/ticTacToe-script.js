var currentPlayer = 0;
var gameMarker = X;

function placeMark(divID){
    var box = document.getElementById(divID);
    box.innerHTML = gameMarker;
}