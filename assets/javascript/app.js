//global variables
var title = ['M', 'U', '/', 'T', 'H', '/', 'U', 'R', ':', ' ', 'A', 'l', 'i', 'e', 'n', ' ', 'T', 'r', 'i', 'v', 'i', 'a'];
console.log(title);
var timer = 60,
	correct = 0,
	incorrect = 0,
	questionIndex = 0;


//assign questions and answers to arrays within questions object
// var questions = {
// 	q1: ['a', 'b', 'c', 'd', 'e'],
// 	q2: ['f', 'g', 'h', 'i', 'j'],
// };

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
	}
];

//function to reset game
function resetGame(){
	$('button').hide();
	$('.radios').hide();
	$('#instructions').hide();
	$('#time').hide();
};

function loadQuestion(){
	if (questionIndex < questions.length) {
		$('#question').html(questions[questionIndex].question);
		$('.radios').show();
		$('.radios').checked = false;
		$('label[for=test1]').html(questions[questionIndex].options[0]);
		$('label[for=test2]').html(questions[questionIndex].options[1]);
		$('label[for=test3]').html(questions[questionIndex].options[2]);
		$('.radios').click(function(){
			var userGuess = $(this).attr('id');
			console.log(userGuess);
			//check for correct answer
			if (userGuess == questions[questionIndex].correctAnswer) {
				correct = correct + 1;
				console.log(correct);
			}
			else {
				incorrect = incorrect + 1;
			}
			questionIndex++;
			loadQuestion();
		});

		// $('.radios').click(loadQuestion);
		// this.checked = false;
	}
};

resetGame();

var buttonClick = new Audio('./assets/javascript/alien_danger.wav');

//click start button to reveal questions and start countdown timer
$('button').click(function() {
  $(this).slideUp();
  buttonClick.play();
  //$('#instructions').empty();
  //$('.radios').show();
  $('#instructions').show();
  $('#time').show();
  loadQuestion();
  

  //$('#question1').html(questions.q1[0]);
  
  // for (var i=1; i<questions.q1.length, i++){
  // 	$('label[for=test1]').html(questions.q1[i]);

  //$('#question2').html(questions.q2);
  //setInterval(pulse, 0);
});


//loop to print title indexes as game title, emulating typing letters to a CRT monitor
for (var i = 0; i < title.length; i++) {
    (function(i){
        setTimeout(function(){
        	$('#header').append(title[i]);
        }, 150 * i);

    }(i));
}

//wait for title to load, then show button
window.setTimeout(function () {
    //$('#instructions').html('Press Start to begin!');
    $('button').show();
}, 3400);

// pulse instructions
// function pulse() {
//     $('#instructions').fadeIn(300);
//     $('#instructions').fadeOut(500);
// }
//setInterval(pulse, 1000);

// $(document).ready(function() {
//     setInterval ('cursorAnimation()', 600);
//     captionEl = $('#caption');
//     });

// function cursorAnimation() {
//     $('#cursor').animate({
//         opacity: 0
//     }, 'fast', 'swing').animate({
//         opacity: 1
//     }, 'fast', 'swing');
// }