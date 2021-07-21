var getRandomNum = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var randomNum = randomInteger + 1;
  return randomNum;
};

var getSpsObjectFromRandomNum = function (aNumber) {
  var computerSpsObject;
  if (aNumber == 1) {
    computerSpsObject = "scissors";
  }
  if (aNumber == 2) {
    computerSpsObject = "paper";
  }
  if (aNumber == 3) {
    computerSpsObject = "stone";
  }
  return computerSpsObject;
};

var gameMode = "nameMode";
var playerName = "";
var numOfWinsPlayer = 0;
var numOfWinsComputer = 0;
var numOfDraws = 0;
var totalNumOfRounds = 0;

var main = function (input) {
  var SCISSORS = "scissors";

  // ensure that input value is either scissors paper or stone

  if (input == !"stone" || input == !"scissors" || input == !"paper") {
    console.log("the input is not valid");

    return "Invalid selection. Kindy enter scissors paper or stone";
  }

  // Computer has to generate random value 1 , 2 , 3

  var randomNumFrom1To3 = getRandomNum();
  console.log(randomNumFrom1To3);

  // set a variable that will contain the computer's spsObject
  // assign 1 , 2 , 3 to scissor , paper , stone
  var computerSpsObject = getSpsObjectFromRandomNum(randomNumFrom1To3);

  console.log(computerSpsObject);

  // compare the computer's spsOject to user input

  if (computerSpsObject == input) {
    numOfDraws = numOfDraws + 1;
    totalNumOfRounds = totalNumOfRounds + 1;

    var myOutputValue =
      "It's a Draw." +
      "<br></br>" +
      "Current Score:" +
      " Wins: " +
      numOfWinsPlayer +
      " Losses: " +
      numOfWinsComputer +
      " Draws: " +
      numOfDraws;
  }

  if (
    (computerSpsObject == "scissors" && input == "paper") ||
    (computerSpsObject == "paper" && input == "stone") ||
    (computerSpsObject == "stone" && input == "scissors")
  ) {
    numOfWinsComputer = numOfWinsComputer + 1;
    totalNumOfRounds = totalNumOfRounds + 1;

    var myOutputValue =
      "You lost, please try again!" +
      "<br></br>" +
      "Current Score: " +
      "Wins: " +
      numOfWinsPlayer +
      " Losses: " +
      numOfWinsComputer +
      " Draws: " +
      numOfDraws;
  }

  if (
    (computerSpsObject == "scissors" &&
      input == "paper" &&
      numOfWinsPlayer < numOfWinsComputer) ||
    (computerSpsObject == "paper" &&
      input == "stone" &&
      numOfWinsPlayer < numOfWinsComputer) ||
    (computerSpsObject == "stone" &&
      input == "scissors" &&
      numOfWinsPlayer < numOfWinsComputer)
  ) {
    numOfWinsComputer = numOfWinsComputer + 1;
    totalNumOfRounds = totalNumOfRounds + 1;

    var myOutputValue =
      "You lost, please try again!" +
      "<br></br>" +
      "Current Score: " +
      "Wins: " +
      numOfWinsPlayer +
      " Losses: " +
      numOfWinsComputer +
      " Draws: " +
      numOfDraws +
      "<br></br>" +
      "You only won " +
      numOfWinsPlayer +
      "/" +
      totalNumOfRounds +
      " times, please try harder!";
  }

  if (
    (computerSpsObject == "scissors" && input == "stone") ||
    (computerSpsObject == "paper" && input == "scissors") ||
    (computerSpsObject == "stone" && input == "paper")
  ) {
    numOfWinsPlayer = numOfWinsPlayer + 1;
    totalNumOfRounds = totalNumOfRounds + 1;

    var myOutputValue =
      "Congratulations, you won!" +
      "<br></br>" +
      "Current Score: " +
      "<br></br>" +
      "Wins: " +
      numOfWinsPlayer +
      " Losses: " +
      numOfWinsComputer +
      " Draws: " +
      numOfDraws;
  }

  if (
    (computerSpsObject == "scissors" &&
      input == "stone" &&
      numOfWinsPlayer > numOfWinsComputer) ||
    (computerSpsObject == "paper" &&
      input == "scissors" &&
      numOfWinsPlayer > numOfWinsComputer) ||
    (computerSpsObject == "stone" &&
      input == "paper" &&
      numOfWinsPlayer > numOfWinsComputer)
  ) {
    numOfWinsPlayer = numOfWinsPlayer + 1;
    totalNumOfRounds = totalNumOfRounds + 1;

    var myOutputValue =
      "Congratulations, you won!" +
      "<br></br>" +
      "Current Score: " +
      "Wins: " +
      numOfWinsPlayer +
      " Losses: " +
      numOfWinsComputer +
      " Draws: " +
      numOfDraws +
      "<br></br>" +
      "You won " +
      numOfWinsPlayer +
      "/" +
      totalNumOfRounds +
      " times, you must be a lucky guy!";
  }

  return myOutputValue;
};
