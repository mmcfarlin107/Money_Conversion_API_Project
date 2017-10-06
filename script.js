$(document).ready(function(){
//API Call for Currency conversion

var promise = function(data){
  console.log(data);
};

$.getJSON('http://api.fixer.io/latest', promise);



})
