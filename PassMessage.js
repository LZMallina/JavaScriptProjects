const myFunc = () => document.getElementById("myMessage").value;
//assigned the variable myFunc to a function that would detect the value in the text box

//add event listener to allow the button to activate the function short handed by ()=>
document.getElementById("button").addEventListener("click", ()=> {
    document.getElementById("Message").innerHTML = myFunc();
});