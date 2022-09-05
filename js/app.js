/*-------------------------------- Constants --------------------------------*/


const winningCombos = [
[0,1,2], 
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
]


/*---------------------------- Variables (state) ----------------------------*/
let winner, turn, board;


/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll(".board-space")
const messageEls = document.querySelector("#message")
const parentEl = document.querySelector(".board")
const resetBtnEl = document.querySelector("#reset-button")
/*----------------------------- Event Listeners -----------------------------*/


parentEl.addEventListener('click', handleClick)
resetBtnEl.addEventListener('click', init)





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
    let playerChoice = squareEls[idx]
    if (space === null) {
      playerChoice.textContent = ""
    }
      if (space === 1)  {
        playerChoice.textContent= 'X' 
      } 
      if  (space === -1) {
        playerChoice.textContent = 'O'
      }
  })
  if (!winner) {
    messageEls.textContent = `Your turn player ${turn === 1 ? "X" : "O"}`
  } else if (winner === "T") {
    messageEls.textContent = "The plot of Wargames"
  } else {
    messageEls.textContent = `Winner!! Player ${winner === 1 ? "X" : "O"}`
  }
}

function handleClick (evt) {
  const sqIdx = parseInt(evt.target.id[2])
  if (board[sqIdx] != null) return
    else {
      board[sqIdx] = turn
      turn = turn * (-1)
      winner = getWinner()
      render()
    }
}

function getWinner() {
  for (let i = 0; i < winningCombos.length; i++) {
    if (Math.abs(board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]]) === 3) return board[winningCombos[i][0]]
  }
    if (board.includes(null)) {
      return 
    } else {
      return "T"
    }
}



