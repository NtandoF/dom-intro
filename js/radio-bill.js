// get a reference to the sms or call radio buttons
var callTotalElems = document.querySelector('.callTotalTwo');
var smsTotalElems = document.querySelector(".smsTotalTwo")
var totalCostElems = document.querySelector(".totalTwo")
//get a reference to the add button
var radioBillAddBtn = document.querySelector('.radioBillAddBtn')
//create a variable that will keep track of the total bill

var billItemTypeRadio = document.querySelector('.billItemTypeRadio')
//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
var faactory = TextBillFactory()

function checkedRadioBtn(){
  var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
  if (checkedRadioBtn){
     var billItemType = checkedRadioBtn.value
     faactory.TBTotal(billItemType);

    }

        callTotalElems.innerHTML = faactory.GCall();
        smsTotalElems.innerHTML = faactory.GSms();
        var totalCosts = faactory.GTotal();
        totalCostElems.innerHTML = totalCosts.toFixed(2)

    //color the total based on the criteria
    if (totalCosts >= 50){
        // adding the danger class will make the text red
        totalCostElems.classList.add("danger");
    }
    else if (totalCosts >= 30){
        totalCostElems.classList.add("warning");
    }
}


radioBillAddBtn.addEventListener('click', checkedRadioBtn)// get a reference to the sms or call radio buttons

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
