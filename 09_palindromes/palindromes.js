const palindromes = function (inputStr) {
    let caseInsensitive = inputStr.toLowerCase();
    let splitStr = caseInsensitive.split("");
    for(let i = 0; i < splitStr.length; i++){
        if(splitStr[i] === " " || splitStr[i] === "!" || splitStr[i] === "," || splitStr[i] === "." ) {
            splitStr.splice(i, 1);
            i--;
        }
    }
    let inputStrCopy = splitStr.join("");
    let reverseStr = splitStr.reverse();
    let joinStr = reverseStr.join("");
    if(inputStrCopy === joinStr) {
        return true;
    }
    else{
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
