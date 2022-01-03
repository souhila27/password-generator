var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "+", "?", "/", "-", ":", ";", "[", "]", "{", "}", ".", "<", ">", "=", "_", "`", "|", "~"];
var availChar = [];

function generatePassword() {
  // ask the user for length
  var passwordLength = parseInt(prompt("Enter the number of characters between 8 and 128"));
 
  if (passwordLength < 8) {
    passwordLength = window.prompt("put the length password more then 8 characters");
  }
  
  // -- if passwordLength is more than 128 
  if (passwordLength > 128) {
    passwordLength = prompt("put the length password less then 128 characters");
  }
  console.log(passwordLength);
  // -- --  prompt them for password length again
  // ask the user if they want lowercase
  var doTheyWantLowercase =confirm("do you want lowercase?(ok for yes, cancel for no)");
  console.log(doTheyWantLowercase);
  // ask the user if the want uppercase
  var doTheyWantUppercase =confirm("do you want Uppercase ?(ok for yes, cancel for no)");
  console.log(doTheyWantUppercase);
  // ask the user if they want numbers
  var doTheyWantNumbers =confirm("do you want Numbers?(ok for yes, cancel for no)");
  console.log(doTheyWantNumbers);
  // ask the user if they want special char
  var doTheyWantSpecialCharacter =confirm("do you want Special character?(ok for yes, cancel for no)");
  console.log(doTheyWantSpecialCharacter);

 
  // if they want a number
  if(doTheyWantNumbers === true){
    availChar = availChar.concat(num);;
  };
  
  // if they want a spec char
  // -- add spec char
  if(doTheyWantSpecialCharacter === true){
    availChar = availChar.concat(special);;
  };

  // if they want a lowercase letter
  if(doTheyWantLowercase === true){
    availChar = availChar.concat(lowerCase);;
  };
  
  // if they want uppercase
  if(doTheyWantUppercase === true){
    availChar = availChar.concat(upperCase);;
  };
  // -- add some uppercase letters

  // for each char in the passwordLength
  var passwordString = '';
  for ( var i = 0; i < passwordLength; i++ ){
    passwordString += availChar[Math.floor(Math.random() * (availChar.length))];
  };
  // -- randomly select from our list of avail char
  

  return passwordString;

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
