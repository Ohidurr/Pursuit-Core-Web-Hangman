// Game
//
//     Should have guesser and referee.
//     Should have guesses remaining.
//     Should have a play function.
//     Should check for validity of guess.
//     Should have an isGameOver.
const Board = require("./Board.js")
const HumanPlayer = require("./HumanPlayer.js")
const Computer = require ("./computerPlayer.js")
class Game{
  constructor(){
    this.winner = undefined
    this.guesser = guesser;
    this.ref = ref;
    //this.board = new Board
    this.guessReamining = 6;
    this.letters = []
  }
  checkValidGuess(input){
    return input.length === 1 && input.toUpperCase() != input.toLowerCase()
   }
  play(){

  }
  isGameOver(){

  }

}
let board = new Board(random.length)
console.log(board.displayBoard())
let game = new Game (new HumanPlayer("Ohidur"))
game.play()
