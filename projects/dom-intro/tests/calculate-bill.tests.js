describe('calculateBtnClicked' , function(){
    it('should only return the total call' , function(){

  assert.equal(calculateBtnClicked('call'), 2.75);

  });
  it('should only return the total sms', function(){

    assert.equal(calculateBtnClicked('sms'),0.75);
  });
  it('should return the total cost of sms and calls', function(){

  assert.equal(calculateBtnClicked('sms, call, sms, call, sms, call'),10.50);  
   });
});
