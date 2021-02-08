// unit testing with Mocha and Chai
// Requiring chai with its assert property
const assert = require ('chai').assert;
const F = require('./fact');

// Calling the method describe
describe('Test for the factorial of the numbers passed', function(){
    let num = 1

    it('Check that num is a number', function(){
        assert.isNumber(num);
    });
    it.skip('Check that num is an array', function(){
        assert.isArray(num);
    });
    it('Ensure that the answer is a string', function(){
        
        assert.isString(num)
               
    });
});