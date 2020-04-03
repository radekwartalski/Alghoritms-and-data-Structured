/* Sliding window - creating a window which can either be an array or number from one position to another
Depending on the condition the window either increases an closes
Usefull for keeping track of subset of data in an array/string etc */

// For exmaple: maxSubaArray, maxStringWithUniqueValues


// naive solution
function maxSubarraySumNaive(array, num) {
    if (num > array.length) {
        return null
    }

    var max = -Infinity;
    for (let i = 0; i < array.length - num +1; i++) {
        var temp = 0;
        for(let j = 0; j < num; j++) {
            temp += arr[i+j];
        }
        if(temp > max) {
            max = temp;
        }
    }
    return max;
    // O(N^2)
}

// Sliding window

//[1,2,4,5,6,7,8]
// we got summ of subarr [1,2,4,5], when we want summ of [2,3,4,5,6] we dont have to add everything from scratch
// we can just subtract 1 and add 6 !!

function maxSubaArraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length < num) return null;
    // this is our first summ 
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    // we start iterating from num (because we already summ first subarray)
    // we iterate until the end of an array
    for( let i = num; i < arr.length; i++){
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}