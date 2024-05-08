const removeFromArray = function(givenArray,...toDelete) {
    let newArray = [];
    newArray = givenArray.filter((item) => !toDelete.includes(item));
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;