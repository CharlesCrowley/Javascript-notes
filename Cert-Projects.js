/*
Palindrome Checker ***
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.
*/

function palindrome(str) {
  str = str.toLowerCase().replace(/[^A-Za-z0-9]+/g, ""); // we want to replace all non-alphanumerical characters.
  let reversed = str.split("").reverse().join(""); 
  return str === reversed;
}
console.log(palindrome("almosttsomla.")) // true

/*
Roman Numeral Converter
Convert the given number into a roman numeral.
*/ 

function convertToRoman(num) {
    var decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
    var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
    var romanized = '';

    for (var index = 0; index < decimalValue.length; index++) {
        while (decimalValue[index] <= num) {
            romanized += romanNumeral[index];
            num -= decimalValue[index];
        }
    }
    return romanized;
}

console.log(convertToRoman(83)); //LXXXIII
console.log(convertToRoman(1023)); //MXXIII

/*
Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

function rot13(input) {
  let output = "";

  for (let char of input) {
    let charCode = char.charCodeAt(0);
    console.log(charCode)
    let shiftedCode = charCode;
    
    if (/[A-Z]/.test(char)) {
      shiftedCode = (charCode - 65 + 13) % 26 + 65;
    }
    
    let shiftedChar = String.fromCharCode(shiftedCode);
    output += shiftedChar;
  }
  
  return output;
}

console.log(rot13("HELLO"));
/*
Telephone Number Validator
Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. 
The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. 
Your job is to validate or reject the US phone number based on any combination of the formats provided above. 
The area code is required. If the country code is provided, you must confirm that the country code is 1. 
Return true if the string is a valid US phone number; otherwise return false.

*/

function telephoneCheck(str) {
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
  /*
  ^ matches the start of the string
  (1\s?)? matches an optional "1" at the beginning, followed by an optional space
  (\(\d{3}\)|\d{3}) matches either a three-digit number enclosed in parentheses, or a plain three-digit number
  [\s-]? matches an optional space or hyphen
  \d{3} matches three digits
  [\s-]? matches an optional space or hyphen
  \d{4} matches four digits
  $ matches the end of the string
  */
  return regex.test(str);
}

telephoneCheck("555-555-5555");
