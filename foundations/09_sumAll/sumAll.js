const sumAll = function(firstNumber, secondNumber) {
    let sum = 0;

    if (!Number.isInteger(firstNumber) || !Number.isInteger(secondNumber) || firstNumber < 0 || secondNumber < 0) return "ERROR"

    let smallerNumber = (firstNumber >= secondNumber) ? secondNumber : firstNumber;
    let largerNumber = (firstNumber >= secondNumber) ? firstNumber : secondNumber;

    for (; smallerNumber <= largerNumber; smallerNumber++) {
        sum += smallerNumber;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;