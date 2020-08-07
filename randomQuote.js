//Challenge: create an array of quotes (6 max) that are retrieved when a button is pressed.   Quotes generated using Imediate Invoke Function Expression (IIFE)


//create a Array of quotes
let quotes = [
    ' "Be yourself; everyone else is already taken. " - Oscar Wilde',
 ' "Be the change that you wish to see in the world." - Mahatma Gandhi',
' "No one can make you feel inferior without your consent." -  Eleanor Roosevelt, This is My Story',
' "Imperfection is beauty, madness is genius and it\'s better to be absolutely ridiculous than absolutely boring." - Marilyn Monroe',
'"Live as if you were to die tomorrow. Learn as if you were to live forever." - Mahatma Gandhi',
' "It is never too late to be what you might have been." - George Eliot'
];

(function () {
    document.getElementById("thebutton").onclick = function () {
        document.getElementById("randomQuote").innerHTML = quotes[Math.floor(Math.random(quotes.length) * 5)];
    }
})();

//IIFE is a self invoke function that does not require anything to invoke it.  However, if you want to control when the function is invoked, you need to create a button that would invoke a regular function inside the IIFE.

