// Questions------------------->>>>
$(document).ready(function() {

$("#start").on("click", function (){
    firstQuestion();
    right = 0;
    wrong = 0;
    unanswered = 0;
    })

$("#restart").on("click", function (){
    firstQuestion();
    right = 0;
    wrong = 0;
    unanswered = 0;
    })

var questionCount = 0;
var questionsAnswers = [
{
  q: 'Where was the first battle of the Civil War (April 12, 1861?)',
  a: ['Lexington', 'Gettysburg', 'Valley Forge', 'Fort Sumter'],
  ca: 'Fort Sumter',
  image: "Images/sumter.jpg",
},
{
  q: 'This state was the first to officially secede from the Union on December 20th, 1860',
  a: ['Maryland', 'Virginia', 'South Carolina', 'Georgia'],
  ca: 'South Carolina'
},
{
  q: 'Who was the president of the Confederacy?',
  a: ['Stonewall Jackson', 'Jefferson Davis', 'Robert E. Lee', 'George Meade'],
  ca: 'Jefferson Davis'
},
{
  q: 'What was the deadleist battle in the Civil War?',
  a: ['Battle of Gettysburg', 'Battle of Bull Run', 'Battle of Antietam', 'Battle of Shiloh'],
  ca: 'Battle of Gettysburg'
},
{
  q: 'Who was president of the Union throughout the Civil War?',
  a: ['Ulysses S. Grant', 'Abraham Lincoln', 'James Buchanan', 'Andrew Polk'],
  ca: 'Abraham Lincoln'
},
{
  q: 'Which state never hosted a battle throughout the Civil War?',
  a: ['Maryland', 'Tennessee', 'New Jersey', 'North Carolina'],
  ca: 'New Jersey'
},
{
  q: "Which Union Army general lead the 'March to the Sea' which included the burning of Atlanta?",
  a: ['George Mcclellan', 'William Sherman', 'George Custer', 'Joshua Chamberlain'],
  ca: 'William Sherman'
},
{
  q: 'During the final day of battle, this unsuccessful last attack by the Confederacy helped ensure victory for the Union Army at Gettysburg',
  a: ["Longstreet's Rebuttal", "Meade's Surprise", "Lee's Counter", "Pickett's Charge"],
  ca: "Pickett's Charge"
}
];

// Key Variables -------------------->

var right = 0;
var wrong = 0;
var unanswered = 0;

var number = 30;
var intervalId;

// Key Functios --------------------->
// $("#image").attr('src', questionsAnswers[questionCount].image);

function correctAnswer()
  {$("#displayAnswer").text("Correct! The answer is " + questionsAnswers[questionCount].ca);
//   $("#image").text('src', questionsAnswers[questionCount].image);
}


function incorrectAnswer ()
  {$("#displayAnswer").text("Incorrect. The answer is " + questionsAnswers[questionCount].ca);
//   $("#image").attr('src', questionsAnswers[questionCount].image);
}

function decrement() {
number--;
$("#timeDisplay").html("<h2>" + number + "</h2>");
if (number === 0) {
    stop();
    unanswered++;
    $("#displayAnswer").text("Time's up, the answer is: " + questionsAnswers[questionCount].ca);
    setTimeout(nextQuestion, 1000 * 3);
  }}
// else if(clickedButton = questionsAnswers[questionCount].ca){
  // correctAnswer();

// else{$("#displayAnswer").text("Time's up, the answer is: " + questionsAnswers[questionCount].ca)
// };


$("button").click(function() {
    var clickedButton = $(this).val();
    if(clickedButton === questionsAnswers[questionCount].ca){
      correctAnswer();
      stop();
      right++;
      setTimeout(nextQuestion, 1000 * 3);
    }
    else if(clickedButton !== questionsAnswers[questionCount].ca){
      stop();
      incorrectAnswer();
      wrong++;
      setTimeout(nextQuestion, 1000 * 3);
    }

    console.log(right);
    console.log(wrong);
    console.log(unanswered);
    });

function nextQuestion() {
    questionCount++;
    if (questionCount === 8){
    $("#displayAnswer").text("Game Over - Press Start to Play Again")
    $("#right").text("Correct answers: " + right);
    $("#wrong").text("Incorrect answers: " + wrong);
    $("#unanswered").text("Unanswered questions " + unanswered);
    $("#displayQuestion").text("Select START to play again");
    $("#start").show();
    $("#restart").hide();
    $("#timeDisplay").hide();
    $("#unanswered").show();
    $("#right").show();
    $("#wrong").show();
}
    else{displayQuestion()}
    }


function stop() {
clearInterval(intervalId);
}

function run() {
        clearInterval(intervalId);
        number = 30;
        intervalId = setInterval(decrement, 1000);
        $("#displayAnswer").text("");
    }
  

function displayQuestion() {
    $("#displayQuestion").text(questionsAnswers[questionCount].q);
    $("#button1").text(questionsAnswers[questionCount].a[0]);
    $("#button1").val(questionsAnswers[questionCount].a[0]);
    $("#button2").text(questionsAnswers[questionCount].a[1]);
    $("#button2").val(questionsAnswers[questionCount].a[1]);
    $("#button3").text(questionsAnswers[questionCount].a[2]);
    $("#button3").val(questionsAnswers[questionCount].a[2]);
    $("#button4").text(questionsAnswers[questionCount].a[3]);
    $("#button4").val(questionsAnswers[questionCount].a[3]);
    $("#timeDisplay").show();
    run();

}

function firstQuestion() {
    questionCount = 0;
    $("#displayQuestion").text(questionsAnswers[0].q);
    $("#button1").text(questionsAnswers[0].a[0]);
    $("#button1").val(questionsAnswers[0].a[0]);
    $("#button2").text(questionsAnswers[0].a[1]);
    $("#button2").val(questionsAnswers[0].a[1]);
    $("#button3").text(questionsAnswers[0].a[2]);
    $("#button3").val(questionsAnswers[0].a[2]);
    $("#button4").text(questionsAnswers[0].a[3]);
    $("#button4").val(questionsAnswers[0].a[3]);
    $("#start").hide();
    $("#right").hide();
    $("#wrong").hide();
    $("#unanswered").hide();
    $("#timeDisplay").show();
    run();

}
    // if(right + wrong + unanswered === 3){
    // $("#displayAnswer").text("Game Over - Press Restart to Play Again")
    // $("#right-answers").text(right);
    // $("#wrong-answers").text(wrong);
    // $("#unanswered").text(unanswered);}
    // else{};





 

    // // setTimeout(displayQuestion, 1000 * 5);
    // for(var i =0; i<questionsAnswers[questionCount].a.length; i++){
    //     $("#displayAnswers").append('<h1>' + questionsAnswers[i] + '</h1>').attr(data-name)}
    // // }

    // setTimeout(displayQuestion, 1000 * 5);

    
    
  



// // // // // }
//     setTimeout(nextQuestion, 1000 * 10);
//     setTimeout(nextQuestion, 1000 * 15);
// //     nextQuestion();
// //     setTimeout(nextQuestion, 1000 * 15);
  })