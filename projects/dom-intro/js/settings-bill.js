
   var billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");

// get refences to all the settings fields
  var warningLevelSetting = document.querySelector(".warningLevelSetting");
    var callCostSettings = document.querySelector(".callCostSetting");
      var smsCostSetting = document.querySelector(".smsCostSetting");
        var criticalLevelSetting = document.querySelector(".criticalLevelSetting");

        var callTotalSettings = document.querySelector(".callTotalSettings");
         var smsTotalSettings = document.querySelector(".smsTotalSettings");
          var TotalSettings = document.querySelector(".totalSettings");


//get a reference to the add button
  var settingAddBtn = document.querySelector(".SettingsAddBtn");

//get a reference to the 'Update settings' button
  var updateBtn = document.querySelector(".updateSettings");
// create a variables that will keep track of all the settings



var factorys = SettingsbillFactory();

  function updateSettings(){
     factorys.SetCallcost(callCostSettings.value);
     factorys.SetSmscost(smsCostSetting.value);
    factorys.SetWarning(warningLevelSetting.value);
    factorys.SetCritical(criticalLevelSetting.value);
  }



       function settingsBillTotalDom(){
         // get the value entered in the billType textfield
         var checkedSettingsBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
         if (checkedSettingsBtn){
             var billItemTypeWithSettings = checkedSettingsBtn.value
             // billItemType will be 'call' or 'sms'
             factorys.settingsBillTotal(billItemTypeWithSettings);
         }
        var tot = factorys.GetTotallsett();

        callTotalSettings.innerHTML = factorys.GetCallSett().toFixed(2);
        TotalSettings.innerHTML = factorys.GetTotallsett().toFixed(2);;
        smsTotalSettings.innerHTML = factorys.GetSmsSett().toFixed(2);;
        TotalSettings.innerHTML = factorys.GetTotallsett().toFixed(2);;

          if (tot >= factorys.GetWarning()){
                  // adding the danger class will make the text red
                  TotalSettings.classList.add("warning");

              }
           if (tot >= factorys.GetCritical()){
                  TotalSettings.classList.add("danger");
              }
              if (tot< factorys.GetCritical()){
                TotalSettings.classList.remove("danger");
              }
              if (tot< factorys.GetWarning()){
                TotalSettings.classList.remove("warning");
              }



    //update the totals that is displayed on the screen.

}


settingAddBtn.addEventListener('click', settingsBillTotalDom);

updateBtn.addEventListener('click',updateSettings);
