//code taken from function, writePassword()

var passwordText = document.querySelector("#password");
passwordText.value = password;
// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordSize = window.prompt("How many characters, between 8 and 128, would you like in your password?");  
  if (passwordSize < 8 || passwordSize > 128 || passwordSize || passwordSize != (/^[0-9.,]+$/)) {
    window.alert("Sorry, you have entered an invalid option. Please try again.")
    writePassword(); 
  } 
  var lowerCaseConfirm = window.confirm("Would you like lowercase characters?");
  var upperCaseConfirm = window.confirm("Would you like upper case characters?");
  var numberConfirm = window.confirm("Would you like numbers?");
  var specialConfirm = window.confirm("Would you like special characters?");

  var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", 
                  "i", "j", "k", "l", "m", "n", "o", "p", "q", 
                  "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
  var upperChar = lowerChar.toUpperCase;
  var numbChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", 
                  "`", "~", "[", "]", "{", "}", ";", ":", "'", "", 
                  ",", "<", ".", ">", "/", "?", ];


var generatePassword = function() {
    if (lowerCaseConfirm) {
      //CODE USING LOWER CASE
    } else {
      //CODE NOT USING LOWER CASE
    }
    if (upperCaseConfirm) {
      //CODE USING UPPER CASE
    } else {
      //CODE NOT USING UPPER CASE
    }
    if (numberConfirm) {
      //CODE USING NUMBERS
    } else {
      //CODE NOT USING NUMBERS
    }
    if (specialConfirm) {
      //CODE USING SPECIAL CHARACTERS
    } else {
      //CODE NOT USING SPECIAL CHARACTERS
    }
    var password = generatePassword();
    window.alert(password);
  }

  for (i = 0; i < passwordSize; i++) {

  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);