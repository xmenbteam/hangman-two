import React from "react";

const Word = ({ wordArray, usedLetters, gameOver }) => {
  const wordObj = Object.entries(wordArray);
  const regex = /[!:,\.\(\)\s]/g;

  console.log(wordObj);
  console.log(usedLetters, "USED LETTERS");

  return gameOver ? (
    <div>
      <ul className="wordList">
        {wordObj.map((letter) => {
          return (
            <li className="wordLetter" key={letter[0]}>
              <p>{letter[1]}</p>
            </li>
          );
        })}
      </ul>
    </div>
  ) : (
    <div>
      <ul className="wordList">
        {wordObj.map((letter) => {
          if (regex.test(letter[1])) {
            return (
              // special character
              <li className="wordLetter" key={letter[0]}>
                <p>{letter[1]}</p>
                {console.log(letter, "CHARACTER")}
              </li>
            );
          } else if (usedLetters.indexOf(letter[1]) === -1) {
            return (
              <li className="blankLetter" key={letter[0]}>
                {console.log(letter, "BLANK LETTER")}
                <p>_</p>
              </li>
            );
          } else
            return (
              <li className="wordLetter" key={letter[0]}>
                {console.log(letter, "SHOWING LETTER")}
                <p>{letter[1]}</p>
              </li>
            );
        })}
      </ul>
    </div>
  );
};

export default Word;
