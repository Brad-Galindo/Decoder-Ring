// Write your tests here!
const {expect} = require("chai");
const caesarModule = require("../src/caesar");

describe('caesar', () => {

    // Test case for when an invalid shift argument is provided
    it('should return false when an invalid shift argument is provided', () => {
        const input = 'hello';
        const shift = 30;
        const result = caesarModule.caesar(input, shift);
        expect(result).to.be.false;
    });

    // Test case for encoding a message using a positive shift value
    it(`should ensure coded message by letter shift`, () => {
        // Input message to be encoded
        const input = "hello";
        // Positive shift value
        const shift = 2;
        // Encoding the input message using the caesar function
        const result = caesarModule.caesar(input, shift, true);
        // expect that the encoded message is equal to the expected output
        expect(result).to.equal("jgnnq");
    });

    // Test case for encoding a message using a negative shift value
    it(`should ensure coded message by negative letter shift`, () => {
        // Input message to be encoded
        const input = "hello";
        // Negative shift value
        const shift = -2;
        // Encoding the input message using the caesar function
        const result = caesarModule.caesar(input, shift, true);
        // expect that the encoded message is equal to the expected output
        expect(result).to.equal("fcjjm");
    });

    // Test case for decoding a message using a positive shift value
    it(`should ensure decoded message by letter shift`, () => {
        // Encoded message to be decoded
        const input = "fcjjm";
        // Positive shift value
        const shift = 2;
        // Decoding the input message using the caesar function
        const result = caesarModule.caesar(input, shift, true);
        // expect that the decoded message is equal to the expected output
        expect(result).to.equal("hello");
    });

    // Test case for decoding a message using a negative shift value
    it(`should ensure decoded message by negative letter shift`, () => {
        // Encoded message to be decoded
        const input = "jgnnq";
        // Negative shift value
        const shift = -2;
        // Decoding the input message using the caesar function
        const result = caesarModule.caesar(input, shift, true);
        // expect that the decoded message is equal to the expected output
        expect(result).to.equal("hello");
    });

});
