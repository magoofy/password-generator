// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordSize = parseInt(window.prompt("Between 8 and 128, how many characters would you like in your password?"));  

  // PASSWORD PROMPTS / PARAMETERS
  if (passwordSize < 8 || passwordSize > 128 || passwordSize == "" || passwordSize == null || passwordSize == undefined || passwordSize == NaN) {
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
  var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", 
                  "I", "J", "K", "L", "M", "N", "O", "P", "Q", 
                  "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
  var numbChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", 
                  "`", "~", "[", "]", "{", "}", ";", ":", "'", '"', 
                  ",", "<", ".", ">", "/", "?" ];
 
  // ARRAY WHERE CHARACTERS RETURN
  let passwordArray = [];

  while (passwordArray.length < passwordSize) {
    
    // RANDOMIZES HOW MUCH OF EACH CHARACTER
    var randomizeLower = true;
      if (Math.random() > 0.5) {
        randomizeLower = false;
      } 
    var randomizeUpper = true;
      if (Math.random() > 0.5) {
        randomizeUpper = false;
      }
    var randomizeNumb = true;
      if (Math.random() > 0.5) {
        randomizeNumb = false;
      }
    var randomizeSpec = true;
      if (Math.random() > 0.5) {
        randomizeSpec = false;
      }

    // PASSWORD GENERATION FUNCTION
      if (lowerCaseConfirm && randomizeLower && passwordArray < passwordSize) {
        var lowerCharInput = Math.floor(Math.random()*lowerChar.length);
        passwordArray.push(lowerChar[lowerCharInput]);
      } 
      if (upperCaseConfirm && randomizeUpper && passwordArray < passwordSize) {
        var upperCharInput = Math.floor(Math.random()*upperChar.length);
        passwordArray.push(upperChar[upperCharInput]);
      }
      if (numberConfirm && randomizeNumb && passwordArray < passwordSize) {
        var numbCharInput = Math.floor(Math.random()*numbChar.length);
        passwordArray.push(numbChar[numbCharInput]);
      }
      if (specialConfirm && randomizeSpec && passwordArray < passwordSize) {
        var specCharInput = Math.floor(Math.random()*specChar.length);
        passwordArray.push(specChar[specCharInput]);
      }
  }
  
  // DISPLAYS THE PASSWORD
  let password = passwordArray.join("");
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);