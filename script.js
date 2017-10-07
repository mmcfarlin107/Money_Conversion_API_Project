$(document).ready(function(){
//API Call for Currency conversion
var money;
var promise = function(data){
  money = data;
  var date = data.date;
  console.log(date);
  //converts date from yyyy/mm/dd to dd/mm/yyyy
  var displayedDate = changeDateFormat(date);
  console.log(displayedDate);
  $('#date').append(displayedDate);
  console.log(money);
};


function changeDateFormat(inputDate){  // expects Y-m-d
    var splitDate = inputDate.split('-');
    if(splitDate.count == 0){
        return null;
    }

    var year = splitDate[0];
    var month = splitDate[1];
    var day = splitDate[2];

    return month + '-' + day + '-' + year;
}


$.getJSON('http://api.fixer.io/latest', promise);

$("button").click(function(){
  // Grabs the amount in the input and if it's empty the value defaults to 1
  var amount = parseFloat($('#amount').val());
    if (!amount){
      amount = 1;
    }

// Below grabs the value in the first and second select element and translates it into the conversion rate from the returned JSON object.  Since the API conversion rates are based on Euros, that value is 1.

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
var convertedValue = number2/number1 * amount;
convertedValue = convertedValue.toFixed(2);

$('#answer-div').html('<p class="text-center" style="font-size: 4rem">' + amount + ' ' + currency1 + ' = ' + convertedValue + ' ' + currency2 + '</p>');
  //mult amount value by option 1 value

  //divide multiplied number by option 2
  //output value
  //clear amount input;
})
})
