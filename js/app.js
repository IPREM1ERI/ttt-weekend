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

const squareEls = document.querySelectorAll(".board-space")
const messageEls = document.querySelector("#message")
const parentEl = document.querySelector(".board")
/*----------------------------- Event Listeners -----------------------------*/


parentEl.addEventListener('click', handleClick)
console.log(parentEl)





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
    // console.log("here is space  ", space)
    // console.log('here is playerchoice', playerChoice)
    // console.log("this is squareEls", squareEls)
    // console.log("this  is idx", idx)

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

function handleClick (evt) {
  const sqIdx = parseInt(evt.target.id[2])
  if (winner != null) return
  else if (board[sqIdx] != null) return "space taken"
  else {  
    board[sqIdx] = turn;
    turn = turn * (-1)
    console.log('board status',board)
    render()
    getWinner()
  }
}

// function getWinner () {
//   board.forEach((space, idx) {
    
//   })
// }


