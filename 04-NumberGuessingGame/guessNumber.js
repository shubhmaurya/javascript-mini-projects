let randomNumber = parseInt(Math.random() * 100 +1);

// const mediaSize = window.matchMedia('(max-width: 500px)');

const userGuess = document.querySelector('#guessField');
const submit = document.querySelector('#submit');
const alreadyGuessed = document.querySelector('.guesses');
const guessRemaining = document.querySelector('.remainingGuess');
const lowOrHigh = document.querySelector('.lowOrHigh');
const restart = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numAttempts = 1;

let game = true;
// let oTime = 1;

if(game){
    submit.addEventListener('click', function(e){
        e.preventDefault();

        // if(mediaSize.matches === 1){
        //     document.createElement('br').prepend(document.querySelector('.resultParas').firstChild.innerHTML);
        //     oTime++;
        // }

        const guess = parseInt(userGuess.value);

        if (isNaN(guess)) {
            alert('Please enter some number.');
            userGuess.value = '';
        } else if (guess < 1) {
            alert('Please Give the value greater than 1.');
            userGuess.value = '';
        } else if (guess > 100) {
            alert('Please Give the value less than 100.');
            userGuess.value = '';
        } else {
            if(prevGuess[prevGuess.length-1] === guess || prevGuess.includes(guess)){
                displayMessage(`<div style="white-space: pre-line;">You have already guessed it previously.\nRelax you won't lost your attempt ;)</div>`);
                userGuess.value = '';
            }else{
                prevGuess.push(guess);
                displayGuess(guess);
                if (guess === randomNumber && numAttempts === 11){
                    checkGuess(guess);
                    gameOver();
                }else if(numAttempts === 11) {
                    displayMessage(`Game Over, Random number was ${guess}`);
                    gameOver();
                }else{
                    checkGuess(guess);
                }
            }
        }
    });
}

function checkGuess(guess){
    if (guess === randomNumber){
        displayMessage(`<div style="white-space: pre-line;">Congratulations!\nYou guessed it right, Number is ${guess} </div>`);
        gameOver();
    }else if (guess > randomNumber) {
        displayMessage(`${guess} is High, Try Again!`);
    }else{
        displayMessage(`${guess} is Low, Try Again!`);
    }
}

function displayGuess(guess){
    userGuess.value = '';
    alreadyGuessed.innerHTML += `${guess}, `;
    numAttempts++;
    guessRemaining.innerHTML = `${11 - numAttempts}`
}

function displayMessage(message){
    lowOrHigh.innerHTML = `<h3>${message}<h3>`;
}

function gameOver(){
    userGuess.value = '';
    userGuess.setAttribute('disabled','');
    submit.setAttribute('disabled',true)
    submit.style.cursor = 'not-allowed';
    submit.style.opacity = '0.6';
    submit.style.transition = 'opacity 0.5s';
    p.classList.add('button');
    p.innerHTML = `<h1 class="restartGame"> Restart the Game </h1>`
    restart.appendChild(p);
    game = false;
    restartGame();
}

function restartGame(){
    const newGame = document.querySelector('.restartGame');
    newGame.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 +1);
        prevGuess = [];
        numAttempts = 1;
        alreadyGuessed.innerHTML = '';
        guessRemaining.innerHTML = `${11 - numAttempts}`;
        userGuess.removeAttribute('disabled');
        submit.removeAttribute('disabled');
        submit.style.cursor = 'pointer';
        submit.style.opacity = '1';
        lowOrHigh.innerHTML = ''
        restart.removeChild(p);
        game = true;
    });
}

//for hamburger
document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.navSection');

    burgerMenu.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
    navLinks.addEventListener('click', function () {
        navLinks.classList.remove('active');
    });
});