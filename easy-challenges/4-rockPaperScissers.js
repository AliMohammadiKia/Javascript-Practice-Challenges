// Create a function which takes two strings (p1 and p2 ⁠— which represent player 1 and 2) as arguments and returns a string stating the winner in a game of Rock, Paper, Scissors.

// Each argument will contain a single string: "Rock", "Paper", or "Scissors". Return the winner according to the following rules:

// Rock beats Scissors
// Scissors beats Paper
// Paper beats Rock
// If p1 wins, return the string "The winner is p1". If p2 wins, return the string "The winner is p2" and if p1 and p2 are the same, return "It's a draw".

const rps = (p1, p2) => {
  switch (p1) {
    case "Rock":
      switch (p2) {
        case "Scissors":
          return "The winner is p1";
        case "Paper":
          return "The winner is p2";
        case "Rock":
          return "It's a draw";
        default:
          return "error!";
      }
    case "Scissors":
      switch (p2) {
        case "Rock":
          return "The winner is p1";
        case "Paper":
          return "The winner is p1";
        case "Scissors":
          return "It's a draw";
        default:
          return "error!";
      }
    case "Paper":
      switch (p2) {
        case "Rock":
          return "The winner is p1";
        case "Scissors":
          return "The winner is p2";
        case "Paper":
          return "It's a draw";
        default:
          return "error!";
      }
    default:
      return "error";
  }
};

console.log(rps("Paper", "Paper"));

// Examples
// rps("Rock", "Paper") ➞ "The winner is p2"

// rps("Scissors", "Paper") ➞ "The winner is p1"

// rps("Paper", "Paper") ➞ "It's a draw"
// Notes
// All inputs will be valid strings.
