var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

    it('can do arithmetical operations 12 + 34 = 46 on display', function(){
      running_total = element(by.css('#running_total'))
      element(by.css('#number1')).click();
      element(by.css('#number2')).click();
      element(by.css('#operator_add')).click();
      element(by.css('#number3')).click();
      element(by.css('#number4')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('46');
    });

    it('can chain multiple operations 1 * 2 + 3 - 4 = 1 on display', function(){
      running_total = element(by.css('#running_total'))
      element(by.css('#clear')).click();
      element(by.css('#number1')).click();
      element(by.css('#operator_multiply')).click();
      element(by.css('#number2')).click();
      element(by.css('#operator_add')).click();
      element(by.css('#number3')).click();
      element(by.css('#operator_subtract')).click();
      element(by.css('#number4')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('1');
    });

    it('can have negative answer 2 - 5 = -3', function(){
      running_total = element(by.css('#running_total'))
      element(by.css('#clear')).click();
      element(by.css('#number2')).click();
      element(by.css('#operator_subtract')).click();
      element(by.css('#number5')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('-3');
    });

    it('can have decimal answer 1 / 2 = 0.5', function(){
      running_total = element(by.css('#running_total'))
      element(by.css('#clear')).click();
      element(by.css('#number1')).click();
      element(by.css('#operator_divide')).click();
      element(by.css('#number2')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('0.5');
    });

    it('large number test 7 / 2 = 3.5', function(){
      running_total = element(by.css('#running_total'))
      element(by.css('#clear')).click();
      element(by.css('#number1')).click();
      element(by.css('#number0')).click();
      element(by.css('#number0')).click();
      element(by.css('#number0')).click();
      element(by.css('#number0')).click();
      element(by.css('#number0')).click();
      element(by.css('#number0')).click();
      element(by.css('#number0')).click();
      element(by.css('#number0')).click();
      element(by.css('#operator_multiply')).click();
      element(by.css('#number2')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('200000000');
    });

    it('divide by zero test 8 / 0 = Not A Number', function(){
      running_total = element(by.css('#running_total'))
      element(by.css('#clear')).click();
      element(by.css('#number8')).click();
      element(by.css('#operator_divide')).click();
      element(by.css('#number0')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('Not A Number');
    });



});
