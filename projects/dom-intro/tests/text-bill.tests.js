describe('text-bill function' , function(){
    it('should only return the correct amount of calls' , function(){
     var billCounter = TextBillFactory ()
     billCounter.GCall(2.75)
     billCounter.TBTotal('call')
      billCounter.TBTotal('call')
       billCounter.TBTotal('call')
  assert.equal(billCounter.GCall(), 8.25);

  });
  it('should only return the correct amount of sms' , function(){
   var billCounter = TextBillFactory ()
   billCounter.GSms(0.75)
   billCounter.TBTotal('sms')
   billCounter.TBTotal('sms')
   billCounter.TBTotal('sms')
   billCounter.TBTotal('sms')
assert.equal(billCounter.GSms(), 3.00);
  });
  it('should only return the correct total of calls and sms' , function(){
   var billCounter = TextBillFactory ()
   billCounter.GCall(2.75)
   billCounter.GSms(0.75)
   billCounter.TBTotal('call')
   billCounter.TBTotal('sms')
   billCounter.TBTotal('call')
   billCounter.TBTotal('sms')
   billCounter.TBTotal('call')
   billCounter.TBTotal('sms')
  assert.equal(billCounter.GTotal(), 10.50);
  });
  });
