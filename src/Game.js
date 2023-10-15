import React, { useState } from "react";
import "./Game.css";

function Game() {
  const [name, setName] = useState("");
  const [guess, setGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState("");
  const [score, setScore] = useState();

  function generateRandomNumber() {
    const digits = [];
    while (digits.length < 4) {
      const rand = Math.floor(Math.random() * 10);
      if (!digits.includes(rand)) {
        digits.push(rand);
      }
    }

    setAnswer(digits.join(""));
  }

  function evaluateGuess(guess, answer) {
    const plusMinus = [];
    const answerDigits = answer.split("").map(Number);
    guess.split("").forEach((digit, i) => {
      const index = answerDigits.indexOf(Number(digit));
      if (index === i) {
        plusMinus.push("+");
      } else if (index !== -1) {
        plusMinus.push("-");
      } else {
        plusMinus.push("*");
      }
    });

    return plusMinus.join("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    const plusMinus = evaluateGuess(guess, answer);

    const newGuesses = [...guesses, { guess, plusMinus }];
    setGuesses(newGuesses);
    setGuess("");
    setResult(plusMinus);
    if (plusMinus === "++++") {
      const newScore = { name, guesses: newGuesses.length, time: Date.now() };
      setScore(newScore);
      localStorage.setItem("bestScore", JSON.stringify(newScore));
    }
  }

  const bestScore = JSON.parse(localStorage.getItem("bestScore"));

  return (
    <div className="container">
      <h1>Guessing Game {answer}</h1>

      {score && (
        <p>
          Congratulations <span className="name">{name}</span> ! You guessed the
          answer in {guesses.length} tries!
        </p>
      )}
      {!score && (
        <>
          <button onClick={generateRandomNumber}>Refresh</button>
          <form onSubmit={handleSubmit}>
            <label>
              Enter your name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <br />
            <label>
              Enter your guess:
              <input
                type="text"
                pattern="\d{4}"
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
              />
            </label>
            <button type="submit">Guess</button>
          </form>
        </>
      )}

      {guesses.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Guess</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            {guesses.map((gue, i) => (
              <tr key={i}>
                <td>{gue.guess}</td>
                <td>{gue.plusMinus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {result && <p>{result}</p>}
      {bestScore && (
        <p>
          Best score: {bestScore.name} guessed the answer in {bestScore.guesses}{" "}
          tries on {new Date(bestScore.time).toLocaleString()} and the Guessing
          Probability is {((1 / bestScore.guesses) * 100).toFixed(3)}%.
        </p>
      )}

      <h4>Note</h4>
      <div className="footer">
        <p>
          <b>+</b> Correct value and Correct Place{" "}
        </p>
        <p>
          <b>-</b> Correct value but wrong Place{" "}
        </p>
        <p>
          <b>*</b> No Such value exist{" "}
        </p>
        <p>
          <b>Refresh</b> enter the button each time it will show the random
          Number for the development purpose only.
        </p>
      </div>
    </div>
  );
}

export default Game;
