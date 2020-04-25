jQuery.ajaxPrefilter(function (options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});
// set score to our default image and update on completion of game
var score = "random"

var totalPoints = 1



function displayScore() {
    score = ""
    switch (totalPoints) {
        case 4:
            score = "phGElmSM4P0sg"
            // phGElmSM4P0sg
            break;
        case 3:
            score = "26ybwvTX4DTkwst6U"
            break;
        case 2:
            score = "18ANhgTABn04M"
            break;
        case 1:
            score = "2rtQMJvhzOnRe"
            break;
        default:
            score = "3orifdDjuKKtwQ2p4Q"
            break;
    }
}

displayScore()
// this link searches random gifs based off tags
// var simpsonsurl = "api.giphy.com/v1/gifs/random?tag=simpsons+" + score + "&api_key=Rpk0iiKiEri4SFv9B1aOmJlCb0UllXnN&pg-13"
// this link returns the top results for keywords
// var simpsonsurl = "api.giphy.com/v1/gifs/search?q=" + score + "+simpsons&api_key=Rpk0iiKiEri4SFv9B1aOmJlCb0UllXnN"
// this link gets the gif by ID 
var simpsonsurl = "api.giphy.com/v1/gifs/" + score + "?api_key=Rpk0iiKiEri4SFv9B1aOmJlCb0UllXnN"
$.ajax({
    url: simpsonsurl,
    method: "GET",
    crossDomain: true
})
    .then(function (response) {
        console.log(response)
        $("#gifDiv").attr("src", response.data.images.original.url)



    });
