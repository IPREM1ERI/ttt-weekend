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
    return space === 1 ? playerChoice.textContent = 'X' : playerChoice.textContent = 'O'
    
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
    //console.log('board status',board)
    render()
    getWinner()
  }
}
//board[winningCombos[0][1]] === -1
function getWinner () {
  winningCombos.forEach((combo) => {
    let sum = 0
    combo.forEach(idx =>{
      sum += board[idx]
    }) 
    if (sum === 3) {
      return winner = 1
    } else if (sum === -3) {
      return winner = -1
    }
    if (winner)
  })
}


