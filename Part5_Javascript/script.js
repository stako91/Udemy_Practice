var secretNumber = Math.floor(Math.random() * 10) + 1;

do {
    var guessNumber = prompt("Guess between 1-10:");
}while(isNaN(guessNumber) || guessNumber > 10 || guessNumber < 1);

if (secretNumber - Number(guessNumber) === 0) {
    alert("GZ EMBER MEGVAN, A SZÁM: " + secretNumber);
} else if (secretNumber - Number(guessNumber) < 0) {
    alert("TUL NAGYOT TIPPELTÉL, A SZÁM: " + secretNumber);
} else {
    alert("KICSIT TIPPELTÉL, A SZÁM: " + secretNumber);
}

//--------------------VALAMIÉRT NEM MEGY....----------

// var result = secretNumber - guessNumber;

// switch(result) {
//     case (result === 0):
//         alert("GZ EMBER MEGVAN, A SZÁM: " + secretNumber);
//         console.log("szeeeep");
//         break;
//     case (result < 0):
//         alert("Túl nagyot tippeltél :(, a szám ami volt: " + secretNumber);
//         console.log("nagyot tippeltél ember");
//         break;
//     case (result > 0):
//         alert("Túl kicsit tippeltél :(, a szám ami volt: " + secretNumber);
//         console.log("kicsit tippeltél");
//         break;
// }