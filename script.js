// Generate a random number between 1 and 100

const randomNumber = Math.floor(Math.random() * 100 + 1);

// function to check the users guesss

const checkGuess = () => {
  const userGuess = Number(document.getElementById("guess").value);

  if (!userGuess) {
    document.getElementById("result").textContent =
      "Please enter a valid number";
  } else if (userGuess < randomNumber) {
    document.getElementById("result").textContent = "Two Low";
  } else if (userGuess > randomNumber) {
    document.getElementById("result").textContent = "Two high";
  } else {
    document.getElementById("result").textContent = "Correct";
  }
};
