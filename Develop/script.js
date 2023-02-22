// Assignment code here
// create function to generate the password, add the charset values and desired length
// then use forloop and math. to actually generate the password based on these values above
// make sure to include everything you want processed in this funciton/method wrapped in the curly braces
//remember to write in return then what you want to return after this computes


//window.confirm removes text bar only allows user click ok or cancel

// validate choice.legth within 8-128
// validate user input, handle extra info in else conditions-returns
// make sure one char type is selected


//write code that displays options in browser for user
 
//make it display
document.getElementById("password").value = password;
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
//takes prompt info and makes the random password


function thePrompts(){

  var charset = [];
  var userChoice = [8];
  var userChoice2 = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+"];
  var userChoice3 = ["1","2","3","4","5","6","7","8","9","0"]
  var userChoice4 = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var userChoice5 = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];



  //first prompt
  // the parseInt enclosing the first prompt, will make the answer's data type a number

  userChoice = parseInt(prompt("Choose password length."));
 //write test conditions for length in first userChoice question

   if (isNaN(userChoice) || userChoice < 8 || userChoice > 128) {
    window.alert("Try again!");
    //keep this return to make user try again
    return false;
  } 
  
  //second prompt
  //if test their choice and the concat adds their choice to the chosen empty charset array to be selected from for random password gen.
  if (userChoice2 = window.confirm("Include special characters?")) {
    charset = charset.concat(userChoice2);
  }
  
  //third prompt
  if (userChoice3 = window.confirm("Include numerical characters?")) {
    charset = charset.concat(userChoice3);
  }

  //fourth prompt
  if (userChoice4 = window.confirm("Include lowercase characters?")) {
    charset = charset.concat(userChoice4);
  }

  //fifth prompt
  if (userChoice5 = window.confirm("Include uppercase characters?")) {
    charset = charset.concat(userChoice5);
  }
  //
  return true;
};


function generatePassword(){

  var password = "";
  for (var i = 0, n = charset.userChoice; i<userChoice; ++i) {
    var randomNum = Math.floor(Math.random() * charset.userChoice);
    password = password + charset[randomNum]; 
  }
  
  return password;
};


function writePassword() {
  var getPrompts = thePrompts();
  var passwordText = document.querySelector("#password");
  var password = generatePassword();
  

  if (getPrompts) {
    passwordText.value = password;
  } else {
    passwordText.value = "";
  }
};


//takes info from prompts and uses the expression in the for loop to generate the random password




//code for prompts














