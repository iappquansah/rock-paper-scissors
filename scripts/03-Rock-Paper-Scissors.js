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

    // console.log(computerMove)
    
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
