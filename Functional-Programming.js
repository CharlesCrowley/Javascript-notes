/*

MAP

The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
*/
const array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2);
console.log(map1);
// expected output: Array [2, 8, 18, 32]

// Another example now using an object. 

let users = [
    {firstName : "Susan", lastName: "Steward"},
    {firstName : "Daniel", lastName: "Longbottom"},
    {firstName : "Jacob", lastName: "Black"}
  ];
  
  let userFullNames = users.map((element) => `${element.firstName} ${element.lastName}`);
  
  console.log(userFullNames); // returns [ 'Susan Steward', 'Daniel Longbottom', 'Jacob Black' ]
  
// Syntax in the .map() method.

let arr = [2, 3, 5, 7];

arr.map(function(element, index, array){
    console.log(element);
    console.log(index);
    console.log(array);
    console.log(this);
}, 80); 

/* output 
›2
›0
›[2, 3, 5, 7]
›80
›3
›1
›[2, 3, 5, 7]
›80
›5
›2
›[2, 3, 5, 7]
›80
›7
›3
›[2, 3, 5, 7]
›80
/index.html
*/
// without the console logs and using generic this.

arr.map(function(element, index, array){}, this);

// example with a more complex object. 

let completeUserData = [
  
  //start of object 1
  {
    firstName: "Susan",
    lastName: "Steward",
    age: 19,
    pronouns: {
      main: { capitalized: "She", lowerCase: "she" },
      possessive: { capitalized: "Her", lowerCase: "her" }
    },
    additionalInfo: {
      hometown: "Sidney",
      favoriteColor: "green",
      favoriteSeason: "summer",
      favoriteFood: "pizza",
      pet: { name: "Charlie", species: "dog" },
      siblings: ["John", "Jerry", "Samantha"]
    }
  },

  //start of object 2
  {
    firstName: "Daniel",
    lastName: "Longbottom",
    age: 19,
    pronouns: {
      main: { capitalized: "He", lowerCase: "he" },
      possessive: { capitalized: "His", lowerCase: "his" }
    },
    additionalInfo: {
      hometown: "London",
      favoriteColor: "blue",
      favoriteSeason: "spring",
      favoriteFood: "tacos",
      pet: { name: "Luna", species: "dog" },
      siblings: ["Sarah", "Jenny", "Samantha"]
    }
  },

  //start of object 3
  {
    firstName: "Jacob",
    lastName: "Black",
    age: 40,
    pronouns: {
      main: { capitalized: "He", lowerCase: "he" },
      possessive: { capitalized: "His", lowerCase: "his" }
    },
    additionalInfo: {
      hometown: "New York",
      favoriteColor: "yellow",
      favoriteSeason: "fall",
      favoriteFood: "sushi",
      pet: { name: "Milo", species: "cat" },
      siblings: ["Ralph", "Ronald", "Reggie", "Regina", "Rachel"]
    }
  }
];

let bio = completeUserData.map(function(element, index, array) {
    return `"${index + 1}. ${element.firstName} is from ${element.additionalInfo.hometown}. 
    ${element.pronouns.main.capitalized} has a ${element.additionalInfo.pet.species} named 
    ${element.additionalInfo.pet.name}. ${element.pronouns.possessive.capitalized} favorite color is 
    ${element.additionalInfo.favoriteColor} and ${element.pronouns.possessive.lowerCase} favorite food is 
    ${element.additionalInfo.favoriteFood}. ${element.pronouns.possessive.capitalized} siblings are 
    ${element.additionalInfo.siblings.slice(0, -1).join(', ')} and ${element.additionalInfo.siblings.slice(-1)}.`
});


console.log(bio)


/* 

        Challenge

Use the map method to generate a new array of biographies 
for our users from the previous tutorial. Each of the 
biographies should look like this:

["1. Susan Steward is from Sidney. She has a dog named Charlie. 
 Her favorite color is green and her favorite food is pizza. Her 
 siblings are John, Jerry, and Samantha.", "2. Daniel Longbottom is..." etc.]

 It should use the following format, which you can use as a template: 

"[index number + 1]. [person's full name] is from [hometown]. 
 [Appropriate pronoun] has a [pet species] named [pet name]. 
 [Appropriate pronoun] favorite color is [favorite color] and 
 [appropriate pronoun] favorite food is [favorite food]. 
 [Appropriate pronoun] siblings are [siblings]."

Hint: for the arrays inside of the objects, it may be helpful to use the map method 
additional times, and it may be helpful to use the index and array arguments. The "this" 
argument is unnecessary. 

/*

FILTER
*/

let winners = ["Anna", "Beth", "Cara"]

let gold = winners.filter((w, index) => index == 0)
let silver = winners.filter((l, index) => index == 1)
let bronze = winners.filter((r, index) => index == 2)

console.log(`Gold winner: ${gold}, Silver Winner: ${silver}, Bronze Winner: ${bronze}`)

// "Gold winner: Anna, Silver Winner: Beth, Bronze Winner: Cara"

/*
REDUCE 

DESCRIPTION:
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/
function positiveSum(arr) {
   return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}

/* 
EVERY

The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
*/

function checkPositive(arr) {
  

  return arr.every(val => val > 0);
  /* OR 
  return arr.every(function(value) {
    return value > 0;  */
  
}
checkPositive([1, 2, 3, -4, 5]);

// SYNTAX every(function (element, index, array) { /* … */ }, thisArg)




/*

CURRYING AND PARTIAL APPLICATION
The arity of a function is the number of arguments it requires. Currying a function means to convert a function of N arity into N functions of arity 1.

In other words, it restructures a function so it takes one argument, then returns another function that takes the next argument, and so on.

Here's an example:
*/
function unCurried(x, y) {
  return x + y;
}

function curried(x) {
  return function(y) {
    return x + y;
  }
}

const curried = x => y => x + y

curried(1)(2)

/*
curried(1)(2) would return 3.

This is useful in your program if you can't supply all the arguments to a function at one time. You can save each function call into a variable, which will hold the returned function reference that takes the next argument when it's available. Here's an example using the curried function in the example above:
*/
const funcForY = curried(1);
console.log(funcForY(2)); // 3
/*
Similarly, partial application can be described as applying a few arguments to a function at a time and returning another function that is applied to more arguments. Here's an example:

function impartial(x, y, z) {
  return x + y + z;
}

const partialFn = impartial.bind(this, 1, 2);
partialFn(10); // 13 */
