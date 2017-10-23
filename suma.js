$(document).ready(function() {
 //se le asignan los valores del checkbox y del input
 $(document).on('click keyup','.sumaCheckboxes,.servicioAdicional',function() {
   calcular();
 });

});

//Se crea la función calcular
function calcular() {
  var tot = $('#total');
  tot.val(0);
  $('.sumaCheckboxes,.servicioAdicional').each(function() {
    if($(this).hasClass('sumaCheckboxes')) {
      tot.val(($(this).is(':checked') ? parseFloat($(this).attr('precio')) : 0) + parseFloat(tot.val()));  
    }
    else {
      tot.val(parseFloat(tot.val()) + (isNaN(parseFloat($(this).val())) ? 0 : parseFloat($(this).val())));
    }
  });
  //se crea la variable totalParts
  var totalParts = parseFloat(tot.val()).toFixed(2).split('.');
  tot.val(' Bs ' + totalParts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '.' +  (totalParts.length > 1 ? totalParts[1] : '00'));  
}