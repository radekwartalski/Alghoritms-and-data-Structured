/* Creating pointers or values that correspond to an index or position and move towards beginning
end or middle based on a certain condition. Very efficient for solving problems with minimal space
complexity as well

Searching for something for exmaple pair of */

// Function that accepts sorted array of integers, the function should find the first pair where the sum is 0

//Naive solution
function sumZeroNaive(sortedArray) {
    for(let i = 0; i < sortedArray.length; i++) {
        for (let j = i+1; j < sortedArray.length; j++) {
            if(sortedArray[i] + sortedArray[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }

    // O(N^2)
}

// better

function sumZero(arr){
    let left = 0;
    let right = arr.length -1;
    while(left < right) {
        let sum = arr[left] + arr[right];
        if(sum === 0) {
            return [arr[left], arr[right]]
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

console.log(sumZero([-3,-2,-1,0,1,2,5]));

// Count unique values  , also sroted array as an input, buildings array with uniqe values

function countUniqueValues(arr) {
    var i = 0;
    for(var j = 1; j < arr.length; j++) {
        if(arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
            }   
        }
        return i+1;
    }


//   i -->
//  [1,1,2,3,4,5,6,6,7]
//     j -->
console.log(countUniqueValues([1,1,2,3,4,5,6,6,7]))