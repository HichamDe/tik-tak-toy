const playingBoard = document.getElementById("board"); 
const symbols = "OXOXOXOXO";
let turn = 0;

playingBoard.addEventListener("click", function (event) {

    const sell = event.target;
    if (!sell.innerHTML.length){
        sell.innerHTML = symbols[turn];
        turn += 1;
    }
    const anyWinnerRes = anyWinner();
    if(turn && turn >= 4 && anyWinnerRes){
        playingBoard.innerHTML = `GAME OVER - "${anyWinnerRes}" has Won!`;
        turn = undefined;
    }

});

function anyWinner() {

    const cell = document.querySelectorAll(".cell");
    const board = [
        [cell[0].innerText, cell[1].innerText, cell[2].innerText],
        [cell[3].innerText, cell[4].innerText, cell[5].innerText],
        [cell[6].innerText, cell[7].innerText, cell[8].innerText]
    ];

    if((board[0][0] == board[0][1] && board[0][1] == board[0][2] || 
        board[0][0] == board[1][0] && board[1][0] == board[2][0]) && board[0][0] != "") return board[0][0];
    
    else if((board[1][0] == board[1][1] && board[1][1] == board[1][2] || 
        board[0][1] == board[1][1] && board[1][1] == board[2][1] || 
        board[0][2] == board[1][1] && board[1][1] == board[2][0] ||
        board[0][0] == board[1][1] && board[1][1] == board[2][2]) && board[1][1] != "") return board[1][1];

    else if((board[2][0] == board[2][1] && board[2][1] == board[2][2] ||
        board[0][2] == board[1][2] && board[1][2] == board[2][2]) && board[2][2] != "") return board[2][2];
    
    else return false;

}
