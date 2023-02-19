// Assignment code here
// create function to generate the password, add the charset values and desired length
// then use forloop and math. to actually generate the password based on these values above
// make sure to include everything you want processed in this funciton/method wrapped in the curly braces
//remember to write in return then what you want to return after this computes

//write code that displays options in browser for user

//get range for length and charset array so options display/interact right

function generatePassword(){
  var options = ["uppercase" , "lowercase" , "special"];
  var length = [8-128];
  var charset = ["abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()"];
  var password = "";

  var userChoice = window.prompt("Choose length of password between 8-128 characters.")
  //write test conditions for length in first userChoice question, then it displays user choice

if (userChoice.length) {
    window.alert("You've chosen" + userChoice +".")
  } else if (!userChoice.length) {
    window.alert("Try again!");
  } 

  var userChoice2 = window.prompt("Which character types included in password? ex. uppercase, lowercase, special")
//write test conditions for user input choice2 display user choice

if (userChoice2.options) {
    window.alert("You've chosen" + userChoice2 + ".")
  } else if (userChoice2.options[1]) {
    window.alert("You've chosen" + userChoice2 + ".")
  } else if (userChoice2.options[2]) {
    window.alert("You've chosen" + userChoice2 + ".")
  } 

for (var i = 0, n = charset.length; i<length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n));
  }
  return password;  

};

//make it display
document.getElementById("password").value = password;
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
