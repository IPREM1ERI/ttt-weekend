/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let winner, turn, board


/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll("div.board-space")
const messageEls = document.querySelector("#message")

/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
init()
function init() {
board = [null,null,null,null,null,null,null,null,null]
turn = 1
winner = null
}

