import React, { useState } from "react";
import "./Game.css";

function Game() {


  const [gue, setGue] = useState("");
  const [com, setCom] = useState("");
  const [sym, setSym] = useState("");

  const gene = () => {
    var a = Math.floor(Math.random() * 10);

    var b = Math.floor(Math.random() * 10);

    var c = Math.floor(Math.random() * 10);

    var d = Math.floor(Math.random() * 10);

    if (a === b || a === c || a === d || b === c || b === d || c === d) {
      gene();
    } else {
      setGue([a, b, c, d]);
      console.log(a, b, c, d);
    }
  };

  const compare = (s1, s2) => {
    var res=""
    for (var i in s1) {
      for (var j in s2) {
        if(s1===s2){
            setSym("Your Winner")
        }
        if (s1[i] === s2[j] && i === j) {
          setSym("+");
        } else if (s1[i] === s2[j]) {
          setSym("-");
        }
      }
    }
  };

  return (
    <div className="container">
      <button onClick={gene}>Refresh</button>
      <h1>Guessing Game {gue}</h1>
      <input
        type="number"
        placeholder="enter Number here"
        onChange={(e) => {
          setCom(e.target.value);
        }}
      />
      <br />
      <button onClick={compare(gue, com)}>Guess</button>
      <p id="msg1">Your Gues is {sym}</p>
      <p id="msg2">Number of Guess</p>
      <p id="msg3">Guessed Pattern Are </p>
      <h4>Note:</h4>
      <p>
        <b>+</b> Correct value and Correct Place{" "}
      </p>
      <p>
        <b>-</b> Correct value but wrong Place{" "}
      </p>
      <p>
        <b>*</b> No Such value exist{" "}
      </p>
    </div>
  );
}

export default Game;
