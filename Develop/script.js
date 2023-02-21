// Assignment code here
// create function to generate the password, add the charset values and desired length
// then use forloop and math. to actually generate the password based on these values above
// make sure to include everything you want processed in this funciton/method wrapped in the curly braces
//remember to write in return then what you want to return after this computes

//write code that displays options in browser for user

//get range for length and charset array so options display/interact right


 // validate choice.legth within 8-128
 // validate user input, handle extra info in else conditions-returns
 // make sure one char type is selected

 

function generatePassword(){

  var password = "";
  var length = [8-128];
  var charset = ["abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()"];
  var options = ["Yes" + "No"];

  //first prompt
  var userChoice = window.prompt("Choose password length.")
  //write test conditions for length in first userChoice question, then it displays user choice

  if (userChoice ) {
    //validate 
  } else if (!userChoice.length) {
    window.alert("Try again!");
    //keep return here to make user redo their inputs correctly
    return;
  } 
  
  //second prompt
  var userChoice2 = window.prompt("Include special characters?")
  //write test conditions for user input choice2 display user choice

  if (userChoice2.options === true) {
    //validate selection
  } else if (!userChoice2.options) {
    //validate deselection 
  }
  
  //third prompt
  var userChoice3 = window.prompt("Include numerical characters?")

  if (userChoice3.options === true) {
    //validate
  } else if (!userChoice3.options) {
    //deselect
  }

  //fourth prompt
  var userChoice4 = window.prompt("Include lowercase characters?")

  if (userChoice4.options === true) {
    //validate input 
  } else if (!userChoice4.options) {
    //validate deselection
  }

  //fifth prompt
  var userChoice5 = window.prompt("Include uppercase characters?")
  
  if (userChoice5.options) {
    //validate input
  } else if (!userChoice5.options) {
    //validate deselection
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
//define generatePassword
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);











