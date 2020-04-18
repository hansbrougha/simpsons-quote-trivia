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
