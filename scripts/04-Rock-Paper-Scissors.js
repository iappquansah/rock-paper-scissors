let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  loses : 0,
  ties : 0};

updateScoreElement();


function pickComputerMove(){
  let computerMove = "";
  let computerMoveNumber = Math.floor(Math.random() * 3);
  if (computerMoveNumber === 0){
    computerMove = "rock";
  }
  else if (computerMoveNumber === 1){
    computerMove = "paper";
  }
  else{computerMove ="scissors";}
  return computerMove;
  
}

function updateResultElement(result,userMove,computerMove){
  document.querySelector('.js-result').innerHTML = (`${result} <br><br>
  You  <img class = "moveIcon" src="images/${userMove}-emoji.png"><img class = "moveIcon" src="images/${computerMove}-emoji.png">  Computer `);
}

function updateScoreElement(){
  document.querySelector('.js-score').innerHTML = (`Wins: ${score.wins} Loses: ${score.loses} Ties: ${score.ties}`);
}

function playGame(userMove){
  const computerMove = pickComputerMove()
  let result = "";
  if (computerMove === userMove){
    result = "It's a tie"
    score.ties += 1

  }else if ((computerMove=== "rock" && userMove === "scissors") ||(computerMove=== "scissors" && userMove === "paper") ||(computerMove=== "paper" && userMove === "rock" )){
    result = "You lost"
    score.loses += 1

  }else{ result = "You won"
    score.wins += 1
  }
  updateResultElement(result,userMove,computerMove);
  updateScoreElement();
  
localStorage.setItem("score", JSON.stringify(score))

}

pickComputerMove();
function reset(){
  score.loses = 0;
  score.ties = 0;
  score.wins = 0;
  localStorage.removeItem('score');
  updateScoreElement();
}

let intervalId;
let isAutoPlay = false;
function autoPlay(){
  if(!isAutoPlay){
    intervalId = setInterval(() =>{
    userMove = pickComputerMove()
    playGame(userMove)
    },1000)
    isAutoPlay = true 
  }
  else{
    clearInterval(intervalId)
    isAutoPlay = false
  }
}
let isAutoPlay10s = false
function autoPlay10s(){
  if (isAutoPlay10s == false){
  setTimeout(() => {
  clearInterval(intervalId)
  isAutoPlay = false
  },11000)

  if(!isAutoPlay){
    isAutoPlay = true
    intervalId = setInterval(()=>{
    userMove = pickComputerMove()
    playGame(userMove)
    },1000)
  }}
  else{
    isAutoPlay10s = false
  }}

document.querySelector('.js-rock-button').addEventListener(
  "click", () => {playGame('rock')}
)
document.querySelector('.js-paper-button').addEventListener(
  "click", () => {playGame('paper')}
)
document.querySelector('.js-scissors-button').addEventListener(
  "click", () => {playGame('scissors')}
)
document.querySelector('.js-reset-button').addEventListener(
  "click", () => {reset()}
)
document.querySelector('.js-auto-play').addEventListener(
  "click", () => {autoPlay()}
)
document.querySelector('.js-auto-play-10s').addEventListener(
  "click", () => {autoPlay10s()}
)
document.querySelector('body').addEventListener(
  "keydown", (event) => {
    if (event.key === 'p'){
      playGame('paper')
    }else if (event.key === 's'){
      playGame('scissors')
    }else if (event.key === 'r'){
      playGame('rock')
    }
  }
)
