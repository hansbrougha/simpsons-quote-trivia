$(document).ready(function(){
// Do until 4 unique characters and quotes


var characters = JSON.parse(window.localStorage.getItem("characters")) || [""];
var quotes = JSON.parse(window.localStorage.getItem("quotes")) || [""];

var currentQuestionIndex = 1;
//console.log(currentQuestionIndex);

//console.log(quotes);
//console.log(characters);

for(var i = 0; i < 6; i++){
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


window.localStorage.setItem("characters", JSON.stringify(characters));
window.localStorage.setItem("quotes", JSON.stringify(quotes));


// Display character on button
//for(var i = 0; i<5; i++){
    //var buttons = "#button-" + JSON.stringify(i);
   // console.log(buttons)
    //$(buttons).text(characters[characters.length-i]);
//}

// Display Quote at top

//$("#quote-here").text(quotes[quotes.length-3]);

// Display character on button randomly


});

//}

  //while(characters.length < 5);
  //console.log(Math.floor(Math.random()*4))
  // totalPoints++ everytime correct awnser

  function getQuestion(){
      var currentQuestion = quotes[currentQuestionIndex];
      //console.log(currentQuestion);
      //console.log(currentQuestionIndex);
      // change quesition text

      var random = Math.floor(Math.random()*4);

      // Get correct answer
      var correct = characters[4*currentQuestionIndex-random];
      console.log(correct);
      //console.log("correct", correct);

      $("#quote-here").text(quotes[4*currentQuestionIndex - random]);
        console.log("quote", quotes[4*currentQuestionIndex - random])
    // display options per question

    for(var i = 1; i<5; i++){
        var buttons = "#button-" + JSON.stringify(i);
        //console.log(buttons)
        $(buttons).text(characters[currentQuestionIndex*i]);
        //console.log(characters[4*currentQuestionIndex+i]);
        console.log("button text", characters[(currentQuestionIndex*i)]);
        $(buttons).click(function(){questionClick(correct)});
    }
  }

  function questionClick(correct){
      //console.log(currentQuestionIndex);
      if(this.value !== correct){
          //incorrect;
          var wrong=0;
          wrong=wrong+1;
      }
      else{
          //correct
          var totalPoints=0;
          totalPoints=totalPoints+1;
          console.log("points", totalPoints);
      }
      console.log("correct",correct);
      currentQuestionIndex=currentQuestionIndex+1;
      console.log(currentQuestionIndex);

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