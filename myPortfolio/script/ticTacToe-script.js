var gameMarker = "X";

function changeMarkerToX(){
    gameMarker = "X";
    // console.log("The X button was clicked!")
}

function changeMarkerToO(){
    gameMarker = "O";
    // console.log("The O button was clicked!")
}

function placeMark(divID){
    var box = document.getElementById(divID);
    box.innerHTML = gameMarker;
}