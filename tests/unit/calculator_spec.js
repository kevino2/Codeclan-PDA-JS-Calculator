var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('should add 1 + 4 = 5', function(){
    calculator.previousTotal = 1;
    calculator.add("4");
    assert.equal(5, calculator.runningTotal)
  })

  it('should subtract 4 - 7 = 3', function(){
    calculator.previousTotal = 7;
    calculator.subtract("4");
    assert.equal(3, calculator.runningTotal)
  })

  it('should multiply 3 * 5 = 15', function(){
    calculator.previousTotal = 3;
    calculator.multiply("5");
    assert.equal(15, calculator.runningTotal)
  })

  it('should divide 21 / 7 = 3', function(){
    calculator.previousTotal = 21;
    calculator.divide("7");
    assert.equal(3, calculator.runningTotal)
  })

  it('should concatonate two numbers', function(){
    calculator.numberClick(4);
    calculator.numberClick(4);
    assert.equal(44, calculator.runningTotal)
  })

  it('should chain multiple operations', function(){
    calculator.numberClick(4);
    calculator.operatorClick("+");
    calculator.numberClick(4);
    calculator.operatorClick("/");
    calculator.numberClick(8);
    calculator.operatorClick("=");
    assert.equal(1, calculator.runningTotal)
  })

  it('should clear running total without affecting calculation', function(){
    calculator.numberClick(4);
    calculator.operatorClick("+");
    calculator.numberClick(4);
    calculator.operatorClick("/");
    calculator.clearClick();
        calculator.numberClick(2);
    assert.equal(2, calculator.runningTotal)
    assert.equal(8, calculator.previousTotal)
  })








  // calculator.clearClick() - clear the running total without affecting the calculation



});
