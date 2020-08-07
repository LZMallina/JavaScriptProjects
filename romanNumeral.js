//add Event listener
document.getElementById("numButton").addEventListener("click", convertToRoman);

/*Build a library.  Then subtract num from the number in the library, then add the numeral to the string */

function convertToRoman() {

    let num = document.getElementById("number").value;
    let roman = "";
    let numeral = {
        "M": 1000, "CM": 900, "D": 500, "CD": 400, "C": 100, "XC": 90, "L": 50, "XL": 40, "X": 10, "IX": 9, "V": 5, "IV": 4, "I": 1
    };
    if (num > 3999) {
        return document.getElementById("ansTwo").innerHTML = "The largest number  that can be represented in roman numeral is 3,999."
    } else {
        for (var value in numeral) {

            while (num >= numeral[value]) {
                roman = roman + value;
                num = num - numeral[value]
            }
        }
    }
    return document.getElementById("answer").innerHTML = roman;
}




