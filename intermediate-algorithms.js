/*
Sum All Numbers in a Range
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
Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.
*/
function diffArray(arr1, arr2) {
  let empt = [];
  let concat = arr1.concat(arr2);
  for (let i = 0; i < concat.length; i++) {

    if (arr1.includes(concat[i]) === true && 
    (arr2.includes(concat[i]) === false)||
    (arr1.includes(concat[i]) === false &&
    (arr2.includes(concat[i]) === true))) {
        empt.push(concat[i]);
      }
    }
    return empt;
  }

console.log(diffArray([1, 2, 3, 5, 6], [1, 2, 3, 4, 5]))
