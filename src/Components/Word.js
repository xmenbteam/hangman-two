import React from "react";

const Word = ({ wordArray, usedLetters }) => {
  return (
    <div>
      <ul className="wordList">
        {wordArray.map((letter) => {
          return usedLetters.indexOf(letter) === -1 ? (
            <li className="blankLetter" key={letter}>
              <p>_</p>
            </li>
          ) : (
            <li className="wordLetter" key={letter}>
              <p>{letter}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Word;
