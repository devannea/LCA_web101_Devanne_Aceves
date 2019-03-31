currentPlayer = 1;
function placeMark('square') {
    var box=document.getElementsByClassName('square');
    if currentPlayer === 1 {
    box.innerHTML = "X";
    }
    else {    
        box.innerHTML = "O";
    }
    currentPlayer = 0;
}