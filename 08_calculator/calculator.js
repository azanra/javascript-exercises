const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arrayInput) {
	return arrayInput.reduce((total, current) => total += current, 0);
};

const multiply = function(arrayInput) {
  return arrayInput.reduce((total, current) => total *= current, );
};

const power = function(a, b) {
	let total = 1;
  for(let i = 0 ; i < b; i++) {
    total *= a;
  }
  return total;
};

const factorial = function(input) {
  let total = 1;
  if(input === 0){
    total = 1;
  }
  // for(let i = 1; i <= input; i++){
  //    total *= i;
  // }

  for(let i = input; i > 0; i--){
    total *= i;
  }
  return total; 
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
