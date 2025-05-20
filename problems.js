function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    // Your code here
    if (!Array.isArray(arr)) {
        return [];
    }

    let result = [];

    for (let i = 1; i < arr.length; i += 2) {
        result.push(arr[i]);
    }

    return result;
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    // Your code here
    if (!Array.isArray(arr)) {
        return [];
    }

    let result = [];

    for (let i = 1; i < arr.length; i += 2) {
        result.push(arr[i]);
    }

    let reverseResult = result.reverse();

    return reverseResult;
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    // Your code here
    if (!Array.isArray(arr)) {
        return [];
    }

    let result = [];

    for (let i = 1; i < arr.length; i = i * 2) {
        result.push(arr[i]);
    }

    return result;
}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    // Your code here
    if (!Array.isArray(arr)) {
        return [];
    }

    let result = [];

    for (let i = 1; i < arr.length; i = i * n) {
        result.push(arr[i]);
    }

    return result;
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here
       if (!Array.isArray(arr)) {
        return [];
    }

    let result = [];
    let half = arr.length / 2;

    for (let i = 0; i < half; i++) {
        result.push(arr[i]);
    }

    return result;
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    // Your code here
    if (!Array.isArray(arr)) {
        return [];
    }

    let result = [];
    let half = Math.ceil(arr.length / 2); // Use Math.ceil to round up

    for (let i = half; i < arr.length; i++) {
        result.push(arr[i]);
    }

    return result;
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
