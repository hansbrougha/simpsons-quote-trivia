<<<<<<< Updated upstream
var startBtn = $('#start-btn')

//removes start page div
startBtn.click(function(){
$('#start-page').attr("style","display: none")
})

//displays high score modal
highScoreModal =  $('.modal')
$(".is-info").click(function(){
    highScoreModal.addClass("is-active")
})

//removes high score modal
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
