function Financials(){
  this.charges = [];
}
function CustomerCharge(price, tax, tip) {
  this.subtotal = price * (1 + tax);
  this.tipAmount = price * tip;
  this.total = this.subtotal + this.tipAmount;
}

Financials.prototype.totalTips = function(){
  var tipTotals = 0;
  for (var i = 0; i < this.charges.length; i++) {
    tipTotals += this.charges[i].tipAmount;
  }
  return tipTotals;
};

Financials.prototype.averageTip = function() {
  return this.totalTips() / this.charges.length;
};

Financials.prototype.numFormat = function(num) {
  return " $" + num.toFixed(2);
};

module.exports = {
  CustomerCharge: CustomerCharge,
  Financials: Financials
};

// local storage
function LocalStorage(name) {
  this.name = name;
  this.data = data;
}

LocalStorage.prototype.init = function() {
  // create object in local storage
  
};
