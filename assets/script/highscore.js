$("#submitName").on("click", function () {
    // get value of input box
    var name = $("#userName").val().trim();
    // make sure value wasn't empty
    if (name !== "") {
        // get saved scores from localstorage, or if not any, set to empty array
        console.log("inside")
        var highscores =
            JSON.parse(window.localStorage.getItem("highscores")) || [];

        // format new score object for current user
        var newScore = {
            score: totalPoints,
            playerName: name
        };

        // save to localstorage
        highscores.push(newScore);
        window.localStorage.setItem("highscores", JSON.stringify(highscores));

        printHighscores()
    }

});

function printHighscores() {
    // either get scores from localstorage or set to empty array
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    $("#high-score-list").empty();
    // sort highscores by score property in descending order
    highscores.sort(function (a, b) {
        return b.score - a.score;
    });

    highscores.forEach(function (score) {
        // create li tag for each high score
        
        var liTag = document.createElement("li");
        liTag.textContent = score.playerName + " - " + score.score;

        // display on page
        var olEl = document.getElementById("high-score-list");
        olEl.appendChild(liTag);
    });
}