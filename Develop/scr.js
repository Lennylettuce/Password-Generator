var userChoice1 = 8;
var choiceCharset = [];


var userChoice2 = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+"];
var userChoice3 = ["1","2","3","4","5","6","7","8","9","0"];
var userChoice4 = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var userChoice5 = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

 

//step one, tie button to html source
var generateBtn = document.querySelector("#generate");

//Add event listener to generate button
//step two, call button's write function below inside the event listener (user 'click', calls function for button)
generateBtn.addEventListener("click" , writePassword);


//Write password to the #password input
function writePassword(){
        //tells the write function to go listen to what answers prompt came back with and add them to the generate function 
        //(both write and generate functions need the info from prompts in them, this is done by calling info from each in both functions)
    var getPrompts = thePrompts();
    var passwordText = document.querySelector("#password");

    if(getPrompts){
    var passwordNew = generatePassword();
    
        //changed the name of the password in write function because i needed one in generate function
    passwordText.value = passwordNew; 
    } else {
        passwordText.value = "";
    }
}

//plug prompts in here
function generatePassword(){
    var password = "";

    for(var i = 0; i < userChoice1; i++) {
        var randomVal = Math.floor(Math.random() * choiceCharset.length);
        password = password + choiceCharset[randomVal];

        //password= is created by it's empty self plus whatever random value is generated by the above alg.
        //then it stores that value in all the other password = sections
        //make this make sense!
    }
    return password;

}

//use parseInt to convert first answer data type to number
function thePrompts(){
    choiceCharset = [];
    userChoice1 = parseInt(prompt("How many characters to include in password?"));

    if(isNaN(userChoice1)|| userChoice1 <8 || userChoice1 > 128) {
        //checking for false input from user
        alert("Please try again.");
        //return stops alg.
        return false;
    }

    if(confirm("Include special characters?")) {
        choiceCharset = choiceCharset.concat(userChoice2);
    }

    if(confirm("Include numerical characters?")) {
        choiceCharset = choiceCharset.concat(userChoice3);
    }

    if(confirm("Include lowercase characters?")) {
        choiceCharset = choiceCharset.concat(userChoice4);
    }

    if(confirm("Include uppercase characters?")) {
        choiceCharset = choiceCharset.concat(userChoice5);
    }
        return true; 
        // return true stops this alg and 
        //these statements takes the conditions that each answer is yes or no, then takes the items from each array 
        // and adds or doesnt add them to the choiceCharset array which will form the random password
        //each confirm(question) is a yes or no which doesn't require you to test the conditions just run them
}


// Ill keep my old script.js file in here to show the difference of how i structured my first one: my first few drafts/commits were done basically alone+classwork to guide
//then I added info from video souce tagged in README.md 
// then I got overwhelmed/kept moving my funcitons/variables to different parts of page and decided to scrap my old js file
//I started over with a fresh file named scr.js and rewrote the starter code
// then I used the same help from video source listed in README.md to rework the code i had worked on, commented on, busted my brain over for hours
// with the new fresh structure/less clutter of my own making + video help i rewrote the code in 30min and it worked
//my last task since this is complete is to figure out what the heck i did wrong in the first draft.
//YAY!!