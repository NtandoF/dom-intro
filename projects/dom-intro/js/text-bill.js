
var billTypeText = document.querySelector(".billTypeText")
var callTotalElem = document.querySelector(".callTotalOne")
var smsTotalElem = document.querySelector(".smsTotalOne")
var totalCostElem = document.querySelector(".totalOne")
//get a reference to the add button
var addToBillBtn = document.querySelector(".addToBillBtn")
//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

var factory = TextBillFactory();

function textBillTotalDom(){
factory.TBTotal (billTypeText.value);

        callTotalElem.innerHTML = factory.GCall();
        smsTotalElem.innerHTML = factory.GSms();
        var totalCost = factory.GTotal();
        totalCostElem.innerHTML = totalCost.toFixed(2)

    //color the total based on the criteria
    if (totalCost >= 50){
        // adding the danger class will make the text red
        totalCostElem.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalCostElem.classList.add("warning");
    }
  }


addToBillBtn.addEventListener('click', textBillTotalDom)
// get a reference to the textbox where the bill type is to be entered

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
