//------------------------ Question 1---------------------------
// Write a function that ask the user for two numbers and
// return the product of them. But the challenge here is that
// you can't use the operator * (you can't make the product)
// hint: multiplication is a sequence of sums

//@param {number} number1
//@param {number} number2
//@return {number} product
const multiplication = (num1, num2) => {
  if (num1 === 0 || num2 === 0) {
    return 0;
  }

  let absoluteValue1 = Math.abs(num1);
  let absoluteValue2 = Math.abs(num2);
  let sumOfNumbers = absoluteValue1;

  for (var i = 1; i < absoluteValue2; i++) {
    sumOfNumbers += absoluteValue1;
  }

  if (num1 < 0 && num2 < 0) {
    return sumOfNumbers;
  } else if (num1 < 0 || num2 < 0) {
    return -sumOfNumbers;
  }

  return sumOfNumbers;
};

const answer1 = multiplication(0, 4);
console.log("answer1", answer1);

const htmlTarget = document.getElementById("a-1");
htmlTarget.innerHTML = answer1;

//------------------------ Question 2 ---------------------------
// Write a function that recieves a string as a parameter and evaluate each
// character of the string to determinate if the character is vowel or a consonant.
// you have to store each character on separates arrays, one for vowels and the other
//  one for consonants.
// after separating the characters concatenate both arrays. ask the user if wants
// the vowels first or consonants first in the final array.
//hint:

//@param {string}
//@return {character} => array of characters
vowelOrConsonant = (str) => {
  const setLowerCase = str.toLowerCase();
  const arrayOfLetters = setLowerCase;
  const vowelArrayReference = ["a", "e", "i", "o", "u"];
  let blankConsonantArray = [];
  let blankVowelArray = [];

  for (var i = 0; i < arrayOfLetters.length; i++) {
    if (vowelArrayReference.indexOf(arrayOfLetters[i]) !== -1) {
      blankVowelArray.push(arrayOfLetters[i]);
    } else {
      blankConsonantArray.push(arrayOfLetters[i]);
    }
  }

  const userDecidesVowelsOrConsonants = prompt(
    `'Did you want an array of your vowels first or your consonants first? Please type 'vowels' or 'consonants' without quotes.`
  );
  const concatVowelsFirst = `You asked for vowels first. Your vowels are: [${blankVowelArray}]. \nYour consonants are [${blankConsonantArray}]`;
  const concatConsonantFirst = `You asked for consonants first. Your consonants are: [${blankConsonantArray}]. \nYour consonants are [${blankVowelArray}]`;

  if (userDecidesVowelsOrConsonants === "vowel" || "VOWEL") {
    return concatVowelsFirst;
  } else if (userDecidesVowelsOrConsonants === "consonant" || "CONSONANT") {
    return concatConsonantFirst;
  } else {
    return `Sorry, you didn't specify 'vowel' or 'consonant'!`;
  }
};

const answer2 = vowelOrConsonant();

const htmlTarget2 = document.getElementById("a-2");
htmlTarget2.innerHTML = answer2;

const answer2 = vowelOrConsonant();

const htmlTarget2 = document.getElementById("a-2");
htmlTarget2.innerHTML = answer2;

//------------------------ Question 3 ---------------------------
// Now let's create a small game. The game consists in a player (ask the user for the name).
// The player has 3 oportunities to guess a number. The number is a random number between 10 - 50.
// If the player don't find the number, the program must displays an alert and stop the game,
// but if the player finds the number, then the program must show a congratulations message (alert)
// with the name of the player in upperCase letters and stop the game
// You must have to store the player information in a 'player' object. The Player object contains the
// following Properties:
// {string} name, {number} lives, {numbers} fail_numbers[]
// where: name, saves the name of the player. Lives, represents the remaining
// oportunities each time the player fails. Fail_numbers, is an array of numbers that stores
// the fail numbers the player has used

//@return {string} win / gameOver => the string that says if the user wasted the three oportunities showing the fails numbers or the name if the player wins
guessTheNumber = () => {
  const randomNumberGenerator = Math.floor(Math.random() * (50 - 10 + 1) + 10);
  const endGameMessage = `Oh no! You've run out of lives! That means game over. Thanks for playing!`;
  let playerInfo = {
    name: "",
    livesLeft: 3,
    timesFailed: 0,
  };

  playerInfo.name = prompt("Hi! What is your name?");
  let gameSetup = prompt(`Hi ${playerInfo.name}! 
   You have three attempts to correctly guess the number I am thinking of. \nThe number is between 10 and 50. \nWhen ready, type in your first number.\nCurrently, you have ${playerInfo.livesLeft} lives left and ${playerInfo.timesFailed} attempts so far.`);

  for (var i = 0; i < playerInfo.livesLeft; i++) {
    if (+gameSetup === randomNumberGenerator) {
      return `Woo! You guessed the number correctly! Nice job!`;
      break;
    } else if (+gameSetup !== randomNumberGenerator) {
      playerInfo.livesLeft--;
      playerInfo.timesFailed++;
      prompt(
        `Nope! :) Try again. \nYou currently have ${playerInfo.livesLeft} lives left and ${playerInfo.timesFailed} attempts so far.`
      );
    }
  }
  return endGameMessage;
};

const answer3 = guessTheNumber();

const htmlTarget3 = document.getElementById("a-3");
htmlTarget3.innerHTML = answer3;

//------------------------ Question 4 ---------------------------
// In the function below we are giving you an array of objects,
// each one with the same properties.
// Ask to the user for 3 different options to sorting the array
// from the highest to lowest.
// In the case of a string, the criteria to sort must be the length
// of the string.
// The first one is sorting the array of objects based on the title
// property.
// The second one sorting the array of objects based on the author
// property,
// the third one based on the library property. finally, the return
// value has to be the string
// sorted of the property selected separeted with a semicolon. Remember
// you have to sort all of
// the array based on the selected property
// example: if the user select sorting by title the return value must
// be: "Mockingjay: The Final Book of The Hunger Games; Walter Isaacson;
// The Road Ahead"

sort = () => {
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

  let returnedDescendingResults = [];
  let introAndNavigatePrompt = prompt(`Welcome to your library sorter. 
  \nThis sorting program allows you to organize your three books according to arrange your data: Title, author, or library ID. \nIn the case of title, your 
  books will be returned to you from the longest title working towards the shorest title. \nIn the case of author, your books will be returned to you 
  In the case of library ID, the highest number will be retrieved for you first continuing down towards the lowest library ID number.
  \nNow, please select from the following options (without quotes): 
  'title', 'author' or 'id' (library identification number). \n**NOTE**\nDo not include quotes. \nKeep in mind, your entries are case sensitive. For example, if you type 'Title' you'll get an error!`);

  for (var i = 0; i < library.length; i++) {
    if (introAndNavigatePrompt === "title") {
      returnedDescendingResults.push(library[i]["title"]);
      returnedDescendingResults.sort((a, b) => b.length - a.length);
    } else if (introAndNavigatePrompt === "author") {
      returnedDescendingResults.push(library[i]["author"]);
      returnedDescendingResults.sort((a, b) => b.length - a.length);
    } else if (introAndNavigatePrompt === "id") {
      returnedDescendingResults.push(library[i]["libraryID"]);
      returnedDescendingResults.sort((a, b) => b - a);
    } else {
      return `Sorry! You didn't enter a correct option!`;
    }
  }
  return returnedDescendingResults.join("; ");
};
const answer4 = sort();

const htmlTarget4 = document.getElementById("a-4");
htmlTarget4.innerHTML = answer4;
