/*-------------------------------- Constants --------------------------------*/
// const winningCombos = [
// [board[0],board[1],board[2]], 
// [board[3],board[4],board[5]],
// [board[6],board[7],board[8]],
// [board[0],board[3],board[6]],
// [board[1],board[4],board[7]],
// [board[2],board[5],board[8]],
// [board[0],board[4],board[8]],
// [board[2],board[4],board[6]]
// ]


/*---------------------------- Variables (state) ----------------------------*/
let winner, turn, board


/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll(".board-spaces")
const messageEls = document.querySelector("#message")
const parentEl = document.querySelector(".board")
/*----------------------------- Event Listeners -----------------------------*/

// for (const space of spaces) {
//   space.addEventListener('click', function(evt) {
//     handleClick()
//   })
// }

console.log(parentEl)
parentEl.addEventListener('click', handleClick)



function handleClick (evt) {
  const sqIdx = evt.target
  sqIdx.slice()
  
  console.log(sqIdx)
}


/*-------------------------------- Functions --------------------------------*/
init()
function init() {
board = [null,null,null,null,null,null,null,null,null]
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
  if (winner === null) return messageEls.textContent = `It is player ${turn} turn`
  return winner === 'T' ? messageEls.textContent = `This game is a Tie` : messageEls.textContent = `Player ${winner} Wins`
}


//console.log(handleClick())

