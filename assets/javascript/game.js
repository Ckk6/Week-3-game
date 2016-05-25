//Establish word array
var list = [
        'javascript',
        'bootstrap',
        'css',
        'html',
        'programmer',
        'developer',
        'jquery',
        'array',
        'variable',
        'mongodb',
        'github',
        'slack',
        'loop'
            ];

//initialize variables
var times = 0;
var userGuess;
var nextWord = true;
var dash ="_ ";
var fillIn = "";
var usedLetters =[];
var filler = '';
var guessAvail = 0;
var guessTaken = 0;
var guessRemaining = 0;
var hits = 0;
var misses = 0;
var blank ='';
var wins = 0;
var losses =0;
var play = 0

//console.log('i am before play');

// allow user to play 10 times before resetting wins and losses
//for(var play=1; play<=10; play++){
	//console.log('play is '+ play);
// Randomly select word
var word= list[Math.floor(Math.random() * list.length)];
console.log(word);

//reset variables
 	
 	guessAvail = word.length + 6;
	guessTaken = 0;
	guessRemaining = guessAvail - guessTaken;
	filler ="";
	blank = document.getElementById('d1');
	blank.innerHTML = filler;

		 

	//layout dashes = to word length
	for (wi=1; wi<=word.length; wi++) {
		

		blank = document.getElementById('d1');
		blank.innerHTML = blank.innerHTML + dash;
	}

	//assign appropriate number of dashes to string variable
	filler = blank.innerHTML;
	console.log(filler);
	filler =  filler.split(" "); 
	console.log(filler);
	
	
		
	
	//capture userguess and turn it into a lower case letter
	document.onkeyup = function(event) {
		userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		console.log(userGuess);

		//increment guessTaken
		guessTaken++;

		//	reset wi reset dashes/evaluating user guess against word fill in guess in appropriate spaces
		
		for (wi=0; wi<word.length; wi++) {
			console.log(word[wi]);
			console.log(wi);	 
			//console.log(filler);
			if (userGuess == word[wi]) {
				hits++;
				console.log(filler);
				console.log('user guess is =');
				filler[wi] = word[wi];
				//filler = filler.join('');
				console.log (filler);
				blank = document.getElementById('d1');
				blank.innerHTML = filler;
				/*if (wi == 0) { 
						filler = userGuess + filler.substring(wi+1,word.length - 1);
						console.log(userGuess);
						console.log(filler.substring(wi+1,word.length - 1));
						console.log(filler);
						console.log(wi);
						console.log(word.length);
				} else if (wi == word.length - 1){
						filler = filler.substring(1,wi-1) + userGuess;
						console.log(filler);
						console.log(wi);
				} else {
					filler = filler.substring(1,wi-1) + userGuess + 
					filler.substring(wi+1,word.length-1);
					console.log(filler);
					console.log(wi);
						}*/
			//logic when userguess does not match a letter in the word	
			}else {

				console.log('user guess is not =');
				misses++;
			}// end of miss logic else
			
		}//end of for loop checking userguess against each letter
	if (hits == word.length) {
		wins = wins + 1;
	} 

	if (misses == 6){
		losses = losses + 1;
	}
	



		} // end of function 

//}//end of loop to play 10 times
 
//var again = confirm('Would you like to play again?')

 //if (again == true){
 //	location.reload;
 //}






 

//}
