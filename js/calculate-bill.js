//get a reference to the calculate button
var calculateButt = document.querySelector(".calculateBtn")
//get a reference to the billTotal element
var billTotalElement = document.querySelector(".billTotal")
//get a reference to the billString
var billStrings = document.querySelector(".billString")
//create the function that will be called when the calculate button is pressed
function calculateBtnClicked(bill){

    //split the string
    var billItems = bill.split(",");
    // a variable for the total phone bill.
    var billTotal = 0.00;
    //loop over all the bill items
    for (var i = 0; i < billItems.length; i++){
        var current = billItems[i].trim();
        if (current === "call"){
            billTotal += 2.75;
        }
        else if (current === "sms"){
            billTotal += 0.75;
        }

    }
      return billTotal.toFixed(2);
  }

function calculateBtnClickedDOM(){
    //round to two decimals
var bill = billStrings.value;
    var roundedBillTotal = calculateBtnClicked(bill);
    billTotalElement.innerHTML = roundedBillTotal;
    //color the total based on the criteria
    billTotalElement.classList.remove("danger");
    billTotalElement.classList.remove("warning");

    if (roundedBillTotal >= 20 && roundedBillTotal <=30){
        // adding the danger class will make the text red
        billTotalElement.classList.add("warning");
        billTotalElement.classList.remove("danger");
    }
    else if (roundedBillTotal >= 30){
        billTotalElement.classList.add("danger");
    }
}
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button
calculateButt.addEventListener("click", calculateBtnClickedDOM)
//get a reference to the calculate button
