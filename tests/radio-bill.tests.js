describe('radio-bill function' , function(){
    it('return the correct amount of calls ' , function(){
     var radioCounter = TextBillFactory ()
     radioCounter.GCall(2.75)
     radioCounter.TBTotal('call')
     radioCounter.TBTotal('call')
  assert.equal(radioCounter.GCall(), 5.50);

  });
  it('return the correct amount of sms' , function(){
   var radioCounter = TextBillFactory ()
   radioCounter.GCall(0.75)
   radioCounter.TBTotal('sms')
   radioCounter.TBTotal('sms')
   radioCounter.TBTotal('sms')
assert.equal(radioCounter.GSms(), 2.25);
    });
    it('return the total amount of calls and sms' , function(){
     var radioCounter = TextBillFactory ()
     radioCounter.GCall(2.75)
      radioCounter.GCall(0.75)
     radioCounter.TBTotal('sms')
     radioCounter.TBTotal('call')
     radioCounter.TBTotal('sms')
     radioCounter.TBTotal('call')
     radioCounter.TBTotal('sms')
      radioCounter.TBTotal('call')
       radioCounter.TBTotal('sms')
  assert.equal(radioCounter.GTotal(), 11.25);
    });
      });
