// Do until 4 unique characters and quotes

var characters = JSON.parse(window.localStorage.getItem("characters")) || [];
var quotes = JSON.parse(window.localStorage.getItem("quotes")) || [];

console.log(quotes);
console.log(characters);
var totalPoints = 3
$.ajax({
url: "https://thesimpsonsquoteapi.glitch.me/quotes?count=25",
method: "GET"
}).then(function(response) {
    for(var z = 0; z <10; z++){
        console.log(response[z].character);
        var speaker = response[z].character;
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


window.localStorage.setItem("characters", JSON.stringify(characters));
window.localStorage.setItem("quotes", JSON.stringify(quotes));

// Display character on button
for(var i = 0; i<5; i++){
    var buttons = "#button-" + JSON.stringify(i);
    console.log(buttons)
    $(buttons).text(characters[characters.length-i]);
}

// Display Quote at top

$("#quote-here").text(quotes[quotes.length-3]);

// Display character on button randomly


});

//}
//while(characters.length < 5);

// totalPoints++ everytime correct awnser