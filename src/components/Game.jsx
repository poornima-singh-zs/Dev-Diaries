import { useState } from "react";
import "./Game.css"
const Game = () => {
  const choices = ["Rock", "Paper", "Scissors"];
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");

  const playGame = (choice) => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerPick = choices[randomIndex];

    setUserChoice(choice);
    setComputerChoice(computerPick);

    if (choice === computerPick) {
      setResult("It's a Draw! 🤝");
    } else if (
      (choice === "Rock" && computerPick === "Scissors") ||
      (choice === "Paper" && computerPick === "Rock") ||
      (choice === "Scissors" && computerPick === "Paper")
    ) {
      setResult("You Win! 🎉");
    } else {
      setResult("You Lose! 😢");
    }
  };

  return (
    <div className="game-container">
      <h2>🎮 Rock, Paper, Scissors</h2>
      <p>Choose your move:</p>
      <div className="buttons">
        {choices.map((choice) => (
          <button key={choice} onClick={() => playGame(choice)}>
            {choice}
          </button>
        ))}
      </div>
      {userChoice && (
        <div className="results">
          <p><strong>You:</strong> {userChoice} </p>
          <p><strong>Computer:</strong> {computerChoice} </p>
          <h3>{result}</h3>
        </div>
      )}
    </div>
  );
};

export default Game;

