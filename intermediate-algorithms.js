/*
*** Sum All Numbers in a Range ***
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/
function sumAll(arr) {
  let emptArr = [];
  let addedArr = [];
  arr.sort(function(a,b){return a - b}); // sort to put them in ascending order. 
  for (let i = arr[0]; i <= arr[1]; i++) { // A for loop to iterate through the values between the two numbers provided.
    emptArr.push(i); // adding the iterated values to an empty array.
  }
  addedArr = emptArr.reduce((acc, curr) => { // using reduce with the accumulator value to add all of the values of the range. 
    return acc += curr
  })
  return addedArr // 10 
}
sumAll([1, 4]);

/*
*** Diff Two Arrays ***
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.
*/
// My solution.
function diffArray(arr1, arr2) {
  let empt = [];
  let concat = arr1.concat(arr2); // join arrays to be able to be able to compare each individual array to it. 
  for (let i = 0; i < concat.length; i++) { // loop to iterate though the joined array. 

    if (arr1.includes(concat[i]) === true && // if the first array contains the iterated item but the second one doesn't, then push that 
    (arr2.includes(concat[i]) === false)|| // one into the empty array. And vice-versa. 
    (arr1.includes(concat[i]) === false &&
    (arr2.includes(concat[i]) === true))) {
        empt.push(concat[i]);
      }
    }
    return empt;
  }

console.log(diffArray([1, 2, 3, 5, 6], [1, 2, 3, 4, 5])) //returns [4,6]

// another solution that I liked. 

function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2) // we want to join both arrays in order to be able to iterate through it with .filter().
    .filter(item => !arr1.includes(item) || !arr2.includes(item)); // Here we use filter with two conditions. 
    // if arr1 includes the current item in the joined array OR if arr2 includes the current item, THEN retrun FALSE, 
    // in other words, retrun TRUE if the item of one of the seperate arrays is not present in the joined array. 
    // The `!`in front of arr1 and arr2 returns the opposite boolean, which we need because we want to return the one that isn't present in both. 
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); // returns 4. 

