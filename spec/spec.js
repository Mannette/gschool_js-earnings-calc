var code = require('../js/utility.js')

describe('totals section', function() {
  it('should calculate total tips, meal count, and average tip', function() {
    var bill = new code.Financials();
    bill.charges.push(new code.CustomerCharge(10,.1,.2));
    bill.charges.push(new code.CustomerCharge(20,.1,.2));
    expect( bill.totalTips() ).toEqual(6);
    expect( bill.averageTip() ).toEqual(3);
    expect( bill.charges.length ).toEqual(2);


  });
});
