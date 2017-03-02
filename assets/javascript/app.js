//global variables
var title = ['M', 'U', '/', 'T', 'H', '/', 'U', 'R', ':', ' ', 'A', 'l', 'i', 'e', 'n', ' ', 'T', 'r', 'i', 'v', 'i', 'a'];
console.log(title);
var timer = 60,
	correct = 0,
	incorrect = 0;


//assign questions and answers to arrays within questions object
// var questions = {
// 	q1: ['a', 'b', 'c', 'd', 'e'],
// 	q2: ['f', 'g', 'h', 'i', 'j'],
// };

var questions = [
	{
		question: "q1",
		options: ["a, blah", "b, blah", "c, blah", ],
		answer: "a"
	},
	{
		question: "q2",
		options: ["a, blah", "b, blah", "c, blah", ],
		answer: "b"
	}
];
console.log(questions.q1);

//function to reset game
function resetGame(){
	$('button').hide();
	$('.radios').hide();
};

resetGame();

var buttonClick = new Audio('./javascript/alien_danger.wav');

//click start button to reveal questions and start countdown timer
$('button').click(function() {
  $(this).slideUp();
  buttonClick.play();
  $('#instructions').empty();
  $('.radios').show();
  $('#question1').html(questions.q1[0]);
  
  // for (var i=1; i<questions.q1.length, i++){
  // 	$('label[for=test1]').html(questions.q1[i]);

  $('#question2').html(questions.q2);
  //setInterval(pulse, 0);
});


//loop to print title indexes as game title
for (var i = 0; i < title.length; i++) {
    (function(i){
        setTimeout(function(){
        	$('#header').append(title[i]);
        }, 150 * i);

    }(i));
}

window.setTimeout(function () {
    $('#instructions').html('Press Start to begin!');
    $('button').show();
}, 3400);

function pulse() {
    $('#instructions').fadeIn(300);
    $('#instructions').fadeOut(500);
}
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