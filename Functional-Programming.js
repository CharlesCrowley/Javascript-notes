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
  

/*

FILTER

REDUCE 



*/
