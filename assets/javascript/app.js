//global variables
var title = ['M', 'U', '/', 'T', 'H', '/', 'U', 'R', ':', ' ', 'A', 'l', 'i', 'e', 'n', ' ', 'T', 'r', 'i', 'v', 'i', 'a'];
console.log(title);
var timer,
	correct = 0,
	incorrect = 0,
	userGuess,
	myVar,
	questionIndex = 0;

//trivia questions library
var questions = [
	{
		question: "What is Ripley's cats' name?",
		options: ["Jones", "Smith", "Parker"],
		correctAnswer: 0
	},
	{
		question: "What is the name of the cargo ship?",
		options: ["Covenant", "Nostromo", "Prometheus"],
		correctAnswer: 1
	},
	{
		question: "How many crew members were aboard the Nostromo?",
		options: ["7", "6", "8"],
		correctAnswer: 0
	},
	{
		question: "What is the name of the computer on board the ship?",
		options: ["Cousin", "Father", "Mother"],
		correctAnswer: 2
	},
	{
		question: "What are your chances?",
		options: ["Great!", "Does not compute.", "Terrible!"],
		correctAnswer: 1
	}
];

//function to reset game
function resetGame(){
	$('button').hide();
	$('.radios').hide();
	$('#instructions').hide();
	$('#time').hide();
};

//load new question to DOM
function loadQuestion(){
	//if we have not completed all the questions..
	if (questionIndex < questions.length) {
		$('#question').html(questions[questionIndex].question);
		$('.radios').show();
		$('label[for=test1]').html(questions[questionIndex].options[0]);
		$('label[for=test2]').html(questions[questionIndex].options[1]);
		$('label[for=test3]').html(questions[questionIndex].options[2]);
		// $('.radios').click(function(){
		// 	//get id for radio button selected by user
		// 	userGuess = $(this).attr('id');
		// 	console.log(userGuess);
		// 	console.log(questions[questionIndex].correctAnswer);
		// 	//check for correct answer
		// 	if (userGuess == questions[questionIndex].correctAnswer) {
		// 		correct = correct + 1;
		// 		console.log(correct + " correct");
		// 	}
		// 	else {
		// 		incorrect = incorrect + 1;
		// 		console.log(incorrect + " incorrect");
		// 	}
		// 	questionIndex++;
		// 	loadQuestion();
		// 	$('.radios').prop('checked', false);
		// });

		// $('.radios').click(loadQuestion);
		// this.checked = false;
	}
	else {
		console.log(questionIndex);
	}
};

resetGame();

var buttonClick = new Audio('./assets/javascript/alien_danger.wav');

//click start button to reveal questions and start countdown timer
$('button').click(function() {
  $(this).slideUp();
  buttonClick.play();
  timer = 45;
  $('#instructions').show();
  $('#time').show();
  loadQuestion();
});

$('.radios').click(function(){
	//get id for radio button selected by user
	userGuess = $(this).attr('id');
	console.log(userGuess);
	console.log(questions[questionIndex].correctAnswer);
	//check for correct answer
	if (userGuess == questions[questionIndex].correctAnswer) {
		correct = correct + 1;
		console.log(correct + " correct");
		}
	else {
		incorrect = incorrect + 1;
		console.log(incorrect + " incorrect");
		}
		questionIndex++;
		checkWin();
		loadQuestion();
		//clear radio buttons
		$('.radios').prop('checked', false);
		});

//loop to print title indexes as game title, emulating typing letters to a CRT monitor
//useless animation?  maybe.
for (var i = 0; i < title.length; i++) {
    (function(i){
        setTimeout(function(){
        	$('#header').append(title[i]);
        }, 150 * i);

    }(i));
}

//check to see if 3 questions are correctly answered
function checkWin() {
	if (correct > 2) {
		$('.gameboard').hide();
		$('#result').html('CONGRATS, YOU SURVIVED.');
		$('#result').pulse();
	}
	else if (incorrect > 2) {
		youLose();
	}
};
//wait for title to load, then show button
window.setTimeout(function () {
    $('button').show();
}, 3400);

//pulse instructions
function pulse() {
    $('#result').fadeIn(300);
    $('#result').fadeOut(500);
}
//inteval for pulsing winning statement
setInterval(pulse, 1000);

//start reducing time remaining
function setTimer() {
	timer--;
	checkTime();
	$('#time').html('Time Remaining: ' + timer);
}

//decrement timer one second every 10000 miliseconds
setInterval(setTimer, 1000);

//check to see if time has run out
function checkTime() {
	if (timer < 0) {
		youLose();
	}
};
//Game over man, game over!
function youLose() {
	$('.body').html('<img src="./assets/javascript/NostromoExplodes.gif" width="100%"></img>');
}