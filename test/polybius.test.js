// Write your tests here!
const {expect} = require("chai");
const polybiusModule = require("../src/polybius");

describe("polybius", () => {
   // Test case for when the input number string is odd length 
    it("should return false if number string is odd length", () => {

        const input = "123"
        const result = polybiusModule.polybius(input, encode = false);
        expect(result).to.be.false;

    });
  // Test case for encoding a word to numbers
    it("should encode a word to numbers", () => {
        
        const input = `words`
        const result = polybiusModule.polybius(input, encode = true);
        expect(result).to.be.equal(`2543244134`)

    });
  // Test case for decoding a number string to words
    it("should decode a number string to words", () => {

        const input = `2543244134`;
        const result = polybiusModule.polybius(input, encode = false);
        expect(result).to.be.equal(`words`);


    });


});