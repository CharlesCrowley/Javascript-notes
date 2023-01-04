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
