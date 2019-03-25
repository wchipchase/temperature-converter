document.getElementById("convertBtn").addEventListener("click", determineConverter);

const output = document.getElementById("tempOutput");
const clearButton = document.getElementById("clearBtn");
const button = document.getElementById("convertBtn");
const temp = tempInput.value;

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += textToPrint;
}

// T(°C) = (T(°F) - 32) × 5/9
function toCelsius (temp) {
    const finalTemp = (temp - 32) * (5/9);
    output.innerHTML = finalTemp;
    colorOutput("c", finalTemp);
}

// T(°F) = T(°C) × 9/5 + 32
function toFahrenheit (temp) {
    const finalTemp = (temp * (9/5)) + 32;
    output.innerHTML = finalTemp;
    colorOutput("f", finalTemp);
}

// Check output to apply coloring.
function colorOutput (type, value) {
    if ((type === "c" && value > 32) || (type === "f" && value > 90)) {
        document.getElementById("tempOutput").style.backgroundColor= "red";
    } else if ((type === "c" && value < 0) || (type === "f" && value < 32)) {
        document.getElementById("tempOutput").style.backgroundColor="blue";
    } else {
        document.getElementById("tempOutput").style.backgroundColor="green";
    }
}


// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
    const toConvert = document.getElementById("tempInput").value;
    if (document.getElementById("F").checked) {
        toFahrenheit(toConvert);
    } else if (document.getElementById("C").checked) {
        toCelsius(toConvert);
    } else {
        alert("Please select either Fahrenheit or Celsius to convert to.");
    }
}

function clear() {
 output.innerHTML = "";
 document.getElementById("tempInput").value = "";
}



// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);
clearButton.addEventListener("click", clear);