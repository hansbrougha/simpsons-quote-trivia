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

    // Display character on button

    

    // Display character on button randomly

});
//}
//while(characters.length < 5);

// totalPoints++ everytime correct awnser