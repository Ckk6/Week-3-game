//Establish word array
var list = [
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine'
            ];

var times=0;
var userguess;
var nextword=true;
var dashes ="_ ";

var usedLetters=[];

//select word
var word= list[Math.floor(Math.random() * list.length)];
//  for (listi=times; listi<list.length && nextword==true;listi++){
	//word=list[listi]
		console.log(word);
		blank=''; 

	//layout dashes = to word length
	for (wi=1; wi<=word.length; wi++){
		
		var blank =document.getElementById('d1');
		blank.innerHTML= blank.innerHTML + dashes;
	}
		
	
	//capture userguess and turn it into a lower case letter
	document.onkeyup=function(event){
		userguess= String.fromCharCode(event.keycode).toLowerCase();
		console.log(userguess);
		document.write(userguess);
//	reset wi/evaluating user guess against word fill in guess in appropriate spaces
	for (wi=0; wi<word.length; wi++){
		console.log(word[wi]);	
		if (userguess==word[wi]){
			var fillIn=document.getElementById('d1');
		fillIn.innerHTML=fillIn.innerHTML + word[wi];
		}else  {
			fillIn=document.getElementById('d1');
		fillIn.innerHTML=fillIn.innerHTML + dashes;
		}

		}

		}





 

//}
