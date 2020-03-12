//======================================================
// calcSub. 
// Main function called from HTML.
// Calculates basic service cost.
// Calls calcVatTotal to get Vat and Discount amounts.
//========================================================

function calcSub()  {
	var cost_prices = new Array();
	cost_prices["Iaas"]=500;
	cost_prices["Saas"]=450;
	cost_prices["Paas"]=600;

	var costRadio = document.getElementsByName('options');

	for (i=0; i < costRadio.length; i++) {
		if (costRadio[i].checked) {
			servType = costRadio[i].value;
	    }
	    }
        var argSelection = cost_prices[servType];
		
	var argvatAmt = calcVatTotal(argSelection, servType); 
}

//======================================================
// calcVatTotal.
// Calculates Vat and Discount.
// Calls calcDisp to display full cost breakdown.
//========================================================
function calcVatTotal(parmSelection, servType)
{	
	var argvatAmt = parmSelection * .21;

      	var argdiscountAmt = parmSelection * -.1;

	var argtotalPrice = parmSelection + argvatAmt + argdiscountAmt;
	calcDisp(parmSelection, argvatAmt, argdiscountAmt, argtotalPrice, servType);
}

//======================================================
// calcDisp.
// Displays the full cost breakdown.
//========================================================
function calcDisp(parmSelection, parmvatAmt, parmdiscountAmt, parmtotalPrice, servType)
{	
	document.getElementById("E-Business").innerHTML = "<p class = \"cost\"> <b>Cost of Selected Service (" + servType + ") = " + parmSelection + "<br/>" + 
			"Vat amount (21%) = " + parmvatAmt + "<br/>" + "Introductory Discount (10%) = " + parmdiscountAmt + "<br/>" +
			"Total Cost of Service = " + parmtotalPrice +"</b> </p>"; 
}
//========================================================================