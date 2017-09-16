var assert = require('assert');
var chai =require('chai');
var expect=chai.expect;
var should=chai.should();


describe('Array Test cases', function() {

  var arrayOfNumbers=[];

    before(function() {

    arrayOfNumbers=[1,2,3]
      // runs before all tests in this block
    });
  
    after(function() {
    
      // runs after all tests in this block
    });
  
    beforeEach(function() {
    
      // runs before each test in this block
    });
  
    afterEach('after each hooks calling',function() {
    
      // runs after each test in this block
    });
  
    // test cases
 
  it('array must contains more than one value', function () {

    expect(arrayOfNumbers).to.have.lengthOf(3);

    arrayOfNumbers.should.have.lengthOf(3);
  });

    //This one consider as pending test because it does not have a call back
    it('The array length always greater than 0');

    describe('#index of ',function(){

      it('should return -1 when the value is not present', function() {
        assert.equal(-1, arrayOfNumbers.indexOf(4));
      });
  
      it('should return index when the value is  present', function() {
        assert.equal(0, arrayOfNumbers.indexOf(1));
      });

      it.skip('sample test will not run', function() {
        assert.equal(-1, arrayOfNumbers.indexOf(4));        
      });

      for (var index = 0; index < 1000; index++) {

        it.skip('Loop Test for index'+index, function() {
          
        });
        
      }
  
    });
  });

