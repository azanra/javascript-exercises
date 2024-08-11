const findTheOldest = function(arrayObj) {
     arrayObj.map((element) => {
        if(element.yearOfDeath === undefined){
            let currentDate = new Date();
            element.yearOfDeath =  currentDate.getFullYear();
        }
        element.age = element.yearOfDeath - element.yearOfBirth;
    });

    arrayObj.sort((a, b) => b.age - a.age);

    return arrayObj[0];
};

// Do not edit below this line
module.exports = findTheOldest;
