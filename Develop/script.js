//code taken from function, writePassword()

var passwordText = document.querySelector("#password");
passwordText.value = password;
// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordSize = window.prompt("Between 8 and 128, how many characters would you like in your password?");  
  
  // PASSWORD PROMPTS / PARAMETERS
  if (passwordSize < 8 || passwordSize > 128 || passwordSize || passwordSize != (/^[0-9.,]+$/)) {
    window.alert("Sorry, you have entered an invalid option. Please try again.")
    writePassword(); 
  } 
  var lowerCaseConfirm = window.confirm("Would you like lowercase characters?");
  var upperCaseConfirm = window.confirm("Would you like upper case characters?");
  var numberConfirm = window.confirm("Would you like numbers?");
  var specialConfirm = window.confirm("Would you like special characters?");

  // CHARACTER TABLE
  var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", 
                  "i", "j", "k", "l", "m", "n", "o", "p", "q", 
                  "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
  var upperChar = lowerChar.toUpperCase;
  var numbChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", 
                  "`", "~", "[", "]", "{", "}", ";", ":", "'", '"', 
                  ",", "<", ".", ">", "/", "?" ];
 
  for (i = 0; i < passwordSize; i++) {
    
    // RANDOMIZES HOW MUCH OF EACH CHARACTER
    var randomizeLower = (0.5 > Math.random());
    var randomizeUpper = (0.5 > Math.random());
    var randomizeNumb = (0.5 > Math.random());
    var randomizeSpec = (0.5 > Math.random());

    // PASSWORD GENERATION FUNCTION
    var generatePassword = function() {
      if (lowerCaseConfirm && randomizeLower) {
        var lowerCharInput = Math.floor(Math.random()*lowerChar.length);
      } 
      if (upperCaseConfirm && randomizeUpper) {
        var upperCharInput = Math.floor(Math.random()*upperChar.length);
      }
      if (numberConfirm && randomizeNumb) {
        var numbCharInput = Math.floor(Math.random()*numbChar.length);
      }
      if (specialConfirm && randomizeSpec) {
        var specCharInput = Math.floor(Math.random()*numbSpec.length);
      }
    }
  }
  
  var password = generatePassword();
      window.alert(password);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);