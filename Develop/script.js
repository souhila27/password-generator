// Assignment code here
function generatePassword() {
  // ask the user for length
  var passwordLength = window.prompt("what is the length of the password? ");
  // -- if passwordLength is less than 8 
  if (passwordLength <= 8){
    passwordLenghth = window.prompt( "put the length password more then 8 characters" );
  }
  // -- --  prompt them for password length again
  // -- if passwordLength is more than 288 
  if (passwordLength >= 128){
    passwordLength = window.prompt( "put the length password less then 128 characters" );
  }
  console.log(passwordLength);
  // -- --  prompt them for password length again
  // ask the user if they want lowercase
  var doTheyWantLowercase = window.confirm("do you want lowercase?(ok for yes, cancel for no)  ");
  console.log(doTheyWantLowercase);
  // ask the user if the want uppercase
  var doTheyWantUppercase = window.confirm("do you want Uppercase ?(ok for yes, cancel for no)  ");
  console.log(doTheyWantUppercase);
  // ask the user if they want numbers
  var doTheyWantNumbers = window.confirm("do you want Numbers?(ok for yes, cancel for no)  ");
  console.log(doTheyWantNumbers );
  // ask the user if they want special char
  var doTheyWantSpecialCharacter = window.confirm("do you want Special character?(ok for yes, cancel for no)  ");
  console.log(doTheyWantSpecialCharacter);

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
