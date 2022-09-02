/*-------------------------------- Constants --------------------------------*/
// const winningCombos = [[board[0],board[1],board[2]], [board[3],board[4],board[5]],[board[6],board[7],board[8]],[board[0],board[3],board[6]],[board[1],board[4],board[7]],[board[2],board[5],board[8]],[board[0],board[4],board[8]],[board[2],board[4],board[6]]]


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
board = [1,1,null,null,-1,null,-1,null,null]
turn = 1
winner = null
render()
}
function render() {
  board.forEach((space, idx) => {
    const playerChoice = squareEls[idx]
    if (space === null) {
      return playerChoice.textContent = ''
    }
    return space === 1 ? playerChoice.textContent = 'x' : playerChoice.textContent = 'o'
  })
  renderWin()
}

function renderWin () {
  if (winner === null) return `It is player ${turn} turn`
  return winner === 'T' ?`This game is a Tie`
}

