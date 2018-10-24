var maxNumber = 100;
var secretNumber;
var guessNumber;
var timer;
var startTime;
var finishTime;
var playerName = "";
var toplistText;
var toplist = [];
var toplistElement = [];

// Check the guessNumber with secretNumber
function check(e) {
    if (e.keyCode === 13) {
        guessNumber = document.getElementById("txtTip").value;
        if (secretNumber - Number(guessNumber) === 0) {
            document.getElementById("txtInfo").innerHTML = "GZ EMBER! A szám " + secretNumber + " volt.";
            // Update toplist html div
            fillTopList();
            stopGame();
        } else if (secretNumber - Number(guessNumber) < 0) {
            document.getElementById("txtInfo").innerHTML = "<i class=\"fas fa-arrow-down\"></i>Lower";
        } else {
            document.getElementById("txtInfo").innerHTML = "<i class=\"fas fa-arrow-up\"></i>Higher";
        }

        document.getElementById("txtTip").value = "";
        document.getElementById("previousTips").innerHTML += guessNumber + ", ";
    }
}

// Timer
function myTimer() {
    var d = new Date();
    finishTime = -1 * (startTime - d.getTime()) / 1000;
    document.getElementById("timerText").innerHTML = "" + finishTime + "s";
}

// Stop timer
function myStopFunction() {
    clearInterval(timer);
}

// Update toplist
function fillTopList() {
    // Update toplist array:
    toplistElement = { name: playerName, time: finishTime };
    toplist.push(toplistElement);
    toplist = toplist.sort(function(a,b){
        return a.time - b.time;
    });

    toplistText = "<ol>";
    toplist.forEach(function(value) {
        toplistText += "<li>" + value.name + "........." + value.time + "</li>";
    });
    toplistText += "</ol>";    

    document.getElementById("toplist").innerHTML = toplistText;
}

// Start game
function startGame() {
    startTime = new Date().getTime();
    secretNumber = Math.floor(Math.random() * maxNumber) + 1;
    document.getElementById("maxNumber").innerHTML = "Your tip (1-" + maxNumber + ")";
    document.getElementById("btnStart").disabled = true;
    document.getElementById("btnStop").disabled = false;
    document.getElementById("txtTip").disabled = false;
    document.getElementById("txtTip").focus();
    document.getElementById("txtInfo").innerHTML = "";
    document.getElementById("previousTips").innerHTML = "";
    playerName = document.getElementById("playerName").value;
    document.getElementById("playerName").disabled = true;
    timer = setInterval(myTimer, 100);
}

// Stop game
function stopGame() {
    document.getElementById("btnStop").disabled = true;
    document.getElementById("btnStart").disabled = false;
    document.getElementById("txtTip").disabled = true;
    document.getElementById("txtTip").value = "";
    document.getElementById("playerName").disabled = false;

    //Stop Timer
    myStopFunction();
}