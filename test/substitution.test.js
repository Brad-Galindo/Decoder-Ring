// Write your tests here!
// Importing the expect function from the Chai library for making assertions
const { expect } = require("chai");

// Importing the substitution function from the substitutionModule module
const substitutionModule = require("../src/substitution");

describe("substitution", () => {

    // Test case for when the alphabet is missing
    it("should return false if alphabet is missing", () => {

        // Test inputs
        const input = "words";
        const encode = true;
        const alphabet = '';

        // Call the substitution function with the test inputs
        result = substitutionModule.substitution(input, alphabet, encode);

        // expect that the result is false
        expect(result).to.be.false;

    });

    // Test case for when the alphabet is too short
    it("should return false when alphabet is too short", () => {

        // Test inputs
        const input = `words`;
        const encode = true;
        const alphabet = `abcdefghi`;

        // Call the substitution function with the test inputs
        result = substitutionModule.substitution(input, alphabet, encode);

        //  expect that the result is false
        expect(result).to.be.false;

    });

    // Test case for when the alphabet has duplicates
    it("should return false when alphabet has duplicates", () => {

        // Test inputs
        const input = `words`;
        const encode = true;
        const alphabet = `aaaaa`;

        // Call the substitution function with the test inputs
        result = substitutionModule.substitution(input, alphabet, encode);

        //  expect that the result is false
        expect(result).to.be.false;

    });

    // Test case for encoding a message
    it("should encode a message", () => {

        // Test inputs
        const input = `jaeger`;
        const encode = true;
        const alphabet = `zyxwvutsrqponmlkjihgfedcba`;

        // Call the substitution function with the test inputs
        result = substitutionModule.substitution(input, alphabet, encode);

        //  expect that the result is expected encoded message
        expect(result).to.equal(`qzvtvi`);

    });

    // Test case for decoding a message
    it("should decode a message", () => {

        // Test inputs
        const input = 'qzvtvi'
        const encode = false;
        const alphabet = `zyxwvutsrqponmlkjihgfedcba`;

        // Call the substitution function with the test inputs
        result = substitutionModule.substitution(input, alphabet, encode);

        //  expect that the result is the expected decoded message
        expect(result).to.equal(`jaeger`);

    });

});