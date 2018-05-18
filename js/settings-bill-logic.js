var SettingsbillFactory = function(){

   var callSettings =0;
    var  smsSettings =0;
     var totall =callSettings + smsSettings;

    var callCost =0;
      var smsCost =0;
       var warning =0;
        var critical =0;

// create a variables that will keep track of all three totals.
// console.log(TotalSettings);


function settingsBillTotal(billItemTypeWithSettings){
  // update the correct total
if (GetTotallsett() < critical){

    if (billItemTypeWithSettings === "call"){
        callSettings +=  callCost;
        totall += callCost;
        }

   if (billItemTypeWithSettings === "sms"){
        smsSettings +=  smsCost;
        totall += smsCost;
      }

   }
 }



   //setters
   function SetCallcost(num){
     callCost = parseFloat(num);
     // console.log(callCost);

   }

   function SetSmscost(num) {
    smsCost = parseFloat(num);
   }

   function SetWarning(num) {
    warning = parseFloat(num);
   }
   function SetCritical(num){
    critical = parseFloat(num);
   }

   //getters
   function GetCritical(){
   return critical;
   }

   function GetWarning() {
     return warning;
   }

   function GetCallSett() {
      return callSettings;
   }

   function GetSmsSett() {
    return smsSettings;
   }

   function GetTotallsett(){
    return callSettings + smsSettings;
   }

   function hasReachedCritical(){
      return GetTotallsett() >= GetCritical()
   }
   function hasReachedWarning(){
      return GetTotallsett() >= GetWarning()
   }


return {
 settingsBillTotal,
 SetCallcost,
 SetSmscost,
 SetWarning,
 SetCritical,
 GetWarning,
 GetCritical,
 GetCallSett,
 GetSmsSett,
 hasReachedCritical,
 hasReachedWarning,
 GetTotallsett

       }
}
