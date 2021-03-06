// Assignment code here

//Create an object with all possible characters inside strings
const keys = {
  lower: "abcdefghijklmnopqrstuvwxyz",
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  number: "0123456789",
  symbol: "!@#$%^&*(){}[]=<>/,.",
  }
  
  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");
  
  //Defining generatePassword function
  function generatePassword() {
  
    //Begin by assigned a variable with no string 
    var generatedPassword = "";
  
    //prompt the user with password length first
    var length = prompt("Please enter the number of characters you want for your new password. Characters must be more than 8 but fewer than 128");
  
      //make sure the password length is between 8 and 128
      while (length < 8 || length > 128){
        window.alert("Please input a number that is more than 8 but fewer than 128");
        var length = prompt("Please enter the number of characters you want for your new password. Characters must be more than 8 but fewer than 128")
      }
      //notify the user of their choice in length
      window.alert("Your password will have " + length + " characters.");
  
    //prompt the user whether they want lowercase, uppercase, numbers, and/or special characters in their password
    var lowerCase = confirm("Do you want lowercase characters in your password?");
    var upperCase = confirm("Do you want uppercase characters in your password?");
    var numbers = confirm("Do you want numeric characters in your password?");
    var special = confirm("Do you want special characters in your password?");  
  
    //validate user input that at least one character type is being selected
    while(!lowerCase && !upperCase && !numbers && !special){
      window.alert("Please include one criteria for your password");
      var lowerCase = confirm("Do you want lowercase characters in your password?");
      var upperCase = confirm("Do you want uppercase characters in your password?");
      var numbers = confirm("Do you want numeric characters in your password?");
      var special = confirm("Do you want special characters in your password?");  
    }
    //create a string containing all the selected criteria by combining the strings from above based on user choice
    var passwordCriteria = "";
    if(lowerCase) {
      passwordCriteria = passwordCriteria.concat(keys.lower);
      window.alert("You have selected lowercase characters for your password!")
    };
    if(upperCase){
      passwordCriteria = passwordCriteria.concat(keys.upper);
      window.alert("You have selected uppercase characters for your password!")
    };
    if(numbers){
      passwordCriteria = passwordCriteria.concat(keys.number);
      window.alert("You have selected numeric characters for your password!")
    };
    if(special){
      passwordCriteria = passwordCriteria.concat(keys.symbol);
      window.alert("You have selected special characters for your password!")
    };
  
    //iterate a random character from the new string "passwordCriteria" as many times as the value of "length" and then return the value 
    for (i = 0; i < length; i++){
      var generatedPassword = generatedPassword + passwordCriteria[Math.floor(Math.random() * passwordCriteria.length)];
      };
  return generatedPassword;
  };
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  };
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);