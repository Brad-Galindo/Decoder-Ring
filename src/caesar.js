// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope



  function caesar(input, shift, encode = true) {
    try {
      // Check if shift is valid
      if (!shift || shift === 0 || shift < -25 || shift > 25) {
        throw false;
      }
    } catch (error) {
      // If shift is not valid, return false
      return false;
    }
  
    let phrase = '';
  
    // Check if encode is true or false
    if (encode === true || encode === false) {
      for (let i = 0; i < input.length; i++) {
        let asciiNumber = input[i].toLowerCase().charCodeAt();
        // Check if character is a letter
        if (asciiNumber >= 97 && asciiNumber <= 122) {
          if (encode === true) {
            // Encode character
            asciiNumber = ((asciiNumber - 97 + shift) % 26 + 26) % 26 + 97;
          } else if (encode === false) {
            // Decode character
            asciiNumber = ((asciiNumber - 97 - shift) % 26);
            if (asciiNumber < 0) {
              asciiNumber += 26;
            }
            asciiNumber += 97;
          }
        }
        // Add character to phrase
        phrase += String.fromCharCode(asciiNumber);
      }
    }
    return phrase;
  }
  
  return {
    caesar,
  };
  })();
  
  // Export caesar function
  module.exports = {
    caesar: caesarModule.caesar
  };