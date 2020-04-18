<<<<<<< Updated upstream
var startBtn = $('#start-btn')
highScoreModal =  $('.modal')
$(".is-info").click(function(){
    highScoreModal.addClass("is-active")
})
$(".exit-modal").click(function(){
    highScoreModal.removeClass("is-active")
})
=======
var score= "good"
var simpsonsurl = "http://api.giphy.com/v1/gifs/search?q="+ score +"+simpsonsling&api_key=Rpk0iiKiEri4SFv9B1aOmJlCb0UllXnN"


$.ajax({
    url: simpsonsurl,
    method: "GET"
  })
    // After data comes back from the request
    .then(function(response) {
      console.log(response)
      console.log(response[0].character)
      Rpk0iiKiEri4SFv9B1aOmJlCb0UllXnN
    });
>>>>>>> Stashed changes
