$(document).ready(function() {
	//Initialize and test variables
	var rdmNum = Math.floor(Math.random()*100+1);
  	var currentGuess = 0;
  	var countGuess = 0;
  	console.log("Random number is: "+rdmNum+" outside of functions");
  	console.log("User guess is: "+currentGuess+" outside of functions");

//Check Input Validity
var checkGuess = function(currentGuess) {
	//alert("inside of checkguess function");
	//console.log("Random number is "+rdmNum+" inside of checkGuess");
	//console.log("User guess is "+currentGuess+" inside of checkGuess");
	
	if (isNaN(currentGuess)) {
		var checkOne = prompt("Please enter a number only!");
		checkGuess(checkOne);
		}
		//check if number is a whole number
		else if (currentGuess % 1 !== 0) {
		var checkTwo = prompt("Please enter a whole number!");
		checkGuess(checkTwo);
		}
		//check if the number entered is blank
		else if (currentGuess === null) {
		var checkThree = prompt("Please enter a number!");
		checkGuess(checkThree);
		}
		else if (currentGuess > 100 || currentGuess < 1) {
		var checkFour = prompt("Please enter a number between 1 and 100");
		checkGuess(checkFour);
		}
		else {
			//console.log("Random number is "+rdmNum+" just before playGame is called");
			//console.log("User guess is "+currentGuess+" just before playGame is called");
			countGuess = countGuess + 1;
			console.log(countGuess);
			$("span#count").text(countGuess);
			$("ul#guessList").append("<li>"+currentGuess+"<li>");
			playGame(rdmNum, currentGuess);

		}
	  }

// append countguess to #count

var playGame = function(rdmNum, currentGuess) {
	//alert("inside of playGame");
	//console.log("Random number is "+rdmNum+" inside of playGame");
	//console.log("User guess is "+currentGuess+" inside of playGame");
	var userFeedback = document.getElementById("feedback");

	if (
		(Math.abs(rdmNum - currentGuess) >= 1) 
		&& (Math.abs(rdmNum - currentGuess) <= 10)
		) 
	{
		
		userFeedback.textContent = "Your guess is very hot! Guess again!"
	}  

	else if (
		(Math.abs(rdmNum - currentGuess) >= 10) 
		&& (Math.abs(rdmNum - currentGuess) <= 20)
		) 
	{
		userFeedback.textContent = "Your guess is hot! Guess again!";
	}  

	else if (
		(Math.abs(rdmNum - currentGuess) >= 20) 
		&& (Math.abs(rdmNum - currentGuess) <= 30)
		) 
	{
		userFeedback.textContent = "Your guess is warm! Guess again!";
	}  

	else if (
		(Math.abs(rdmNum - currentGuess) >= 30) 
		&& (Math.abs(rdmNum - currentGuess) <= 50)
		) 
	{
		userFeedback.textContent = "Your guess is cold! Guess again!";
	}  

	else if (Math.abs(rdmNum - currentGuess) >= 50) {
	
		userFeedback.textContent = "Your guess is ice cold! Guess again!";
	}

	else if (rdmNum == currentGuess) {
		userFeedback.textContent = "You Win! Please press the +NEW GAME button!";
		alert("You Win!!!!!");

	}
	} 

	//Function which allows user to re-enter guess and increments guess counter

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	//Event handler for user guess: when guess button is clicked store value in currentGuess variable and validate 
  	$("#guessButton").click(function() {
  		//alert("button click test");
  		var currentGuess = $('#userGuess').val();
  		checkGuess(currentGuess);
  		var itemValue = $('#userGuess').val('');
  	})

  	$(document).on('keypress', function(key) {
        if (key.keyCode == 13) {
        	var currentGuess = $('#userGuess').val();
  			checkGuess(currentGuess);
  			var itemValue = $('#userGuess').val('');
        }
 });

  	//Start a New Game: when new game button is clicked, generate a random number between 1 and 100
  	$(".new").click(function() {
  		location.reload();
  	})


 });


