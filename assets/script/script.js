var startBtn = $('#start-btn')
highScoreModal =  $('.modal')
$(".is-info").click(function(){
    highScoreModal.addClass("is-active")
})
$(".exit-modal").click(function(){
    highScoreModal.removeClass("is-active")
})
