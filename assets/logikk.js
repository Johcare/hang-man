//$(window).onload()
//$(document).ready(function()
// variables-teams**
//selected words**
// onclick key functions
// random clues
// reset
//

$(document).ready(function(){


var bank = ["smile", "happy", "bear", "phone", "honey",
       "bird", "wizard", "browns", "newyork", "charlotte", "monkey"]
var selectedWord = " ";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses = []; 
var wrongLetters = [];
var wins = 0;
var losses = 0;
var guessesLeft = 10;

//startGame: 
function startGame() {
    $("#wordUp").innerHtml = "____________";
    selectedWord = bank[Math.floor(Math.random() * bank.length)];
    console.log(selectedWord);
    lettersInWord = selectedWord.split("");
    numBlanks = lettersInWord.length;
    myCounter = 0;

    //reset
    guessesLeft = 10;
    wrongLetters = [];
    blanksAndSuccesses = [];
    usedLetters = [];

    //new game reset
    for (var i = 0; i < numBlanks; i++ ){
        blanksAndSuccesses.push(" ");
    }
}    

var myCounter = 0;

var usedLetters = [];

//check letters
function checkLetters (letter) {
    var isLetterinWord = false;

    for (var i = 0; i < numBlanks; i++) {
        if(selectedWord[i] === letter) {
            isLetterinWord = true;
            break; 
            
        }
    }

    if (isLetterinWord && (usedLetters.indexOf(letter) == -1)) {
        usedLetters.push(letter);
        for (var i = 0; i < numBlanks; i++) {
            if(selectedWord[i] == letter){
                blanksAndSuccesses[i] = letter;
                myCounter ++;
            }
        }
       console.log("letter INN");
        console.log(myCounter + " " + selectedWord.length);
        if (myCounter == selectedWord.length) {
             wins++;
             console.log("you won");
             document.getElementById("wins").innerHTML = wins;
             startGame();
        }
    }    
    else {
        wrongLetters.push(letter);
        guessesLeft --;
        if( guessesLeft == 0){
            losses++;
            console.log("you lost");
            document.getElementById("looser").innerHTML = losses;
            startGame();
        }
    }    
    //console.log(blanksAndSuccesses);
    $("#wordUp").html(blanksAndSuccesses);

}

function roundComplete(){
    console.log("win count" + wins + "| loss count:" + losses + "| Guesses left" + guessesLeft);

}

$("#userGuess").innerHTML = guessesLeft;
$("#wordUp").innerHTML = blanksAndSuccesses.join("  ");

console.log(lettersInWord.toString());
console.log(blanksAndSuccesses.toString());


// else if (guessesLeft == 0) {
//     losses++;
//     alert ("You lose!!!");

// }

document.getElementById("looser").innerHTML = losses;
document.getElementById("wins").innerHTML = wins;

    
startGame();    

// document.addEventListener("keyup", function(){
//     //var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
//     //checkLetters(letterGuessed);
//     //roundComplete();
        

//     console.log("letterGuessed");
// });

document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    //roundComplete();
        

    console.log(letterGuessed);
    
}


});