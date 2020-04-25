
// // Do until 4 unique characters and quotes

// var characters = JSON.parse(window.localStorage.getItem("characters")) || [];
// var quotes = JSON.parse(window.localStorage.getItem("quotes")) || [];

// console.log(quotes);
// console.log(characters);

// $.ajax({
// url: "https://thesimpsonsquoteapi.glitch.me/quotes?count=25",
// method: "GET"
// }).then(function(response) {
//     for(var z = 0; z <10; z++){
//         console.log(response[z].character);
//         var speaker = response[z].character;
//         var quotetext = response[z].quote;

//         // check unique character and quote

//         for(var i = 0; i < 10; i++){    
//             if(quotes.indexOf(quotetext) === -1){
//                 if(characters.indexOf(speaker) === -1){
//                     characters.push(response[z].character);
//                     quotes.push(response[z].quote);
//                 }
//             }
//         }
//     }
// console.log(quotes);
// console.log(characters);


// window.localStorage.setItem("characters", JSON.stringify(characters));
// window.localStorage.setItem("quotes", JSON.stringify(quotes));

// // Display character on button
// for(var i = 0; i<5; i++){
//     var buttons = "#button-" + JSON.stringify(i);
//     console.log(buttons)
//     $(buttons).text(characters[characters.length-i]);
// }

// // Display Quote at top

// $("#quote-here").text(quotes[quotes.length-3]);

// // Display character on button randomly


// });

// //}
// //while(characters.length < 5);

// // totalPoints++ everytime correct awnser
var questionIndex = 0
var correctAnswer = []
var totalPoints = 0 

$("#start-btn").on("click", function () {
    displayquestion()
    questionIndex = 0

})

$(".answer").on("click", function () {
    var clicked = $(this).val()
    console.log(clicked)
    var acutalName = correctAnswer[questionIndex]
    console.log(acutalName)
    console.log(questionIndex)
    console.log(correctAnswer)
    if (clicked == acutalName) {
        console.log("correct")
        totalPoints++;
        displayquestion()
    } else {
        console.log("wrong")
        displayquestion()
    }
    questionIndex++;
    if (questionIndex == 4) {
        $("#user-input-modal").attr("class", "is-active")
    }
})
function displayquestion() {




$(document).ready(function(){
// Do until 4 unique characters and quotes


var totalPoints=0;


var characters = JSON.parse(window.localStorage.getItem("characters")) || [""];
var quotes = JSON.parse(window.localStorage.getItem("quotes")) || [""];




    $.ajax({

    url: "https://thesimpsonsquoteapi.glitch.me/quotes?count=10",
    method: "GET"
    }).then(function(response) {
        for(var z = 0; z <25; z++){
            //console.log(response[z].character);
            var speaker = response[z].character;
            var quotetext = response[z].quote;

            //console.log(speaker);
        
            // check unique character and quote

            for(var i = 0; i < 11; i++){    
                if(quotes.indexOf(quotetext) === -1){
                    if(characters.indexOf(speaker) === -1){
                        characters.push(response[z].character);
                        quotes.push(response[z].quote);
                    }

                }
            }
        }

//console.log(quotes);
//console.log(characters);


    $.ajax({

        url: "https://thesimpsonsquoteapi.glitch.me/quotes?count=25",
        method: "GET"
    }).then(function (response) {
        // console.log(response)
        var randomNum = Math.floor(Math.random() * 9)



        var quoteResponse = response[randomNum].quote
        var quoteChar = response[randomNum].character
        console.log(quoteChar)
        correctAnswer.push(quoteChar);
       
        $("#quote-here").text(quoteResponse)
        for (let i = 1; i < 6; i++) {
            var qnum = Math.floor(Math.random() * 9);
            var returnedName = response[qnum].character
            var oldI = i - 1
            var btn1val = $("#button-1").val()
            var btn2val = $("#button-2").val()
            var btn3val = $("#button-3").val()
            var btn4val = $("#button-4").val()


            
            // will sometimes not place an answer on a button and still have duplicates 
            if (returnedName === btn1val || returnedName === btn2val || returnedName === btn3val || returnedName === btn4val) {
                $("#button-" + oldI).text(response[(qnum + 1)].character).attr("value", response[qnum + 1].character);
                // $("#button-" + oldI).text("dup").val(response[qnum + 1].character);
                var test = $("#button-" + i).val();
                // console.log("value dup test", test)
            } else {
                $("#button-" + i).text(response[qnum].character).attr("value", response[qnum].character);

                // var elsetest = $("#button-" + i).val();
                // if (quoteChar !== btn1val || quoteChar !== btn2val || quoteChar !== btn3val || quoteChar !== btn4val) {
                //     $("#button-" + correctNum).text(quoteChar);
                //     console.log("changed to correct", quoteChar)
                // }
                

            }


// Display character on button
//for(var i = 0; i<5; i++){
    //var buttons = "#button-" + JSON.stringify(i);
   // console.log(buttons)
    //$(buttons).text(characters[characters.length-i]);
//}


            
            // will sometimes not place an answer on a button and still have duplicates 
            if (returnedName === btn1val || returnedName === btn2val || returnedName === btn3val || returnedName === btn4val) {
                $("#button-" + oldI).text(response[(qnum + 1)].character).attr("value", response[qnum + 1].character);
                // $("#button-" + oldI).text("dup").val(response[qnum + 1].character);
                var test = $("#button-" + i).val();
                // console.log("value dup test", test)
            } else {
                $("#button-" + i).text(response[qnum].character).attr("value", response[qnum].character);

                // var elsetest = $("#button-" + i).val();
                // if (quoteChar !== btn1val || quoteChar !== btn2val || quoteChar !== btn3val || quoteChar !== btn4val) {
                //     $("#button-" + correctNum).text(quoteChar);
                //     console.log("changed to correct", quoteChar)
                // }
                

//$("#quote-here").text(quotes[quotes.length-3]);


            }



        };
        // console.log(correctAnswer[0])
        // console.log("btn1", btn1val);
        // console.log("btn2", btn2val)
        // console.log("btn3", btn3val)
        // console.log("btn4", btn4val)


        var correctNum = Math.floor(Math.random() * 4);
        // sometimes will run even though the answer is already a value of a button
        if (quoteChar !== btn1val || quoteChar !== btn2val || quoteChar !== btn3val || quoteChar !== btn4val) {
            $("#button-" + correctNum).text(quoteChar).attr("value", quoteChar);
            // console.log("changed to correct", quoteChar)
        }


        // var correctNum = Math.floor(Math.random()*4)


        // $("#button-" + correctNum).text(quoteChar);

    });
};

//}




        };
        // console.log(correctAnswer[0])
        // console.log("btn1", btn1val);
        // console.log("btn2", btn2val)
        // console.log("btn3", btn3val)
        // console.log("btn4", btn4val)


        var correctNum = Math.floor(Math.random() * 4);
        // sometimes will run even though the answer is already a value of a button
        if (quoteChar !== btn1val || quoteChar !== btn2val || quoteChar !== btn3val || quoteChar !== btn4val) {
            $("#button-" + correctNum).text(quoteChar).attr("value", quoteChar);
            // console.log("changed to correct", quoteChar)
        }


        // var correctNum = Math.floor(Math.random()*4)

        // $("#button-" + correctNum).text(quoteChar);


    });
};

  function questionClick(correct, buttons){
      //console.log(currentQuestionIndex);
    var btn = $(buttons).val();
    console.log("btn click", btn);
      if(btn !== correct){
          //incorrect;
          var wrong=0;
          wrong=wrong+1;
      }
      else{
          //correct
          totalPoints=totalPoints+1;
          //console.log("points", totalPoints);
      }
      console.log("points", totalPoints);
      //console.log("correct",correct);
      currentQuestionIndex=currentQuestionIndex+1;
      console.log("# Q", currentQuestionIndex);

      if (currentQuestionIndex > 4) {
        quizEnd();
      } else {
        getQuestion();
      }
  }

  function quizEnd(){
      var quotes = [];
      var characters = [];

  }


$("#start-btn").click(function(){getQuestion()});

});


