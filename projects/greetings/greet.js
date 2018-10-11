var textInputElem = document.querySelector('.textInput');
var counterElem = document.querySelector('.counter');
var languageRadioELem = document.querySelector('.languageRadio');
var displayGreeting = document.querySelector('.displayGreeting');
var greetBtn = document.querySelector('.greetButton');
var clearBtnElem = document.querySelector('.clear');


function checkedRadioBtn(){
  var checkedRadioBtn = document.querySelector("input[name='languageRadio']:checked");
  if (checkedRadioBtn){
     var billItemType = checkedRadioBtn.value
