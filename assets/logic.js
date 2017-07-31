// GLOBAL VARs
// ++++++++++++++++++++++++++++++++++
// arrays and vars, holding data

var wordBank=["polis" , "cat" , "fork" , "frank","mouse"];
var selectedWord="";
var letterInWord=[];
var numBlanks=0;
var blanksAndSucs =[];   //polis... etc
var wrongLetters=[];
var letGuess = "";

// GAME COUNTERs
var winCount = 0;
var lossCount = 0;
var guessLeft = 7;


 newGame: function() {
		setTimeout(document.getElementById('audio5').play(), 5000);
	}

// FUNCTIONS (reuable bloccks of code, i will call them?
// when i need them, accross the whole document
// ++++++++++++++++++++++++++++++++++
function startGame(){
	selectedWord = wordBank[Math.floor(Math.random() * wordBank.length)];
	letterInWord = selectedWord.split("");
	numBlanks = letterInWord.length;

	// reset
	guessLeft = 5;
	wrongLetters =[];
	blanksAndSucs =[];

// poplate blank and sucsess with right numb and blanks
for (var i = 0; i < numBlanks; i++ ){
	blanksAndSucs.push("_");
};


// change html, to reflect, round conditions

$('#dashes').innerHTML = blanksAndSucs.join("  ");
$('#numGuesses').innerHTML = guessLeft;
$('#winCount').innerHTML = winCount;
$('#lossCount').innerHTML = lossCount;

// TESTING,debuging
console.log(selectedWord)
console.log(letterInWord);
console.log(numBlanks);
console.log(blanksAndSucs);

};


function checkLetters(letter){
	// check if leeter exist in the word??????
	var isLetterInWord = false;
	for (var i = 0; i < numBlanks; i++){
		if (selectedWord[i] == letter) {
			isLetterInWord = true;
		
		}
	}

	// проверить в слове сущ буква   и затем размножить бланканд саксид аррай
    if (isLetterInWord) {
    	for(var i = 0; i < numBlanks; i ++){
    		if (selectedWord[i] == letter){
    			blanksAndSucs[i] = letter;
    		}
    	}


}
  else {
  	wrongLetters.push(letter);
  	guessLeft-- 
  }	



// console.log(blanksAndSucs);

}

function roundComplete(){
	console.log("win count:" + winCount + "| Loss Count:" + lossCount + "| Guesses Left " + guessLeft);

// ech round we uptade html to feflect
$('#numGuesses').innerHTML = guessLeft;
$('#dashes').innerHTML = blanksAndSucs.join("  ");
// check if user won
if (letterInWord.toString() == blanksAndSucs.toString()) {
	winCount++;
	alert("Keep Going");


	// $("#winCount").innerHTML= winCount;
	startGame();


 }
   else if (guessLeft == 0) {
   	lossCount++;
   	alert("You loss");

   	$("#lossCount").innerHTML = lossCount;

   	startGame();
   }

}  
// cheeck if user is lost


// MAIN PROCCESS
// ++++++++++++++++++++++++++++++++++


// registering keyclicks!!!
// +++++++++++++++++++++++++++++++++++++++++

document.onkeyup =	function(event) {
   var leterGuess = String.fromCharCode(event.keyCode).toLowerCase();
	checkLetters(leterGuess);
	roundComplete();

	console.log(leterGuess);

};






























