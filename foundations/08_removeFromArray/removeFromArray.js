const removeFromArray = function(array, ...removedItems) {
    let finalArray = array;
    
    for (let removedItem of removedItems) {
        finalArray = finalArray.filter(item => item !== removedItem);
    }

    return finalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
