// get a reference to the sms or call radio buttons
var billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");

// get refences to all the settings fields
var warningLevelSetting = document.querySelector(".warningLevelSetting");
var callCostSettings = document.querySelector(".callCostSetting");
var smsCostSetting = document.querySelector(".smsCostSetting");
var criticalLevelSetting = document.querySelector(".criticalLevelSetting");

//get a reference to the add button
var settingsBillAddBtn = document.querySelector(".SettingsAddBtn");

//get a reference to the 'Update settings' button
var updateSettingsBtn = document.querySelector(".updateSettings");
// console.log(callsTotalElem.innerHTML);



// create a variables that will keep track of all three totals.
var callTotalSettings = document.querySelector(".callTotalSettings");
var smsTotalSettings = document.querySelector(".smsTotalSettings");
var TotalSettings = document.querySelector(".totalSettings");
var setFunction = SettingFactory();
// console.log(TotalSettings);

function updateSettings() {
  setFunction.setCallCost(callCostSettings.value);
  setFunction.setSmsCost(smsCostSetting.value);
  setFunction.setWarning(warningLevelSetting.value);
  setFunction.setCritical(criticalLevelSetting.value);
}


function settingsBillTotal() {
  //var billItemTypeWithSettings = checkedSettingsBtn.value
if( setFunction.getTotals()<setFunction.getCritical()){
  var checkedSettingsBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
  if (checkedSettingsBtn) {
    setFunction.SettingsBillLogic(checkedSettingsBtn.value);

    callTotalSettings.innerHTML = setFunction.getCallCost().toFixed(2);
    smsTotalSettings.innerHTML = setFunction.getSmsCost().toFixed(2);
    TotalSettings.innerHTML = setFunction.getTotals().toFixed(2);


    if (setFunction.getTotals() >= setFunction.getWarning()) {
      // adding the danger class will make the text red
      TotalSettings.classList.add("warning");

    }
    if (setFunction.getTotals() >= setFunction.getCritical()) {
      TotalSettings.classList.add("danger");
    }
    if (setFunction.getTotals() < setFunction.getCritical()) {
      TotalSettings.classList.remove("danger");
    }
    if (setFunction.getTotals() < setFunction.getWarning()) {
      TotalSettings.classList.remove("warning");
    }
    // billItemType will be 'call' or 'sms'
  }
}
  // get the value entered in the billType textfield

}


//update the totals that is displayed on the screen.


settingsBillAddBtn.addEventListener('click', settingsBillTotal);
updateSettingsBtn.addEventListener('click', updateSettings);
