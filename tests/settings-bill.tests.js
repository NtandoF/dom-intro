describe('settings-bill function' , function(){
    it('should return the total calls when updated' , function(){
     var settingB = SettingsbillFactory();
     settingB.SetCallcost(2.75);
     settingB.settingsBillTotal('call');
      settingB.settingsBillTotal('call');
     assert.equal(settingB.GetCallSett(), 5.50);
 });

 it('should return the total when sms is updated' , function(){
  var settingB = SettingsbillFactory();
  settingB.SetSmscost(0.75);
  settingB.settingsBillTotal('sms');
  settingB.settingsBillTotal('sms');
  settingB.settingsBillTotal('sms');
  assert.equal(settingB.GetSmsSett(), 2.25);
});

it('should return the total when sms is updated' , function(){
 var settingB = SettingsbillFactory();
 settingB.SetCallcost(2.75)
 settingB.SetSmscost(0.75)
 settingB.settingsBillTotal('sms');
 settingB.settingsBillTotal('call');
 settingB.settingsBillTotal('sms');
 settingB.settingsBillTotal('call');
 settingB.settingsBillTotal('sms');
 // console.log(settingB.GetCallSett());
assert.equal(settingB.GetTotallsett(), 7.75);
});



 it('should reture true when warning level is reached' , function(){
  var settingB = SettingsbillFactory();
  settingB.SetCallcost(2.75)
  settingB.SetSmscost(0.75)
  assert.equal(settingB.hasReachedWarning(), true);
  settingB.settingsBillTotal('call')
  settingB.settingsBillTotal('sms')
  settingB.settingsBillTotal('call')
  settingB.settingsBillTotal('sms')
  settingB.settingsBillTotal('call')
  settingB.settingsBillTotal('sms')
  settingB.settingsBillTotal('call')
  settingB.settingsBillTotal('sms')
  assert.equal(settingB.hasReachedWarning(), true);
 });


 it('should reture true when critical level is reached' , function(){
  var settingB = SettingsbillFactory();
  settingB.SetCallcost(2.75)
  settingB.SetSmscost(0.75)
  assert.equal(settingB.hasReachedCritical(), true);
  settingB.settingsBillTotal('call')
  settingB.settingsBillTotal('call')
  settingB.settingsBillTotal('call')
  settingB.settingsBillTotal('sms')
  settingB.settingsBillTotal('call')
  settingB.settingsBillTotal('sms')
  settingB.settingsBillTotal('sms')
  settingB.settingsBillTotal('sms')
  assert.equal(settingB.hasReachedCritical(), true);
});
});
