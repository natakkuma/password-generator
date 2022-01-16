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


  //CRITERIA START FUNCTION - 1. Select Password Length
  function criteriaStart() {

    var passwordLength = window.prompt (
      "Please enter number of characters for password length. (Minimum length = 8, Maximum length = 128)"
    );

    //If Pass, proceed to other criteria selection
    if (8 <= passwordLength && passwordLength <= 128) {
      console.log( 'Your password will be' + passwordLength + 'characters.')

      //proceed to lowercase selection
      lowercaseCriteria();

    }

    else if (passwordLength < 8) {

      window.alert("Password length must be at least 8 characters.");
      criteriaStart();

    }

    else if (passwordLength > 128) {

      window.alert ("Password length must be less than 129 characters.");
      criteriaStart();
    }

  }

  //LOWERCASE CRITERIA FUNCTION - 2. Select Lowercase
  function lowercaseCriteria() {

    var promptLowercase = window.prompt (
      "Would you like to include lowercase characters in the password? Enter 'YES' or 'NO'."
    );

    if (promptLowercase === "yes" || promptLowercase === "YES" ) {

      window.alert ("Your password will include lowercase characters.");
      uppercaseCriteria();

    }

    else if (promptLowercase === "no" || promptLowercase === "NO") {

      window.alert ("Your password will NOT include lowercase characters.");
      uppercaseCriteria();

    }

    else {

      window.alert ("Please enter 'YES' or 'NO'.");
      lowercaseCriteria();

    }

  }


  //UPPERCASE CRITERIA FUNCTION - 3. Select Uppercase
  function uppercaseCriteria() {

    var promptUppercase = window.prompt (
      "Would you like to include UPPERCASE characters in the password? Enter 'YES' or 'NO'."
    );

    if (promptUppercase === "yes" || promptUppercase === "YES" ) {

      window.alert ("Your password will include UPPERCASE characters.");
      numericCriteria();

    }

    else if (promptUppercase === "no" || promptUppercase === "NO") {

      window.alert ("Your password will NOT include UPPERCASE characters.");
      numericCriteria();

    }

    else {

      window.alert ("Please enter 'YES' or 'NO'.");
      uppercaseCriteria();

    }

  }


    //NUMERIC CRITERIA FUNCTION - 4. Select Numbers
    function numericCriteria() {

      var promptNumeric = window.prompt (
        "Would you like to include numbers in the password? Enter 'YES' or 'NO'."
      );
  
      if (promptNumeric === "yes" || promptNumeric === "YES" ) {
  
        window.alert ("Your password will include numbers.");
        specialCriteria();
  
      }
  
      else if (promptNumeric === "no" || promptNumeric === "NO") {
  
        window.alert ("Your password will NOT include numbers.");
        specialCriteria();
  
      }
  
      else {
  
        window.alert ("Please enter 'YES' or 'NO'.");
        numericCriteria();
  
      }
  
    }

  

    //SPECIAL CRITERIA FUNCTION - 5. Select Special Character
    function specialCriteria() {

      var promptSpecial = window.prompt (
        "Would you like to include special characters in the password? Enter 'YES' or 'NO'."
      );
  
      if (promptSpecial === "yes" || promptSpecial === "YES" ) {
  
        window.alert ("Your password will include special characters.");
        
  
      }
  
      else if (promptSpecial === "no" || promptSpecial === "NO") {
  
        window.alert ("Your password will NOT include special characters.");
        
  
      }
  
      else {
  
        window.alert ("Please enter 'YES' or 'NO'.");
        specialCriteria();
  
      }
  
    }

  //Select Criteria
  function selectCriteria() {
    
    window.alert ("You will have options to select password criteria for length, lowercase, uppercase, numeric, and special characters. At least one character type should be selected.");

    criteriaStart();
    

     

      

        

        




    
  }

  //GENERATE PASSWORD FUNCTION
  function generatePassword() {

    //Select Criteria
    selectCriteria();
    

  }



//ACTIONS

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
