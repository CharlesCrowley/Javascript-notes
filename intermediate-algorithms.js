/*
*** Sum All Numbers in a Range **
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

/*
Seek and Destroy
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.
*/

function destroyer(arr,...args) { // use the spead operator because we are expecting multiple arguments here, but we don't know how many yet. 
  for (let i = 0; i < arr.length; i++) { // a for loop to iterate through all the elements in the array. 
    for(let j = 0; j < args.length; j++) { // another for loop this time for the args we pass in. We want to check the array against each arg. 
      if (arr[i] === args[j]) { // if the item in array is the same as one of the args we...
        arr.splice(i,1); //...remove it with splice. We want start the removal from the index `i` and take 1 element out.
        i--; // when we take an element out with split we need to reduce `i` because the array is now shorter. If we didn't then we'd be skipping... 
      } //... the next element. 
    } 
  }
  return arr
}

console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5))

// another slution: 

function destroyer(arr, ...valsToRemove) {
  // The `filter()` method creates a new array with only the elements
  // that pass the callback function's test
  return arr.filter(elem => {
    // The callback function checks if the current element, `elem`,
    // is not included in the `valsToRemove` array
    // If it is not included, the function returns `true`,
    // indicating that the element should be included in the new array
    // If it is included, the function returns `false`,
    // indicating that the element should be excluded from the new array.
    return !valsToRemove.includes(elem);
  });;
}
/*
Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
  str = str.replace(/[ _]/g, '-'); // we want to relace all instances of a space followed by an `_` with a `-`.
  str = str.replace(/([a-z])([A-Z])/g, '$1-$2') // replace all instances of a lowercase letter followed by a uppercase one with a `-`.
  return str.toLowerCase();
}

spinalCase("AllThe-small Things") // "all-the-small-things"

console.log(spinalCase('The_Andy_Griffith_Show')); // "the-andy-griffith-show"
console.log(spinalCase('This Is Spinal Tap')); // "this-is-spinal-tap"
console.log(spinalCase('thisIsSpinalTap')); // "this-is-spinal-tap"

// some more examples of using replace with the $ symbol. 

let str = 'abc123';

// $1 represents the first and only item you are replacing. By using $1 you are repeating it and having it be followed by `.` in this case. 
let str1 = str.replace(/([a-z])/g, '$1.');
console.log(str1); // 'a.b.c.123'

// Here you haven't used $ so you are directly replacing the selected items in the string. 
let str2 = str.replace(/([0-9])/g, '.');
console.log(str2); //  'abc...'

// the regex is looking for instances of a lowercase letter followed by a number, then replaces the letter with a `.`and maintains 
// the number witht he use of $2. 
let str3 = str.replace(/([a-z])([0-9])/g, '.$2');
console.log(str3); // 'ab.123'

// Changing the order of capitalised letters with lowercase letters. 
let oStr = "AaBbCc";
let moStr = oStr.replace(/([A-Z])([a-z])/g, '$2$1' )
console.log(moStr) // 'aAbBcC'

/*
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.
*/

function translatePigLatin(str) {


let checker = /^[aeiou]/;
let vowelless = /[^aeiou]+/g;
console.log(vowelless.test(str))



if (checker.test(str) === true) {
  return str.replace(/^([aeiou])([a-z]+)/g, '$1$2way');
} else if (vowelless.test(str) === false) {
  return str.replace(/([^aeiou]+)/g, '$1ay' );
}
return str.replace(/^([^aeiou]+)([a-z]+)/g, '$2$1ay');
}





console.log(translatePigLatin("rhythm"));

/*
Search and Replace
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog
*/

function myReplace(str, before, after) {

  let cap = /^[A-Z]/; // regex checks if the first character is a uppercase letter. 
  
  if (cap.test(before) === true) { // condition with a test to see if before argument is capital or not. 
    return str.replace(before, after // replace the before word with afer word.
    .replace(after[0], after[0].toUpperCase())) // the after arguments is also using the replace method because we want to capitalise it.
  }
  return str.replace(before, after.toLowerCase() ); // what happens if the first letter of before isn't capitalised. We use the toLowerCase() method 
  // in the cases where the `after` argument is capitalised

}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")); //A quick brown fox leaped over the lazy dog
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting")) //He is Sitting on the couch
console.log(myReplace("I think we should look up there", "up", "Down")) //I think we should look down there

/*
DNA Pairing
Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/

function pairElement(str) {
  let emptyArr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "G") {
      emptyArr.push([str[i], "C"])
    } else if (str[i] === "C") {
      emptyArr.push([str[i], "G"]) 
    } else if (str[i] === "A") {
      emptyArr.push([str[i], "T"])
    } else if (str[i] === "T") {
      emptyArr.push([str[i], "A"])    
    } 
  }
  return emptyArr;
}

console.log(pairElement("GCGAT")); // [ [ 'G', 'C' ], [ 'C', 'G' ], [ 'G', 'C' ], [ 'A', 'T' ], [ 'T', 'A' ] ]

/*
Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
  
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  for (let i = 0; i < alphabet.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (alphabet[i] === str[j] && alphabet[i + 1] !== str[j + 1] ) {
        return alphabet[i + 1];
      }
    }
  }
}

console.log(fearNotLetter("abce")); // returns d
/*
Sorted Union
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.
*/

function uniteUnique(...arr) {
  let spreadArr = [].concat(...arr) // tried using .join() with  .split() but it returned a single array with one paramenter consisting of all the numbers
  return spreadArr.filter((item, index) => spreadArr.indexOf(item) === index); //check if the index of the current item is the same as the index we are on.

 
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); // [ 1, 3, 2, 5, 4 ]

/*
Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/


function convertHTML(str) {
  return str.replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}


console.log(convertHTML("Schindler's List")); // returns Schindler&apos;s List

/*
Sum All Odd Fibonacci Numbers
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
*/

function sumFibs(num) {
  let prev = 0;
  let curr = 1;
  let result = 0;

  while (curr <= num) {
    if (curr % 2 !== 0) {
      result += curr;
    }
    const next = prev + curr;
    prev = curr;
    curr = next;
  }

  return result;
}
sumFibs(4);
