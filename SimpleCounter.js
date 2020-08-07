/*Solution posted on by Romeo Jeremiah used forEach(), classList, and contains() method.  The contains() method is a boolean function.
I was not able to make use of it to run a much needed if/else statment.  The challenge was completed using a simple passing of argument as the string "up" and "down".  Without additional math, the subtraction does not happen until it passed one more round of addition.  Therefore, math was added*/

let x = 0;
function Count(arg) {
    if (arg === 'up') {
        var y = 0;
        x++;
        y = x + y;
        document.getElementById("counter").innerHTML = y++;
    } else {
        var y = 0;
        x--;
        y = x - y;
        document.getElementById("counter").innerHTML = y--;
    }
}
/*Second part of the challenge is to change the color of the number when positive vs. negative. X is a global variable and that can be use in a separate function.  We cannot have the number change and the color change in the same function because we only want color change when it is negative*/

function Simple() {
    if (x > 0) {
        document.getElementById("counter").style.color = "green";
    } else if (x < 0) {
        document.getElementById("counter").style.color = "red";
    } else {
        document.getElementById("counter").style.color = "blue";
    }
}