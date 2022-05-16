/* This challenge is designed to test you knowledge of Types and Control Flow (If and Switch Statements) */

/* 
  All challenges in this repository are seperated into four levels: Foundation, Intermediate, Advanced and Expert.
  The expectation is to complete all Foundation level challenges, with Intermediate and upwards pushing your knowledge
  and may require you to google things in order to solve them. If you find an answer online somewhere, be kind and
  share it with the group!
*/

/* Foundation Challenges */

/**
 * A function that programmatically concatenates two strings together with a space in between them.
 * This means if the string were different it would still add them together.
 *
 * @returns {string} John Smith
 */
const firstName = "John";
const lastName = "Smith";

export const createFullName = () => {
  const result = firstName + " " + lastName;
  return (result);
};

/**
 * A function that programmatically returns the largest number.
 * This means if the numbers were different it would still return the largest one.
 *
 * @returns {number} the largest number
 */
const largeNumber1 = 100;
const largeNumber2 = 200;

export const findLargestNumber = () => {
let result = 0;

  if (largeNumber1 > largeNumber2) {
    result = largeNumber1;
  } else if (largeNumber2 > largeNumber1) {
    result = largeNumber2;
  } else {
    result = largeNumber1;
  }

  return (result);
};

/**
 * A function that programmatically adds two numbers together.
 * This means if the numbers were different it would still add them together.
 *
 * @returns {number} the sum of both numbers
 */
const addNumber1 = 12;
const addNumber2 = 24;

export const addNumbers = () => {
  const result = addNumber1 + addNumber2;
  return (result);
};

/* Intermediate Challenges */

/**
 * A function to programmatically find the length of a string.
 * This means if the string was different it would still find the length.
 *
 * @returns {number} the length of the string
 */
const password = "thisIsMyVeryLongPassword123456789";

export const findLengthOfPassword = () => {
  const result = password.length;
  return (result);
};

/**
 * A function that programmatically tells you what the type of the variable is.
 * This variable was still one of the accepted types it would still output a string.
 * If the variable is a string output "This is a string"
 * If the variable is a number output "This is a number"
 * If the variable is a boolean output "This is a boolean"
 * If the variable is not any of those types output "I don't know what this thing is"
 *
 * @returns {string} This is a string
 */
const thing = "I am a thing";

export const findType = () => {
  const result = typeof thing;
  let report = "";

  if (result === "undefined") {
    report = "I don't know what this thing is"
  } else {
    // report = "This is a " + result;
    report = `This is a ${result}` 
  }
  
  return (report);
};

/**
 * A function to programmatically decide if a name is suitable for a name tag.
 * This means it must still work even if the name is different and return something if name provided is incorrect.
 * Name tag rules are: The name must be less than or equal to 8 characters and begin with a capital letter.
 *
 * @returns {boolean} true || false
 */
const nameTagOption = "Timothy";

export const getIsValidOnNameTag = () => {
  let result = false

  if (nameTagOption.length <= 8) {
    const firstCharacter = nameTagOption.charAt(0);
    if (firstCharacter === firstCharacter.toUpperCase()) {
      result = true;
    }
  }

  return (result);
};

/* Advanced Challenges */

/**
 * A function that programmatically converts a number stored as a string to a number type.
 * This means if the string was different it would still convert it to a number.
 *
 * @returns {number} The number converted from the string "32.87" -> 32.87
 */
const stringToConvert = "14.45";

export const convertStringToNumber = () => {
  const result = parseFloat(stringToConvert);
  return (result);
};

/**
 * A function that uses regex to programmatically test if a string contains uppercase letters.
 * This means if the string was different it would still accurately return true or false.
 *
 * !!NOTE!! You should use regex to solve this problem!
 *
 * @returns {boolean} true || false
 */
const stringWithUppercaseLetters = "I Am A String With Uppercase Letters";

export const getHasUppercaseLetters = () => {
  const upperCaseCheck = new RegExp('[A-Z]')
  const result = upperCaseCheck.test(stringWithUppercaseLetters);
  return(result);
};

/* Expert Challenge */

/**
 * A function that programmatically converts a string written in PascalCase to a string written in snake_case (lowercase with underscores).
 * This means if the PascalCase string changes then the function should still convert it.
 *
 * @returns {string} i_want_to_be_snake_case
 */
const pascalCaseVariableName = "IWantToBeSnakeCase";

export const convertPascalCaseToSnakeCase = () => {
  const array = pascalCaseVariableName.split(/([A-Z])/);
  // this splits by Upper Case, keeping the delimiter, but the Uppercase letters each have an index of their own
  let result = ""
  let upperCheck = false
  
  for (let i = 1; i < array.length; i++) {
      // checking if this index is one of the Uppercase latters
      if ((/[A-Z]/).test(array[i].charAt(0))) {
          upperCheck = true;
      } 
      // insert "_" after each word, except the last
      // also ignoring the single Uppercase letters from the split
      if (i != array.length -1 && !upperCheck) {
          array[i] = array[i].concat("_")
      }
      upperCheck = false;
      // append each section to the final string
      result = result.concat(array[i]);
  }
  result = result.toLowerCase();
  
  return(result);
};
