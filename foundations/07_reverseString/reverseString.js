const reverseString = function(string) {
    let stringArray = string.split('');
    let stringArrayLength = stringArray.length;

    let finalString = "";

    for (let i = 0; i < stringArrayLength; i++) {
        finalString += stringArray.pop();
    }

    return finalString;
};

// Do not edit below this line
module.exports = reverseString;
 