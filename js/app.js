/*-------------------------------- Constants --------------------------------*/
const winningCombos = [[1,1,1], [-1,-1,-1]]


/*---------------------------- Variables (state) ----------------------------*/
let winner, turn, board


/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll("div.board-space")
//console.log(squareEls)
const messageEls = document.querySelector("#message")

/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
init()
function init() {
board = [null,null,null,null,null,null,null,null,null]
turn = 1
winner = null
render()
}
function render() {
  board.forEach((boardSpace, idx) => {
    boardSpace = squareEls[idx]
    console.log(boardSpace)
    
  })
  // if (winner === null) {
  //   `It is player ${turn} turn`
  // }
  
}

