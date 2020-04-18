// Do until 4 unique characters and quotes


// pull quote

var quote = "https://thesimpsonsquoteapi.glitch.me/quotes";

$.ajax({
    url: quote,
    method: "GET"
  }).then(function(response) {
    console.log(quote);
    console.log(response);
    console.log(response[0].character);
    console.log(response[0].quote);
  });

// check unique character and quote


// Display character on button


// Display character on button randomly


