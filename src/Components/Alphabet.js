import React from "react";
import "../App.css";

const Alphabet = ({ alphEntries, handleClick, usedLetters }) => {
  return (
    <div>
      <ul className="alphabet">
        {alphEntries.map((letter) => {
          return usedLetters.indexOf(letter[1]) === -1 ? (
            <li key={letter[0]}>
              <button className="letter" onClick={handleClick}>
                {letter[1]}
              </button>
            </li>
          ) : (
            <li key={letter[0]}>
              <button className="disabledLetter" disabled="true">
                {letter[1]}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Alphabet;
