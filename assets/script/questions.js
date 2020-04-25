// // totalPoints++ everytime correct awnser
var questionIndex = 0;
var correctAnswer = [];
var totalPoints = 0;

$("#start-btn").on("click", function () {
  displayquestion();
  questionIndex = 0;
});

$(".answer").on("click", function () {
  var clicked = $(this).val();
  console.log(clicked);
  var acutalName = correctAnswer[questionIndex];
  console.log(acutalName);
  console.log(questionIndex);
  console.log(correctAnswer);
  if (clicked == acutalName) {
    console.log("correct");
    totalPoints++;
    displayquestion();
  } else {
    console.log("wrong");
    displayquestion();
  }
  questionIndex++;
  if (questionIndex == 4) {
    $("#user-input-modal").attr("class", "is-active");
  }
});
function displayquestion() {
  $.ajax({
    url: "https://thesimpsonsquoteapi.glitch.me/quotes?count=25",
    method: "GET",
  }).then(function (response) {
    var randomNum = Math.floor(Math.random() * 9);

    var quoteResponse = response[randomNum].quote;
    var quoteChar = response[randomNum].character;
    console.log(quoteChar);
    correctAnswer.push(quoteChar);

    $("#quote-here").text(quoteResponse);
    for (let i = 1; i < 6; i++) {
      var qnum = Math.floor(Math.random() * 9);
      var returnedName = response[qnum].character;
      var oldI = i - 1;
      var btn1val = $("#button-1").val();
      var btn2val = $("#button-2").val();
      var btn3val = $("#button-3").val();
      var btn4val = $("#button-4").val();

      // will sometimes not place an answer on a button and still have duplicates
      if (
        returnedName === btn1val ||
        returnedName === btn2val ||
        returnedName === btn3val ||
        returnedName === btn4val
      ) {
        $("#button-" + oldI)
          .text(response[qnum + 1].character)
          .attr("value", response[qnum + 1].character);

        var test = $("#button-" + i).val();
        // console.log("value dup test", test)
      } else {
        $("#button-" + i)
          .text(response[qnum].character)
          .attr("value", response[qnum].character);
      }

      if (
        returnedName === btn1val ||
        returnedName === btn2val ||
        returnedName === btn3val ||
        returnedName === btn4val
      ) {
        $("#button-" + oldI)
          .text(response[qnum + 1].character)
          .attr("value", response[qnum + 1].character);
        var test = $("#button-" + i).val();
      } else {
        $("#button-" + i)
          .text(response[qnum].character)
          .attr("value", response[qnum].character);
      }
    }

    var correctNum = Math.floor(Math.random() * 4);
    if (
      quoteChar !== btn1val ||
      quoteChar !== btn2val ||
      quoteChar !== btn3val ||
      quoteChar !== btn4val
    ) {
      $("#button-" + correctNum)
        .text(quoteChar)
        .attr("value", quoteChar);
    }
  });
}

function questionClick(correct, buttons) {
  var btn = $(buttons).val();
  console.log("btn click", btn);
  if (btn !== correct) {
    //incorrect;
    var wrong = 0;
    wrong = wrong + 1;
  } else {
    //correct
    totalPoints = totalPoints + 1;
  }
  console.log("points", totalPoints);
  currentQuestionIndex = currentQuestionIndex + 1;
  console.log("# Q", currentQuestionIndex);

  if (currentQuestionIndex > 4) {
    quizEnd();
  } else {
    getQuestion();
  }
}

function quizEnd() {
  var quotes = [];
  var characters = [];
}
