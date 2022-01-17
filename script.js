//ASSIGNMENT CODE HERE

//VARIABLES

  //Character Type Options 
    //lowercase
    //uppercase
    //numeric
    //special
  

  //DOM Elements
  var passwordText = document.getElementById("password");
  var generateBtn = document.getElementById("generate");


  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");


//FUNCTIONS
  //WRITE PASSWORD FUNCTION (to the #password input)
  function writePassword() {

    var passwordText = document.querySelector("#password");

    var password = generatePassword();
    passwordText.value = password;
    
  }




 
  //GENERATE PASSWORD FUNCTION
  function generatePassword() {

    //Instructions Alert
    window.alert ("You will have options to select password criteria for length, lowercase, uppercase, numeric, and special characters. At least one character type should be selected.");


      // 1. Select Password Length

        var passwordLength = window.prompt (
          "Please enter number of characters for password length. (Minimum length = 8, Maximum length = 128)"
        );

        //If Pass, proceed to other criteria selection
        if (8 <= passwordLength && passwordLength <= 128) {
          console.log( 'Your password will be' + passwordLength + 'characters.')

        }

        else if (passwordLength < 8) {

          window.alert("Password length must be at least 8 characters.");
          return generatePassword();

        }

        else if (passwordLength > 128) {

          window.alert ("Password length must be less than 129 characters.");
          return generatePassword();
        }

        else {
          window.alert ("Password length must be 8 to 128 characters.");
          return generatePassword();
        }

    

      // 2. Select Lowercase Criteria

        var promptLowercase = window.prompt (
          "Would you like to include lowercase characters in the password? Enter 'YES' or 'NO'."
        );

        if (promptLowercase === "yes" || promptLowercase === "YES" ) {

          window.alert ("Your password will include lowercase characters.");
          var lowercase = "abcdefghijklmnopqrstuvwxyz";

        }

        else if (promptLowercase === "no" || promptLowercase === "NO") {

          window.alert ("Your password will NOT include lowercase characters.");
          var lowercase = " ";

        }

        else {

          window.alert ("Please enter 'YES' or 'NO'.");
          return generatePassword();

        }


      //3. Select Uppercase Criteria
    
        var promptUppercase = window.prompt (
          "Would you like to include UPPERCASE characters in the password? Enter 'YES' or 'NO'."
        );

        if (promptUppercase === "yes" || promptUppercase === "YES" ) {

          window.alert ("Your password will include UPPERCASE characters.");
          var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        }

        else if (promptUppercase === "no" || promptUppercase === "NO") {

          window.alert ("Your password will NOT include UPPERCASE characters.");
          var uppercase = " ";

        }

        else {

          window.alert ("Please enter 'YES' or 'NO'.");
          return generatePassword();

        }

  


      //4. Select Numbers Criteria

        var promptNumeric = window.prompt (
          "Would you like to include numbers in the password? Enter 'YES' or 'NO'."
        );
    
        if (promptNumeric === "yes" || promptNumeric === "YES" ) {
    
          window.alert ("Your password will include numbers.");
          var numeric = "0123456789";

        }
    
        else if (promptNumeric === "no" || promptNumeric === "NO") {
    
          window.alert ("Your password will NOT include numbers.");
          var numeric = " ";
    
        }
    
        else {
    
          window.alert ("Please enter 'YES' or 'NO'.");
          return generatePassword();
    
        }
  

      //5. Select Special Character Criteria
      
        var promptSpecial = window.prompt (
          "Would you like to include special characters in the password? Enter 'YES' or 'NO'."
        );
    
        if (promptSpecial === "yes" || promptSpecial === "YES" ) {
    
          window.alert ("Your password will include special characters.");
          var special = "!@#$%^&*_-+=";
    
        }
    
        else if (promptSpecial === "no" || promptSpecial === "NO") {
    
          window.alert ("Your password will NOT include special characters.");
          var special = " ";
          
        }
    
        else {
    
          window.alert ("Please enter 'YES' or 'NO'.");
          return generatePassword();
    
        }



    
    //CHECK: Failure to select character type 
    if ( promptLowercase == "no" && promptUppercase == "no" && promptNumeric == "no" && promptSpecial == "no") {

      window.alert ("No character types were selected. Please select at least 1 character type: lowercase, uppercase, numeric, and/or special.");

      return generatePassword();
    }

    else { 

      var selectedCharacters = lowercase + uppercase + numeric + special;

      var password = " ";

      for (var i = 0; i<= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * selectedCharacters.length);
        password += selectedCharacters.substring(randomNumber, randomNumber +1);
      }

        document.getElementById("password").value = password;
        window.alert("Your password is" + password);


    }


  }



//ACTIONS

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
