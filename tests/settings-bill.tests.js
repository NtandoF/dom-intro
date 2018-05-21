describe('settings-bill', function() {

  it('should update the total of sms costs.', function() {
    var settingsB = SettingFactory();
    settingsB.setSmsCost(0.75);
    settingsB.SettingsBillLogic('sms');
    assert.equal(settingsB.getSmsCost(), 0.75);

  });

  it('should update the total of calls costs.', function() {
    var settingsB = SettingFactory()
    settingsB.setCallCost(2.75);
    settingsB.SettingsBillLogic('call')
    assert.equal(settingsB.getCallCost(), 2.75);

  });
  it('should update the total amount of sms and calls cost.', function() {
    var settingsB = SettingFactory()
    settingsB.setCallCost(2.75);
    settingsB.setSmsCost(0.75);
    settingsB.SettingsBillLogic('call')
    settingsB.SettingsBillLogic('call')
    settingsB.SettingsBillLogic('sms');
    settingsB.SettingsBillLogic('sms');
    settingsB.SettingsBillLogic('call')
    settingsB.SettingsBillLogic('call')
    assert.equal(settingsB.getTotals(),12.50);

  });
  it('check if the WarningLevel is reached' , function(){
    var settingsB = SettingFactory()
    settingsB.SettingsBillLogic('call')
    settingsB.SettingsBillLogic('sms');
    assert.equal(settingsB.ReachedWarning(),true);
    settingsB.SettingsBillLogic('sms');
    settingsB.SettingsBillLogic('call')
    settingsB.SettingsBillLogic('sms');
    settingsB.SettingsBillLogic('sms');
    settingsB.SettingsBillLogic('call')
    settingsB.SettingsBillLogic('call')
    settingsB.SettingsBillLogic('sms');

    assert.equal(settingsB.ReachedWarning(),true);

  });

  it('check if the CriticalLevel is reached' , function(){
    var settingsB = SettingFactory()
    settingsB.SettingsBillLogic('call')
    settingsB.SettingsBillLogic('sms');
    assert.equal(settingsB.ReachedCritical(), true);
    settingsB.SettingsBillLogic('sms');
    settingsB.SettingsBillLogic('call')
    settingsB.SettingsBillLogic('sms');
    settingsB.SettingsBillLogic('sms');
    settingsB.SettingsBillLogic('call')
    settingsB.SettingsBillLogic('call')
    settingsB.SettingsBillLogic('sms');
    settingsB.SettingsBillLogic('sms');
    settingsB.SettingsBillLogic('call')
    settingsB.SettingsBillLogic('call')
    settingsB.SettingsBillLogic('call')
    settingsB.SettingsBillLogic('call')

    assert.equal(settingsB.ReachedCritical(),true );


    });

});
