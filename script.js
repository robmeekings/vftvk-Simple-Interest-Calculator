// function to update rate based on slider
function updateRate() {
	// get the rate value from the slider
    var rateval = document.getElementById("rate").value;
	// show the rate in the rate_val span
    document.getElementById("rate_val").innerText=rateval;
}

// function to compute the interest
function compute() {   

	// get the principal value 
	var principal = document.getElementById("principal").value * 1;
	// validate the principal
	if (principal <= 0) {
		// invalid value, tell user 
		alert("Enter a positive number");
		// shift focus
		document.getElementById("principal").focus();
		// leave function
		return;
	}
	
	// get the interest rate
	var rate = document.getElementById("rate").value;

	// get the number of years 
	var years = document.getElementById("years").value;

	// calculate the interest 
	var interest = principal * years * rate /100;

	// calculate the final year
	var year = new Date().getFullYear()+parseInt(years);

	// update the results
	document.getElementById("result").innerHTML="If you deposit "+principal+
		",\<br\>at an interest rate of "+rate+
		"%\<br\>You will receive an amount of "+interest+
		",\<br\>in the year "+year+
		"\<br\>";
}
