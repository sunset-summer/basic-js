const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (Array.isArray(arr) !== true) {
        throw 'Error';
    }

    let transformedArray = [];

    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case '--discard-next':
                i++;
                break;
            case '--discard-prev':
                if (arr[i - 2] != '--discard-next') {
                    transformedArray.pop();
                }
                break;
            case '--double-next':
                if (arr.length - 1 != i) {
                    transformedArray.push(arr[i + 1]);
                }
                break;
            case '--double-prev':
                if (arr[i - 2] != '--discard-next' && i != 0) {
                    transformedArray.push(arr[i - 1]);
                }
                break;
            default:
                transformedArray.push(arr[i]);
        }
    }

    return transformedArray;

};
