
function TextBillFactory(){
  var callsTotal = 0;
  var smsTotal = 0;

  function textBillTotal(billTypeText){
      // get the value entered in the billType textfield
      var billTypeEntered = billTypeText.trim();
      // update the correct total
      if (billTypeEntered === "call"){
          callsTotal += 2.75;
      }
      else if (billTypeEntered === "sms"){
          smsTotal += 0.75;
      }

    }

    function GetSms(){
      return smsTotal.toFixed(2);
    }
    function GetCall(){
      return callsTotal.toFixed(2);
    }
    function GetTotal(){
      return smsTotal + callsTotal;

    }
    return {
    TBTotal  :textBillTotal,
    GSms   :GetSms,
    GCall   :GetCall,
    GTotal   :GetTotal,
    }
}
