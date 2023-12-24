// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope



  function polybius(input, encode = true) {
    // your solution code here



    const hashMap = {
      'a': '11',
      'b': '21',
      'c': '31',
      'd': '41',
      'e': '51',
      'f': '12',
      'g': '22',
      'h': '32',
      'i': '42',
      'j': '42',
      'k': '52',
      'l': '13',
      'm': '23',
      'n': '33',
      'o': '43',
      'p': '53',
      'q': '14',
      'r': '24',
      's': '34',
      't': '44',
      'u': '54',
      'v': '15',
      'w': '25',
      'x': '35',
      'y': '45',
      'z': '55'
    };

    let phrase = "";

    
// This code block performs encoding if the encode boolean value is true.
    if (encode) {
      // This handles capital letters by forcing lowercase on the input
      input = input.toLowerCase();
      // This for loop loops the length of the input and if the hashMap contains the letter it will add it to phrase.
      for (let i = 0; i < input.length; i++) {
        let letter = input[i];
        if (hashMap.hasOwnProperty(letter)) {
          phrase += hashMap[letter];
          // This hangles spaces in the input and returns it to its place in phrase
        } else if (letter === " ") {
          phrase += " ";
        }
      }
      return phrase;
    } else {
      // This handles odd number of input characters when decoding 2 number pairs
      if (input.replace(/\s/g, '').length % 2 !== 0) {
        return false;
      }
      // This loops through input in 2 index increments to ensure number pairs 
      for (let i = 0; i < input.length; i += 2) {

        if (input[i] === " ") {
          // This hangles spaces in the input and returns it to its place in phrase
          phrase += input[i];

          i++;

        }
        // This sets a variable for number and uses 2 seperate index positions
        let number = input.slice(i, i + 2);
        const [key] = Object.entries(hashMap).find(([key, val]) => val === number);
        // This handles the need to have `i` and `j` in the same value
        if (number === '42') {

          phrase += "(i/j)"
        }

        phrase += key;

      }
      return phrase;
    }
  }

  return {
    polybius,
  };
})();

module.exports = {
  polybius: polybiusModule.polybius
};