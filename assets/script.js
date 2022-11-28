var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

  var passwordMinLength = prompt("Minimum password length?");
  passwordMinLength = parseInt(passwordMinLength);
  if (!Number.isFinite(passwordMinLength) || passwordMinLength < 1) {
    return "invalid input";
  }

  var passwordMaxLength = prompt("Maximum password length?");
  passwordMaxLength = parseInt(passwordMaxLength || passwordMaxLength >= passwordMinLength);
  if (!Number.isFinite(passwordMaxLength)) {
    return "invalid input";
  }
  var passwordLowerCase = prompt("Is lower case allowed? (Y/N)");
  if (!(passwordLowerCase === "Y" || passwordLowerCase === "N")) {
    return "invalid input";
  }
  var passwordUpperCase = prompt("Is upper case allowed? (Y/N)");
  if (!(passwordUpperCase === "Y" || passwordUpperCase === "N")) {
    return "invalid input";
  }

  var passwordNumbers = prompt("Are numbers allowed? (Y/N)")
  if (!(passwordNumbers === "Y" || passwordNumbers === "N")) {
    return "invalid input";
  }
  var passwordSpecial = prompt("Are special characters allowed? (Y/N)");
  if (!(passwordSpecial === "Y" || passwordSpecial === "N")) {
    return "invalid input";
  }
  if (passwordLowerCase + passwordUpperCase + passwordNumbers + passwordSpecial === "NNNN") {
    return "invalid input";
  }

  var allCharacters = [];
  if (passwordNumbers === "Y") {
    for (var i = 0; i <= 9; i++) {
      allCharacters.push(i);
    }
  }
  if (passwordLowerCase === "Y") {
    for (var i = 97; i <= 122; i++) {
      var asciiChar = String.fromCharCode(i);
      allCharacters.push(asciiChar);
    }
  }
  if (passwordUpperCase === "Y") {
    for (var i = 65; i <= 90; i++) {
      var asciiChar = String.fromCharCode(i);
      allCharacters.push(asciiChar);

    }
  }
  if (passwordSpecial === "Y") {
    for (var i = 32; i <= 47; i++) {
      var asciiChar = String.fromCharCode(i);
      allCharacters.push(asciiChar);

    }

  }

  var passwordFinalLength = Math.floor(Math.random() * passwordMaxLength) + passwordMinLength;
  var passwordFinal = "";
  for (let i = 0; i < passwordFinalLength; i++) {
    var singleCharacter = allCharacters[Math.floor(Math.random() * allCharacters.length)];
    passwordFinal = singleCharacter + passwordFinal;
  }
  return passwordFinal;


}

generateBtn.addEventListener("click", writePassword);
