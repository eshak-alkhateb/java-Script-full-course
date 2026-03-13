// bring the new score that we saved from the localStorage using getItem() function
// but first we should convert our code to JS language using JSON.parse
let score = JSON.parse(localStorage.getItem
('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};
// * Note: we use || operator if we remove the object then refresh the page, does not give us an error and create a new one

/*
//this code does the same above in shorter way
if(!score){
  score = {
    wins: 0,
    loses: 0,
    ties: 0
  }
}
*/

function playGame(userMove){
    let computerMove = pickComputerMove();
    let result = compareTwoMoves(userMove, computerMove);

    updateScoreElement(result);
    showInPage(userMove, computerMove, result);
}

function pickComputerMove(){
    // choose the computer's move
    let computerMove = '';
    let randomNumber = Math.random();
    if(randomNumber >= 0 && randomNumber < 1 / 3){
        computerMove = 'rock';
    }
    else if(randomNumber >= 1 / 3 && randomNumber < 2 / 3){
        computerMove = 'paper';
    }
    else if(randomNumber >= 2 / 3 && randomNumber < 1){
        computerMove = 'scissors';
    }
    return computerMove;
}

function compareTwoMoves(userMove,computerMove){
    let result;
    // compare the two moves
    if(computerMove === userMove){
        result = 'Tie';
    }
    else if(computerMove === 'scissors' && userMove === 'paper'){
        result = 'You lose';
    }
    else if(computerMove === 'rock' && userMove === 'scissors'){
        result = 'You lose';
    }
    else if(computerMove === 'paper' && userMove === 'rock'){
        result = 'You lose';
    }
    else{
        result = 'You win';
    }
    return result;
}

function showInPage(userMove = '', computerMove = '', result = ''){
    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-show-two-states').innerHTML =
        `You  <img class="move-icon" src="./icons/${userMove}-emoji.png" alt="scissors">
        <img class="move-icon" src="./icons/${computerMove}-emoji.png" alt="scissors"> Computer`;
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function resetStatus(){
    score.wins = 0;
    score.ties = 0;
    score.losses = 0;
    localStorage.removeItem('score');
    document.querySelector('.js-score').innerHTML =`Wins: 0, Losses: 0, Ties: 0`;
}

function updateScoreElement(result){
    //update the score element
    if(result === 'Tie')
        score.ties += 1;
    else if(result === 'You lose')
        score.losses += 1;
    else
        score.wins += 1;

    // save the score in local storage using setItem() function
    localStorage.setItem('score',JSON.stringify(score));
}

// Notes:
// * Best practice is to keep variables inside a scope (if we can)
