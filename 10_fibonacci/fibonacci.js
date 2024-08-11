const fibonacci = function(input) {
    input = Number(input);
    let fibonacciArr = [1];
    let total, previous, current;
    if(input === 0){
        return 0;
    }
    else if(input < 0){
        return 'OOPS';
    }

    for(let i = 0; i < input; i++){
        if(i === 0){
            previous = 0;
            current = 1;
        }
        total = previous + current;
        previous = current;
        current = total;
        fibonacciArr.push(total);
    }
    console.log(fibonacciArr);
    return fibonacciArr[input - 1];

};

// Do not edit below this line
module.exports = fibonacci;
