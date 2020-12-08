/*
------------------------ Question 1---------------------------
Write a function that ask the user for two numbers and
return the product of them. But the challenge here is that
you can't use the operator * (you can't make the product)
hint: multiplication is a sequence of sums
*/

//@param {number} number1
//@param {number} number2
//@return {number} product

// my function is defined
const multiplication = (num1, num2) => {
  // edge case for if the user inputs a 0.
  // if either num1 or num2 is 0, always
  // return a zero.
  if (num1 === 0 || num2 === 0) {
    return 0;
  }

  // set both num1 and num2 to absolute value
  let absoluteValue1 = Math.abs(num1);
  let absoluteValue2 = Math.abs(num2);
  // assign abs value of num1 to sumOfNumbers
  let sumOfNumbers = absoluteValue1;

  // since multiplication is addition
  // skipping a few steps, a for loop
  // is created to increment the base
  // number (sumOfNumbers) to the total
  // number of times indicated by the
  // abs of num2 (absoluteValue2)
  for (var i = 1; i < absoluteValue2; i++) {
    // the base number (sumOfNumbers)
    // is incremented a total number
    // of times indicated in the abs
    // value number of num2 (absoluteValue2)
    sumOfNumbers += absoluteValue1;
  }
  // another edge case - if user
  // inputs a negative number for
  // either parameter, returns the
  // negative value of the sum of
  // numbers. (sumOfNumbers)
  if (num1 < 0 && num2 < 0) {
    return sumOfNumbers;
  } else if (num1 < 0 || num2 < 0) {
    return -sumOfNumbers;
  }
  // return sum
  return sumOfNumbers;
};

const answer1 = multiplication(0, 4);
console.log("answer1", answer1);

const htmlTarget = document.getElementById("a-1");
htmlTarget.innerHTML = answer1;
/*
------------------------ Question 2 ---------------------------
Write a function that recieves a string as a parameter and evaluate each
character of the string to determinate if the character is vowel or a consonant.
you have to store each character on separates arrays, one for vowels and the other
one for consonants.
after separating the characters concatenate both arrays. ask the user if wants
the vowels first or consonants first in the final array.
hint:
*/

//@param {string}
//@return {character} => array of characters
vowelOrConsonant = () => {
  let userInputOfWords = prompt(
    "Please enter one word. Do not include single or double quotes."
  );
  // set user input to lowercase so that program does
  // not have to diffentiate between lower case and
  // upper case
  const setLowerCase = userInputOfWords.toLowerCase();
  // set lower cased string to a new variable called
  // arrayOfLetters, to keep better track of the
  // for loop
  const arrayOfLetters = setLowerCase;
  // reference array for loop to check if arrayOfLetters
  // contains a character in vowelArrayReference
  const vowelArrayReference = ["a", "e", "i", "o", "u"];
  // blank consonant array for loop to write characters to
  let blankConsonantArray = [];
  // blank vowel array for loop to write characters to
  let blankVowelArray = [];

  // for loop defined
  for (var i = 0; i < arrayOfLetters.length; i++) {
    // utilizing the indexOf array, check the entire string that
    // the user input to determine if there is match with vowels
    if (vowelArrayReference.indexOf(arrayOfLetters[i]) !== -1) {
      // push results to blank vowel array
      blankVowelArray.push(arrayOfLetters[i]);
      // else, push the rest to blank consonant array
    } else {
      blankConsonantArray.push(arrayOfLetters[i]);
    }
  }
  // concat vowels with my consonants
  let concat_vowels_then_consonant = blankVowelArray.concat(
    blankConsonantArray
  );
  // convat consonants with my vowels
  let concat_consonant_then_vowels = blankConsonantArray.concat(
    blankVowelArray
  );
  let userDecides = prompt(
    `Did you want an array of your vowels first or your consonants first? Please type 'vowels' or 'consonants' without quotes.`
  );

  // my return statement is stuck on vowel at the moment.
  // I'll have to ask about this issue
  if (userDecides === "vowels" || "VOWELS") {
    // if user selects for vowels, return the newly written array from blankVowelArray
    // and the concatted array.
    let concatVowelsFirst = `You asked for vowels first. Your vowels are: [${blankVowelArray}]. \nYour consonants are [${blankConsonantArray}] Concatenated (joined together) with your requested vowels first, your result would be [${concat_vowels_then_consonant}]`;
    return concatVowelsFirst;
  } else if (userDecides === "consonants" || "CONSONANTS") {
    // if user selects for consonants, return newly written array from blankConsonantArray
    // and the concatted array
    let concatConsonantFirst = `You asked for consonants first. Your consonants are: [${blankConsonantArray}]. \nYour vowels are [${blankVowelArray}] Concatenated (joined together) with your requested consonants first, your result would be [${concat_consonant_then_vowels}]`;
    return concatConsonantFirst;
  } else {
    return `Sorry, you didn't decide vowel or consonants`;
  }
};

const answer2 = vowelOrConsonant();

const htmlTarget2 = document.getElementById("a-2");
htmlTarget2.innerHTML = answer2;

/*
------------------------ Question 3 ---------------------------
Now let's create a small game. The game consists in a player (ask the user for the name).
The player has 3 oportunities to guess a number. The number is a random number between 10 - 50.
If the player don't find the number, the program must displays an alert and stop the game,
but if the player finds the number, then the program must show a congratulations message (alert)
with the name of the player in upperCase letters and stop the game
You must have to store the player information in a 'player' object. The Player object contains the
following Properties:
{string} name, {number} lives, {numbers} fail_numbers[]
where: name, saves the name of the player. Lives, represents the remaining
oportunities each time the player fails. Fail_numbers, is an array of numbers that stores
the fail numbers the player has used
*/

//@return {string} win / gameOver => the string that says if the user wasted the three oportunities showing the fails numbers or the name if the player wins
guessTheNumber = () => {
  // random number generator defined. it generates a random number between 10 and 50
  const randomNumberGenerator = Math.floor(Math.random() * (50 - 10 + 1) + 10);
  // end game message defined
  const endGameMessage = `Oh no! You've run out of lives! That means game over. Thanks for playing!`;
  // an object is defined
  let playerInfo = {
    name: "",
    livesLeft: 3,
    timesFailed: 0,
  };

  // prompt defined and used to capture user input
  // greet user
  playerInfo.name = prompt("Hi! What is your name?");
  // game begins and user must guess a number
  let gameSetup = prompt(`Hi ${playerInfo.name}! 
   You have three attempts to correctly guess the number I am thinking of. \nThe number is between 10 and 50. \nWhen ready, type in your first number.\nCurrently, you have ${playerInfo.livesLeft} lives left and ${playerInfo.timesFailed} attempts so far.`);

  // loop defined accessing the property at the
  // key of livesLeft.
  for (var i = 0; i < playerInfo.livesLeft; i++) {
    // made user input an integer strictly equal to
    // random number generator. if guessed correctly
    // print 'woo!' and loop breaks
    if (+gameSetup === randomNumberGenerator) {
      return `Woo! You guessed the number correctly! Nice job!`;
      break;
      // else, if number user guessed does not equal
      // randomNumberGenerator, then the property at
      // the key of livesLeft of the object of playerInfo
      // is decremented, and property at the key of
      // timesFailed is incremented
    } else if (+gameSetup !== randomNumberGenerator) {
      playerInfo.livesLeft--;
      playerInfo.timesFailed++;
      // the value properties at the key of livesLeft
      // and timesFailed are kept tracked and are
      // returned to user to give user sense of progress
      // in the game
      prompt(
        `Nope! :) Try again. \nYou currently have ${playerInfo.livesLeft} lives left and ${playerInfo.timesFailed} attempts so far.`
      );
    }
  }
  // return the endGameMessage;
  return endGameMessage;
};

const answer3 = guessTheNumber();

// const htmlTarget3 = document.getElementById("a-3");
// htmlTarget3.innerHTML = answer3;

/*
------------------------ Question 4 ---------------------------
In the function below we are giving you an array of objects,
each one with the same properties.
Ask to the user for 3 different options to sorting the array
from the highest to lowest.
In the case of a string, the criteria to sort must be the length
of the string.
The first one is sorting the array of objects based on the title
property.
The second one sorting the array of objects based on the author
property,
the third one based on the library property. finally, the return
value has to be the string
sorted of the property selected separeted with a semicolon. Remember
you have to sort all of
the array based on the selected property
example: if the user select sorting by title the return value must
be: "Mockingjay: The Final Book of The Hunger Games; Walter Isaacson;
The Road Ahead"
*/

// function is defined with arrow syntax
sort = () => {
  // object is defined with keys of title,
  // author, and libraryID
  var library = [
    {
      title: "The Road Ahead",
      author: "Bill Gates",
      libraryID: 1254,
    },
    {
      title: "Walter Isaacson",
      author: "Steve Jobs",
      libraryID: 4264,
    },
    {
      title: "Mockingjay: The Final Book of The Hunger Games",
      author: "Suzanne Collins",
      libraryID: 3245,
    },
  ];

  // blank array is created in order to return this
  // array to user. eventually, the blank array is
  // filled with relevant data for the user by utilizing
  // the method .push()
  let returnedDescendingResults = [];
  // this prompt begins the introduction of the program
  // and explains to the user how to use the program and
  // the benefits of the program to the user
  let introAndNavigatePrompt = prompt(`Welcome to your library sorter. 
  \nThis sorting program allows you to organize your three books according to arrange your data: Title, author, or library ID. \nIn the case of title, your 
  books will be returned to you from the longest title working towards the shorest title. \nIn the case of author, your books will be returned to you 
  In the case of library ID, the highest number will be retrieved for you first continuing down towards the lowest library ID number.
  \nNow, please select from the following options (without quotes): 
  'title', 'author' or 'id' (library identification number). \n**NOTE**\nDo not include quotes. \nKeep in mind, your entries are case sensitive. For example, if you type 'Title' you'll get an error!`);

  // loop through the library object
  for (var i = 0; i < library.length; i++) {
    // if user inputs "title"
    if (introAndNavigatePrompt === "title") {
      // return the property values at the key of title
      returnedDescendingResults.push(library[i]["title"]);
      // and sort using the .sort() method, descending
      returnedDescendingResults.sort((a, b) => b.length - a.length);
      // if user inputs "author"
    } else if (introAndNavigatePrompt === "author") {
      // return property values at the key of author
      returnedDescendingResults.push(library[i]["author"]);
      // and sort using the .sort() method, descending
      returnedDescendingResults.sort((a, b) => b.length - a.length);
      // if user inputs "id"
    } else if (introAndNavigatePrompt === "id") {
      // return the property values at the key of libraryId
      returnedDescendingResults.push(library[i]["libraryID"]);
      // and sort using the .sort() method, descending
      returnedDescendingResults.sort((a, b) => b - a);
    } else {
      // edge case in case user doesn't input a correct option -
      // in that case, loop ends.
      return `Sorry! You didn't enter a correct option!`;
    }
  }
  // blank array defined earlier is filled with
  // data aggregated from for loop - user makes
  // a selection and
  return returnedDescendingResults.join("; ");
};
const answer4 = sort();

// const htmlTarget4 = document.getElementById("a-4");
// htmlTarget4.innerHTML = answer4;
