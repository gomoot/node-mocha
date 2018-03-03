/*
 * Filename : tests/calculatorTest.js
 */
var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var Calculator = require('./../src/calculator');

describe('Group1', function() {
	describe('Calculator', function() {
/*
		//before : call only one time before starting test case.
	  before(() => {
			// before คือ เราจะทำ function นี่ก่อนทำ Test case ครั้งแรกครั้งเดียว
		});

		//beforeEach : will be in this function on each testcase
	  beforeEach(() => {
    // beforeEach ทุก Test case เราจะเข้า function นี้ก่อนเสมอ
	  });
		
		it('Test case Description', () => {
			// test case
		});
			
		//afterEach : call when each test case is finish
	  afterEach(() => {
		// afterEach เมื่อจบ Test case แต่ละ Test case เราจะทำ function นี้
		});
		
		//after call when all test cases are finish.
	  after(() => {
		// after เมื่อจบทุก Test case ถึงจะทำ function นี้
	  });
*/	  
	  var calc = new Calculator([]);	
	  it('sum(1,2) should return 3 ', function() {

		expect( calc.sum(1,2)).to.equal(3);
	  });
	  
	  it('mul(1,2) should return 2 ', function() {
	  //  var calc = new Calculator([]);
		expect( calc.mul(1,2)).to.equal(2);
	  });
	});
});