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




/*

FILTER

REDUCE 



*/
