/*
Ask at least five questions

Keep track of the number of questions the user answered correctly

Provide a final message after the quiz letting the user know the number of questions he or she got right.

Rank the player. If the player answered all five correctly, give that player the gold crown: 3-4 is a silver crown; 1-2 correct answers is a bronze crown and 0 correct is no crown at all.
*/


var correctAnswers = 0;

var firstQ = prompt('What color sun is?');
var firstAnswer = 'yellow';
if (firstQ.toLowerCase() === firstAnswer) {
    correctAnswers += 1;    
}

var secondQ = prompt('What language is official in USA?');
var secondAnswer = 'english';
if (secondQ.toLowerCase() ===  secondAnswer) {
    correctAnswers += 1;    
}

var thirdQ = prompt('is dolphin fish or mamal?');
var thirdAnswer = 'mamal';
if (thirdQ.toLowerCase() ===  thirdAnswer) {
    correctAnswers += 1;
}

var fourthQ = prompt('Olympia is the capital city of which U.S. state?'); 
var fourthAnswer = 'washington';
if (fourthQ.toLowerCase() ===  fourthAnswer) {
    correctAnswers += 1;
}

var fifthQ = prompt('Which country financed Christopher Columbus’ 1492 exploration?');
var fifthAnswer = ('spain');
if (fifthQ.toLowerCase() ===  fifthAnswer) {
    correctAnswers += 1;
}

alert('You manage to answer correctly on ' + correctAnswers + ' questions');

if (correctAnswers === 5) {
    alert('You are Unicorn');
} else if (correctAnswers < 5 && correctAnswers >= 3) {
    alert('You have silver crown');
} else if (correctAnswers < 3 && correctAnswers > 0) {
    alert('You have bronze crown');
} else {
  alert('Boomer, no crown at all');
}