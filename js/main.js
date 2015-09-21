var earningsCalc = new Financials();

$(document).on('ready', function() {
  $( "input[value='Reset']").on('click',function(){
    earningsCalc.charges = [];
    $('span').not('.small').html('');
  });
  $( "input[value='Clear']").on('click',function(){
    earningsCalc.clearInput();
  });
  $("form").on('submit', function(event){
    event.preventDefault();
    earningsCalc.getCharge();
    earningsCalc.clearInput();
    earningsCalc.updateDom();

  });

  Financials.prototype.getCharge = function() {
    var price = parseFloat($( "input[name='meal-price']" ).val());
    var taxRate = parseFloat($( "input[name='meal-taxrate']" ).val());
    var tipRate = parseFloat($( "input[name='meal-tiprate']" ).val());
    this.charges.push(new CustomerCharge(price, taxRate, tipRate));
  };

  Financials.prototype.clearInput = function() {
    $( "input[name='meal-price']" ).val('');
    $( "input[name='meal-taxrate']" ).val('');
    $( "input[name='meal-tiprate']" ).val('');
  };

  Financials.prototype.updateDom = function() {
    var index = this.charges.length-1;
    $('#subtotal').html(this.numFormat(this.charges[index].subtotal));
    $('#tip').html(this.numFormat(this.charges[index].tipAmount));
    $('#total').html(this.numFormat(this.charges[index].total));
    $('#total-tips').html(this.numFormat(this.totalTips()));
    $('#meal-count').html(this.charges.length);
    $('#average-tip').html(this.numFormat(this.averageTip()));
  };





});
