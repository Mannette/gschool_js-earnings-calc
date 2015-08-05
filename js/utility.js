function CustomerCharge(price, tax, tip) {
  this.subtotal = price * (1 + tax);
  this.tipAmount = price * tip;
  this.total = this.subtotal + this.tipAmount;
}
