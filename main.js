function playRound(playerSelection, computerSelection) {
  switch (playerSelection) {
    case "rock":
      if (computerSelection == "scissor") {
        console.log("You win!");
        return 1;
      } else if (computerSelection == "rock") {
        console.log("You tie!");
        return 0;
      } else if (computerSelection == "paper") {
        console.log("You lose!");
        return -1;
      }
      break;
    case "scissor":
      if (computerSelection == "scissor") {
        console.log("You tie!"); 
        return 0;
      } else if (computerSelection == "rock") {
        console.log("You lose!"); 
        return -1;
      } else if (computerSelection == "paper") {
        console.log("You win!");
        return 1;
      }
      break;
    case "paper":
      if (computerSelection == "scissor") {
        console.log("You lose!");
        return -1;
      } else if (computerSelection == "rock") {
        console.log("You win!");
        return 1;
      } else if (computerSelection == "paper") {
        console.log("You tie!");
        return 0;
      }
      break;
    default:
      console.log("Invalid input"); return 2;
  }
}

function getComputerChoice() {
  const options = ["rock", "scissor", "paper"];
  const opt = Math.floor(Math.random() * 3);
  return options[opt];
}

function game(rounds) {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < rounds; i++) {
    while (true) {
      let input = prompt("Your input (rock, scissor, paper): ");
      input = input.toLowerCase();
      computer = getComputerChoice();
      result = playRound(input, computer);
      if (result == -1) {
        computerScore++; 
        break;
      } else if (result == 1) {
        playerScore++;
        break;
      } else if (result == 0) {
        playerScore += 0.5;
        computerScore += 0.5;
        break;
      }
    }
  }

  console.log(`Your score: ${playerScore}/${rounds}`);
  if (playerScore > computerScore) console.log("Final result: you win!");
  else if (playerScore < computerScore) console.log("Final result: you lose!");
  else if (playerScore == computerScore) console.log("Final result: you tie!");
}

game(5);
