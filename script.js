const buttons = document.querySelectorAll('button');
const yourScore = document.querySelector('#yourScore');
const compScore = document.querySelector('#compScore');
const win = document.querySelector('#firstFive')
const weapon = document.querySelector('#weapon');
const again = document.querySelector('#again')
const playAgainBtn = document.createElement('button');

let scorePlayer = 0;
let scoreComputer = 0;
let playerSelection;
let computerSelection;

//for each para recorrer los elementos de button
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playerSelection = button.id;
        computerSelection = computerPlay();

        playRound();
        testWin();
    })
});

function computerPlay() {
    let options = ['rock','paper','scissor'];
    randoptions = options[Math.floor(Math.random()*3)];
    return randoptions;
}


function playRound() {
    let winner = ['rockscissor','paperrock','scissorpaper'];
    let play = playerSelection + computerSelection;

    if (play == winner[0] || play == winner[1] || play == winner[2]) {
        scorePlayer++;
        weapon.textContent = 'You win!'  + playerSelection + ' beats ' + computerSelection;
        yourScore.textContent = 'You have ' + scorePlayer + ' points.';
    } else if (playerSelection == computerSelection) {
        weapon.textContent = 'It\'s a tie, you both choose: ' + playerSelection ;
    } else {
        scoreComputer++;
        weapon.textContent= 'You lose! '+ computerSelection +' beats '+ playerSelection;
        compScore.textContent = 'Computer has ' + scoreComputer + ' points.';
    }
}
function testWin() {
    if (scorePlayer==5){
        win.textContent = 'Congrats! You are the Champion';
        playAgain();
    } else if (scoreComputer==5){
        win.textContent = 'Computer win the match. Better luck next time!';
        playAgain();
    }

}
//evita refrescar la pagina para regresar a los valores iniciales
function playAgain() {
    playAgainBtn.textContent = 'Play again?';
    again.appendChild(playAgainBtn);
    playAgainBtn.addEventListener('click', () => {

        scorePlayer = 0;
        scoreComputer = 0;
        win.textContent = 'First to win 5 is the Champion';
        weapon.textContent = 'Pick your weapon!';
        yourScore.textContent = 'You have 0 pints';
        compScore.textContent = 'Computer has 0 points';
        again.removeChild(playAgainBtn);
    })
}
