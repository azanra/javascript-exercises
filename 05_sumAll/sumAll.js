const sumAll = function(startNumber, endNumber) {
    let result = 0;
    let isPositive = Math.sign(startNumber);
    let isNumber = Number.isInteger(endNumber);
    if(isPositive === 1 && isNumber === true){
        if(startNumber < endNumber ){
            for(let i = startNumber; i <= endNumber; i++){
                result += i;
            }
        }
        else{
            for(let i = startNumber; i >= endNumber; i--){
                result += i;
            }
        }
        return result; 
    }
    else{
        return 'ERROR';
    }

};



// Do not edit below this line
module.exports = sumAll;
