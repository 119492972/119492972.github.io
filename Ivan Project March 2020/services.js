var cost_prices = new Array();
cost_prices["Round1"]=500
cost_prices["Round2"]=450
cost_prices["Round3"]=600


var Extras = new Array();
extra["none"]=0
extra["security"]=45
extra["support"]=75
extra["on-site support"]=2000

function getCostPrice ()
{
	var CostPrice=0
	var theForm =Ebus.1html["business form"];
    var selectedService = theForm.elements["selectedService"]
	selectedService.length =3
	for(var i = 0; i < selectedService.length; i++)
		
{   
    if(selectedService[i].checked)
}
return selectedServicePrice

function getExtraPrices