$(document).ready(function(){
//API Call for Currency conversion
var money;
var promise = function(data){
  money = data;
  console.log(money);
};



$.getJSON('http://api.fixer.io/latest', promise);

$("button").click(function(){
  // Grabs the amount in the input and if it's empty the value defaults to 1
  var amount = $('#amount').val();
    if (!amount){
      amount = 1;
    }

// Below grabs the value in the first and second select element and translates it into the conversion rate from the returned JSON object

  var currency1 = $("#currency1").val();
  var number1 = money.rates[currency1];
  if(currency1 == "EUR"){
    number1 = 1;
  }

  var currency2 = $("#currency2").val();
  var number2 = money.rates[currency2];
  if(currency2 == "EUR"){
    number2 = 1;
  }

//Answer to the conversion for the inputs and limited it to 2 decimal points
var convertedValue = number2/(number1 * amount);
convertedValue = convertedValue.toFixed(2);

console.log(convertedValue);
  //mult amount value by option 1 value

  //divide multiplied number by option 2
  //output value
  //clear amount input;
})
})
