"use strict;"

function update_rate() {
    // get range slider value
    var rate_val = document.getElementById("rate").value;
    // update and show rate value
    document.getElementById("rate_val").innerText = rate_val + "%";
}

function compute() {

    // get principal value from input
    var principal = document.getElementById("principal").value;
    // check if input principal value is zero, negative or not a number
    if (isNaN(principal) || principal <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").value = null;
        document.getElementById("principal").focus();
    }
    else {
        // convert principal value from string to float
        principal = parseFloat(principal);

        // retrieve rate and no of years input
        var rate = document.getElementById("rate").value;
        var years = parseInt(document.getElementById("years").value);

        // calculate interest rate
        var interest = principal * years * (rate / 100);

        // get current year value, and then add no of years interest if computed for
        var year = new Date().getFullYear() + years;

        // show final result
        document.getElementById("result").innerHTML = `If you deposit \<span class='highlight'\>${principal}\<\/span\>,\<br\> at an interest rate of \<span class='highlight'\>${rate}%\<\/span\>.\<br\> You will receive an amount of \<span class='highlight'\>${interest.toFixed(2)}\<\/span\>,\<br\> in the year \<span class='highlight'\>${year}\<\/span\>`;
    }
    
}
