currentPlayer = 1;
function placeMark(id) {
    var box=document.getElementById(id);
    if currentPlayer === 1 {
    box.innerHTML = "X";
    }
    else {    
        box.innerHTML = "O";
    }
    currentPlayer = -1 * currentPlayer;
}
clearBoard () {
    var box1 = document.getElementById(id);
    var box2 = document.getElementById(id);
    //...
    var box9 = document.getElementById(id);
}