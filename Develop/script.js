// Assignment code here
// create function to generate the password, add the charset values and desired length
// then use forloop and math. to actually generate the password based on these values above
// make sure to include everything you want processed in this funciton/method wrapped in the curly braces
//remember to write in return then what you want to return after this computes
function generatePassword(){
  var length = 8;
  var charset = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var password = "";

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
