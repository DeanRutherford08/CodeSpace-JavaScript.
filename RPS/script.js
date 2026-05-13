function playGame(userChoice) {

  const choices = ['rock', 'paper', 'scissors'];

  // Random computer choice
  const randomIndex = Math.floor(Math.random() * 3);
  const computerChoice = choices[randomIndex];

  // Show choices on screen
  document.getElementById('your-choice').textContent =
    "Your Choice: " + userChoice;

  document.getElementById('computer-choice').textContent =
    "Computer Choice: " + computerChoice;

  // Decide result
  let result = "";

  if (userChoice === computerChoice) {
    result = "It's a draw!";
  } 
  else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = "You win!";
  } 
  else {
    result = "You lose!";
  }

  // Show result
  document.getElementById('result').textContent =
    "Result: " + result;

  // Optional: show in console
  console.log(userChoice, computerChoice, result);
}