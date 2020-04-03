/* function which checks if two arrays have the same customElements, order doesn't matter */

// NAIVE SOLUTION
function sameNaive(arr1, arr2) {

    if(arr1.length !== arr2.length) {
        return false;
    }

    for( let i = 0; i <arr1.length; i++) {   // --> first loop
        // what is the index of element from arr1^2?
        let correctIndex = arr2.indexOf(arr1[i]^2)  // second loop, this iterate trought array as well
        // if there is no such an element (index = -1) than false
        if(correctIndex === -1) {
            return false
        }
        // if true we remove one from array and move further
        arr2.splice(correctIndex,1)
    }
    return true;

    // O(N^2) !
}

function same(arr1, arr2) {

    if(arr1.length !== arr2.length) {
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    // here we build the char map in object for both arrays
    for( let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) +1;
    }

    for( let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) +1;
    }

    for(let key in frequencyCounter1) {
        // is key squard in the second arr? if not return false
        if(!(key ** 2 in frequencyCounter2)) {
            return false
        }
        // are values assigne to key the same?  
        if(frequencyCounter2[key**2] !== frequencyCounter1[key]) {
            return false
        }
        return true
    }

    // O(N + N + N) -> O(N)
}


console.log(same([2,3,2], [4,9,4]));


/* Anagram Problem */

function validAnagram(string1, string2) {
    // check length
    if(string1.length !== string2.length) {
        return false
    }
    // initialize object, object becuase we dont care about order
    let stringObject1 = {};

    // build the char maps inside the object  { a: 2, b:3 } 
    for(let char of string1){
        stringObject1[char] = ++stringObject1[char] || 1; 
    }


    // iterate trough the map to check if one string is anagram of the second one
    for (let char of string2) {
        if(!stringObject1[char]){
            return false;
        } else {
            stringObject1[char] -= 1
        }
    }
    return true

    // return true or false


}

// validAnagram('anagram' , 'grmaana') -> true
// validAnagram('aaaz' , 'zzaa') -> false
console.log(validAnagram('anagram', 'nagaram'));