//ASSIGNMENT CODE HERE

//VARIABLES

  //Character Type Options 
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var special = "!@#$%^&*_-+=";
  


  //DOM Elements
  var passwordText = document.getElementById("password");
  var generateBtn = document.getElementById("generate");


  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");


//FUNCTIONS
  //WRITE PASSWORD FUNCTION (to the #password input)
  function writePassword() {

    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  }

  //SELECT CRITERIA FUNCTION
  function selectCriteria() {
    //Password Length
    var passwordLength = window.prompt (
      "Please enter number of characters for password length. (Minimum length = 8, Maximum length = 128)"
    );

    //If Pass, proceed to other criteria selection
    if (8 <= passwordLength && passwordLength <= 128) {

      //lowercase selection
      var promptLowercase = window.prompt (
        "Would you like to include lowercase characters? Enter 'YES' or 'NO'."
      )

      //uppercase selection

    }
  }

  //GENERATE PASSWORD FUNCTION
  function generatePassword() {

    //Select Criteria
    selectCriteria();
    

  }



//ACTIONS

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
