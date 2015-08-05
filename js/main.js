var charges = [];

$(document).on('ready', function() {

  $("form").on('submit', function(event){
    event.preventDefault();
    console.log('yep')
    var priceInput = $( "input[name='meal-price']" )
    var taxRateInput = $( "input[name='meal-taxrate']" )
    var tipRateInput = $( "input[name='meal-tiprate']" )
    var price = parseFloat(priceInput.val());
    var taxRate = parseFloat(taxRateInput.val());
    var tipRate = parseFloat(tipRateInput.val());
    priceInput.val('');
    taxRateInput.val('');
    tipRateInput.val('');
    var currentCharge = new CustomerCharge(price, taxRate, tipRate);
    charges.push(currentCharge);
    updateDom();

  });

  function updateDom() {
    $('#subtotal').append(" $" + charges[0].subtotal.toFixed(2));
    $('#tip').append(" $" + charges[0].tipAmount.toFixed(2));
    $('#total').append(" $" + charges[0].total.toFixed(2));
    $('#total-tips')
    $('#meal-count')
    $('#average-tip')
  }


});
