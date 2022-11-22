// Assignment Code
//you should be able to click the button
//prompt for password criteria
//criteria should include the length and alphanumeric parameters
//input should be validated
//generate a password
//display the password
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){

  //ask password min
  var passwordMinLength = prompt("Minimum password length?");
  passwordMinLength = parseInt(passwordMinLength);
  if (!Number.isFinite(passwordMinLength)){
    return "invalid input";
  }

  //ask password max
  var passwordMaxLength = prompt("Maximum password length?");
  passwordMaxLength = parseInt(passwordMaxLength);
  if (!Number.isFinite(passwordMaxLength)){
    return "invalid input";
  }
  //ask if lower case should be included
  var passwordLowerCase = prompt("Is lower case allowed? (Y/N)");
  if (!(passwordLowerCase === "Y" || passwordLowerCase === "N")){
    return "invalid input";
  }
  //ask if upper case should be included
  var passwordUpperCase = prompt("Is upper case allowed? (Y/N)");
  //ask if numbers should be included
  var passwordNumbers = prompt("Are numbers allowed? (Y/N)")
  //ask if special characters ashould be included
  var passwordSpecial = prompt("Are special characters allowed? (Y/N)");

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
