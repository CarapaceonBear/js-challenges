/* JS2 builds on the previous challenges and adds the use of functions with parameters */

/* 
  All challenges in this repository are seperated into four levels: Foundation, Intermediate, Advanced and Expert.
  The expectation is to complete all Foundation level challenges, with Intermediate and upwards pushing your knowledge
  and may require you to google things in order to solve them. If you find an answer online somewhere, be kind and
  share it with the group!
*/

/* Foundation Challenges */

/**
 * A function that concatenates two strings together with a space in between them.
 *
 * @param {string} firstName John
 * @param {string} lastName Smith
 * @returns {string} John Smith
 */
export const createFullName = (firstName, lastName) => {
  return (`${firstName} ${lastName}`);
};

/**
 * A function that takes two numbers as an input and returns the smallest one.
 * !!NOTE!! You'll have to write in the parameters for this function yourself.
 *
 * @param {number} number1 100
 * @param {number} number2 200
 * @returns {number} 100
 */
export const findSmallestNumber = (number1, number2) => {
  let result = number1;
  if (number1 > number2) {
    result =  number2;
  }
  return result;
};

/**
 * A function that takes two numbers as input, multiplies them together and returns the product.
 * !!NOTE!! You'll have to write in the parameters for this function yourself.
 *
 * @param {number} number1 3
 * @param {number} number2 6
 * @returns {number} 18
 */
export const multiplyNumbers = (number1, number2) => {
  return (number1 * number2);
};

/* Intermediate Challenges */

/**
 * A function that tells the user whether or not they've achieved a new high score.
 * If they new score is larger than the current high score then return "You got a new high score!"
 * If the scores are the same return "So close!"
 * Otherwise return "Better luck next Time"
 *
 * @param {number} score 300
 * @param {number} highScore 325
 * @returns {string} "You got a new high score!" | "So close!" | "Better luck next time!"
 */
export const checkIfNewHighScore = (score, highScore) => {
  let message = "So close!";
  if (score > highScore) {
    message = "You got a new high score!";
  } else if (score < highScore) {
    message = "Better luck next time!";
  }
  return message;
};

/**
 * A function that converts a temperature a in celsius to fahrenheit and outputs it in a string format -> "15 degrees celsius is 59 degrees fahrenheit".
 *
 * @param {number} tempInCelsius 15
 * @returns {string} "15 degrees celsius is 59 degrees fahrenheit"
 */
export const celsiusToFahrenheit = (tempInCelsius) => {
  const tempInFahrenheit = tempInCelsius * (9/5) + 32;
  return (`${tempInCelsius} degrees celsius is ${tempInFahrenheit} degrees fahrenheit`)
};

/**
 * A function that calculates the number of snickers needed for the rest of your life based on the number you eat per day,
 * your age and your maximum age.
 *
 * @param {number} snickersPerDay 2
 * @param {number} age 25
 * @param {number} maxAge 90
 * @returns {number} 47450
 */
export const calculateLifetimeSupply = (snickersPerDay, age, maxAge) => {
  const daysLeft = (maxAge - age) * 365;
  return (daysLeft * snickersPerDay);
};

/* Advanced Challenges */

/**
 * A function that takes a score input and returns a letter grade.
 * If the score is:
 *  100 - 80: "A"
 *  79 - 70: "B"
 *  79 - 60: "C"
 *  59 - 50: "D"
 *  49 - 40: "E"
 *  39 - 0: "F"
 * If the score is above 100, less than 0, or not a number it should return "Score unavailable"
 *
 * @param {number} score 0 - 100
 * @returns {string} A - F | Score unavailable
 */
export const getGrade = (score) => {
  let result = "Score unavailable";
  if ((typeof score) === "number") {
    switch (true) {
      case (score >= 0 && score < 40):
        result = "F";
        break;
      case (score >= 40 && score < 50):
        result = "E";
        break;
      case (score >= 50 && score < 60):
        result = "D";
        break;
      case (score >= 60 && score < 70):
        result = "C";
        break;
      case (score >= 70 && score < 80):
        result = "B";
        break;
      case (score > 79 && score <= 100):
        result = "A";
        break;
    }
  }
  return result;
};

/**
 * A function that find the area of a circle to 2 decimal places.
 *
 * @param {number} radius 3
 * @returns {number} 28.27
 */
export const calculateAreaOfCircle = (radius) => {
  let result = (Math.PI) * (Math.pow(radius, 2));
  return parseFloat(result.toFixed(2));
};

/* Expert Challenge */

/**
 * A function that generates a student summary from an inputted score and name, to place at the end of a report card for a student.
 * "A": "Congratulations John! You achieved a grade of A."
 * "B": "Well done John! You achieved a grade of B."
 * "C": "Nicely done John! You achieved a grade of C."
 * "D": "That's okay John. You achieved a grade of D."
 * "E": "Too bad John. You achieved a grade of E."
 * "F": "Sorry John. You achieved a grade of F. There's always next year."
 * If there is a score error : "My apologies John, there's been an error in processing your grade."
 *
 * !!NOTE!! Think about how you can use a previous function challenge to complete this one.
 *
 * @param {number} score 0 - 100
 * @param {string} name John
 */
export const getStudentSummary = (score, name) => {
  let result = "Score unavailable";
  if ((typeof score) === "number") {
    switch (true) {
      case (score >= 0 && score < 40):
        result = "F";
        break;
      case (score >= 40 && score < 50):
        result = "E";
        break;
      case (score >= 50 && score < 60):
        result = "D";
        break;
      case (score >= 60 && score < 70):
        result = "C";
        break;
      case (score >= 70 && score < 80):
        result = "B";
        break;
      case (score > 79 && score <= 100):
        result = "A";
        break;
    }
  }
  let message = "";
  switch(result) {
    case "A":
      message = `Congratulations ${name}! You achieved a grade of A.`;
      break;
    case "B":
      message = `Well done ${name}! You achieved a grade of B.`;
      break;
    case "C":
      message = `Nicely done ${name}! You achieved a grade of C.`;
      break;
    case "D":
      message = `That's okay ${name}. You achieved a grade of D.`;
      break;
    case "E":
      message = `Too bad ${name}. You achieved a grade of E.`;
      break;
    case "F":
      message = `Sorry ${name}. You achieved a grade of F. There's always next year.`
      break;
    default:
      message = `My apologies ${name}, there's been an error in processing your grade.`
  }
  return message;
};
