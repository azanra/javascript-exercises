const leapYears = function(yearInput) {
    if(yearInput % 400 === 0 || yearInput % 4 === 0 && yearInput % 100 !== 0){
        return true;
    }
    else{
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
