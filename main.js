$(document).ready(function() {
  var sniff;
  var scratch;
  var operator;
  var answer;



  $('.number').click(function(event){
    var value = $(event.target).val();

    if (!sniff && !operator) {
      sniff = value;
    } else if(sniff && !operator) {
      sniff += value;
    } else if (!scratch && operator) {
      scratch = value;
    } else if(scratch && operator) {
      scratch += value;
    }

    $('#output').val($('#output').val() + value);

  });
  $('.operators').click(function(event){
    var value = $(event.target).val();

    if (value !== '=') {
      operator = value;
      $('#output').val($('#output').val() + value);
    } else {
      sniff = eval(sniff + operator + scratch);
      scratch = undefined;
      operator = undefined;
      $('#output').val(sniff);

    };
  });
 $('#clear').click(function(event){
   $('#output').val('');
   a = undefined;
   b = undefined;
   op = undefined;
});
});
