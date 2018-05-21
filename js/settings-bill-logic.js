var SettingFactory = function() {

    var callSettings = 0;
    var smsSettings = 0;
    var totalS = 0;

    var callCost = 0;
    var smsCost = 0;
    var warning = 0;
    var critical = 0;

    var SettingsBillLogic = function(billType) {

      if (billType === "sms") {
        smsSettings += smsCost;
        totalS += smsCost;


      }
      if (billType === "call") {
        callSettings += callCost;
        totalS += callCost;


      }
    }
      //getters
      var getCallCost = function() {
        return callSettings;
      }
      var getSmsCost = function() {
        return smsSettings;
      }
      var getWarning = function() {
        return warning;
      }
      var getCritical = function() {
        return critical;
      }
      var getTotals = function() {
        return smsSettings + callSettings;
      }
        //setters

      var setCallCost = function(num) {
        callCost = parseFloat(num);
      }
      var setSmsCost = function(num) {
        smsCost = parseFloat(num);
      }
      var setWarning = function(num) {
        warning = parseFloat(num);
      }
      var setCritical = function(num) {
        critical = parseFloat(num);
      }

      var ReachedWarning = function() {
       return getTotals() >= getWarning();
      }

      var ReachedCritical = function() {
      return  getTotals() >=getCritical();
      }

      return {
        SettingsBillLogic,
        getCallCost,
        getSmsCost,
        getWarning,
        getCritical,
        getTotals,
        setCallCost,
        setSmsCost,
        setWarning,
        setCritical,
        ReachedWarning,
        ReachedCritical

      }
    }
