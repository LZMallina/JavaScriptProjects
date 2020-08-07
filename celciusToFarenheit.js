const scale = document.getElementById('scale');//allow the computer to receive the values from dropdown

function convert() {
    if (scale.value === 'celcius') {   //if the dropdown selected contain the value string celcius then activate the function
        let temp = document.getElementById('value').value;
        let fahrenheit = Math.floor(temp * 1.8 + 32);
        document.getElementById('Result').innerHTML = `Your temperature in Fahrenheit is ${fahrenheit}.`;
    } else {
        let temp = document.getElementById('value').value;
        let celcius = Math.floor((temp - 32) / 1.8);
        document.getElementById('Result').innerHTML = `Your temperature in Celcius is ${celcius}.`;
    }
}