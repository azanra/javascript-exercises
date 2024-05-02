const reverseString = function(givenString) {
    let splittedString = givenString.split('');
    let reversedString = splittedString.reverse();
    let joinString = reversedString.join('')
    return joinString;
};

// Do not edit below this line
module.exports = reverseString;
