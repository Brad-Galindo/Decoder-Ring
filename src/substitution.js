// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope




 // This function checks if a string has any duplicate characters.
 function hasDuplicates(string) {
  let charMap = {};
  for (let char of string) {
    if (charMap[char]) {
      return false;
    } else {
      charMap[char] = true;
    }
  }
  return true;
}

// This is the substitution function that takes in an input string, an alphabet string, and a boolean value for encoding.
function substitution(input, alphabet, encode = true) {
  // This code checks if the alphabet string is valid for substitution.
  if (!alphabet || alphabet.length < 26 || !hasDuplicates(alphabet) || alphabet === "") {
    return false;
  }

  // These variables are initialized for later use.
  let phrase = "";
  const normalAlphabet = `abcdefghijklmnopqrstuvwxyz`
  const alphabetTable = {};

  // This loop creates an object that maps each character in the alphabet string to a character in the normal alphabet.
  for (let i = 0; i < alphabet.length; i++) {
    alphabetTable[alphabet[i]] = normalAlphabet[i];
  };

  // This line converts the input string to lowercase.
  input = input.toLowerCase();

  // This loop iterates through each character in the input string and performs substitution based on the encode boolean value.
  for (let i = 0; i < input.length; i++) {
    if (input[i] === " ") {
      phrase += " ";
    } 
    else if (encode) {
      // This loop finds the corresponding character in the alphabetTable object and adds it to the phrase string.
      for (const key in alphabetTable) {
        if (input[i] === alphabetTable[key]) {
          phrase += key;
        }
      }
    }
    else {
      // This loop finds the corresponding character in the alphabetTable object and adds it to the phrase string.
      for (const key in alphabetTable){
        if (input[i] === key){
          phrase += alphabetTable[key];
        }
      }
    }
  }
  return phrase;
}

return {
  substitution,
};
})();

// This exports the substitution function from the module.
module.exports = {
substitution: substitutionModule.substitution
};