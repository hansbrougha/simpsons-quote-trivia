$(document).ready(function(){
// Do until 4 unique characters and quotes

var totalPoints=0;

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
}

console.log("quotes", quotes);
console.log("characters", characters);


//}

  //while(characters.length < 5);
  //console.log(Math.floor(Math.random()*4))
  // totalPoints++ everytime correct awnser

  function getQuestion(){
    var currentQuestion = quotes[currentQuestionIndex];
    //console.log(currentQuestion);
    console.log(currentQuestionIndex);
    // change quesition text

    var random = Math.floor(Math.random()*4)+1;
    console.log("random", random);

    // Get correct answer
    var correct = characters[currentQuestionIndex+ random];
    console.log("correct", correct);

    $("#quote-here").text(quotes[currentQuestionIndex + random]);
    console.log("quote", quotes[currentQuestionIndex + random])

    // Display correct answer
    // display options per question

    for(var i = 1; i<5; i++){
        var buttons = "#button-" + JSON.stringify(i);
        //console.log(buttons)
        $(buttons).text(characters[currentQuestionIndex*i]);
        //console.log(characters[4*currentQuestionIndex+i]);
        //console.log("button text", characters[(currentQuestionIndex*i)]);
        $(buttons).val(characters[currentQuestionIndex*i]);
        
        //console.log("$(buttons).val()", $(buttons).val());
    
    }

    check(correct, buttons, random);
    console.log("#button-1", $("#button-1").val());
    console.log("#button-2", $("#button-2").val());
    console.log("#button-3", $("#button-3").val());
    console.log("#button-4", $("#button-4").val());

    $(".button").click(function(){questionClick(correct, buttons)});
  }

  

    function check(correct, buttons, random){
        // if a buttons text is equal to correct do not change other buttons to correct
  
        if($("#button-1").val() !== correct || $("#button-2").val() !== correct || $("#button-3").val() !== correct || $("#button-4").val() !== correct){
            var buttons = "#button-" + random;
            $(buttons).text(correct);
            $(buttons).val(correct);
            // why does this change no matter if correct is already on
        }
    }

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
    $("#user-input-modal").attr("class", "is-active")
  }


$("#start-btn").click(function(){getQuestion()});

});