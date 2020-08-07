const diceImage = [
    "diceOne.png",
    "diceTwo.png",
    "diceThree.png",
    "diceFour.png",
    "diceFive.png",
    "diceSix.png",
    "BigX.png"
];
/*randomly select the array dice. Math.random() generate a random number between 0 and 1.  Math.floor make it into whole number.  The below equation generate an diceImage[diceImage.length]*/

function rollDice() {
    let random = Math.floor(Math.random() * 7);
    let diceRoll = diceImage[random];
    switch (random) {
        case 1: case 3: case 5:
            document.getElementById('picture').src = diceRoll;
            document.getElementById('message').innerHTML = "You Win &#128516;"
            break;
        case 0: case 2: case 4:
            document.getElementById('picture').src = diceRoll;
            document.getElementById('message').innerHTML = "You lose &#128549";
            break;
        default:
            document.getElementById('picture').src = diceRoll;
            document.getElementById('message').innerHTML = "You need to role the dice! &#128561;";
    }
}
