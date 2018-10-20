// Number between 1 to 10
var secretNumber = Math.floor(Math.random() * 100) + 1;
var guessNumber;

// Check the guessNumber with secretNumber
function check(e) {
    if (e.keyCode === 13) {
        guessNumber = document.getElementById("txtTip").value;
        if (secretNumber - Number(guessNumber) === 0) {
            document.getElementById("txtInfo").innerHTML = "GZ EMBER! A szám " + secretNumber + " volt.";
            stopGame();
        } else if (secretNumber - Number(guessNumber) < 0) {
            document.getElementById("txtInfo").innerHTML = "Lower";
        } else {
            document.getElementById("txtInfo").innerHTML = "Higher";
        }

        document.getElementById("txtTip").value = "";
        document.getElementById("previousTips").innerHTML += guessNumber + ", ";
    }
}

// Timer
function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("timerText").innerHTML = t;
}

// Stop timer
function myStopFunction() {
    clearInterval(myVar);
}

// Start game
function startGame() {
    document.getElementById("btnStart").disabled = true;
    document.getElementById("btnStop").disabled = false;
    document.getElementById("txtTip").disabled = false;
    document.getElementById("txtTip").focus();
    document.getElementById("txtInfo").innerHTML = "";
    setInterval(myTimer, 10);
}

// Stop game
function stopGame() {
    document.getElementById("btnStop").disabled = true;
    document.getElementById("btnStart").disabled = false;
    document.getElementById("txtTip").disabled = true;
    document.getElementById("txtTip").value = "";
    myStopFunction();
}