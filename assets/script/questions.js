// Do until 4 unique characters and quotes

    var characters = [""];
    var quotes = [""];

//for(var i = 0; i < 5; i++){
//do{
// pull quote

$.ajax({
    url: "https://thesimpsonsquoteapi.glitch.me/quotes?count=25",
    method: "GET"
  }).then(function(response) {
        for(var z = 0; z <10; z++){
            console.log(response[z].character);
            var speaker = response[z].character;
            console.log(response[z].quote);
            var quotetext = response[z].quote;
        
            // check unique character and quote

            for(var i = 0; i < 10; i++){    
                if(quotes.indexOf(quotetext) === -1){
                    if(characters.indexOf(speaker) === -1){
                        characters.push(response[z].character);
                        quotes.push(response[z].quote);
                    }
                }
            }
        }
    console.log(quotes);
    console.log(characters);

    //Keep track of correct answers
    var count=0
    console.log(count)

    var correctAnswer = Math.floor(Math.random()* (9 - 1) + 1);

    function incorrectAnswer (){
    var wrongAnswer = Math.floor(Math.random()* (9- 1) + 1)   
        return wrongAnswer;  
    }
    if (correctAnswer=wrongAnswer){
        wrongAnswer+1}
    console.log(incorrectAnswer())

    console.log(correctAnswer)
    //Display quote
    $('#char-quote').text(quotes[correctAnswer])

    // Display character on button
    $('#answer1').text(characters[correctAnswer]).attr('value','correct')
    $('#answer2').text(characters[incorrectAnswer()])
    $('#answer3').text(characters[incorrectAnswer()])
    $('#answer4').text(characters[incorrectAnswer()])
    
    //update score if correct
    $( "button[value*='correct']").click(function(){
    count=count+1
    console.log(count)
    });

});
//}
//while(characters.length < 5);

// totalPoints++ everytime correct awnser