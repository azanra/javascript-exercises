const repeatString = function(givenString, amount) {
    let tempString = '';
    if(amount < 0){
        return "ERROR";
    }
    else{
        for(let i = 0; i < amount; i++){
            tempString += givenString;
        }
        return tempString;
    }
};

// Do not edit below this line
module.exports = repeatString;
