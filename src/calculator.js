/*
 * Filename : src/calculator.js
 */
 
function Calculator() {
	
	this.mul = function(value1, value2) {
		return value1 * value2;
	}
	
	
}
	
Calculator.prototype.sum = function(value1, value2) {
	return value1 + value2;
};
	

/*
CartSummary.prototype.getSubtotal = function() {
  return 0;
};
*/

module.exports = Calculator; 