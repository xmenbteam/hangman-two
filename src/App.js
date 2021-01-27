import "./App.css";
import React, { useState, useEffect } from "react";
import Picture from "./Components/Pic";
import Word from "./Components/Word";
import Alphabet from "./Components/Alphabet";
import Gameover from "./Components/Gameover";

const alph = {
  1: "A",
  2: "B",
  3: "C",
  4: "D",
  5: "E",
  6: "F",
  7: "G",
  8: "H",
  9: "I",
  10: "J",
  11: "K",
  12: "L",
  13: "M",
  14: "N",
  15: "O",
  16: "P",
  17: "Q",
  18: "R",
  19: "S",
  20: "T",
  21: "U",
  22: "V",
  23: "W",
  24: "X",
  25: "Y",
  26: "Z",
};
const alphEntries = Object.entries(alph);

function App() {
  const [usedLetters, setUsedLetters] = useState([]);
  const [wordsArray, setWordsArray] = useState([
    "as",
    "NOGGIN",
    "FARMERS",
    "RUMPLESTILTSKIN",
  ]);
  const [word, setWord] = useState(wordsArray[0]);
  const [pictures] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [currentPic, setCurrentPic] = useState(pictures[0]);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(false);
  const [wordArray] = useState(word.toUpperCase().split(""));
  const [newWordArray, setNewWordArray] = useState([]);

  const handleClick = (letterData) => {
    // console.log(letterData.target.innerText, "LETTERDATA");
    const letter = letterData.target.innerText;
    // if the letter isn't in the chosen word array move the picture on
    wordArray.indexOf(letter) === -1
      ? setCurrentPic(pictures[currentPic + 1])
      : setNewWordArray([...newWordArray, letter]);
    // if the letter isn't in the used letter array, add it to the letter array
    usedLetters.indexOf(letter) === -1 &&
      setUsedLetters([...usedLetters, letter]);
  };

  const newGame = () => {
    setGameOver(false);
    setCurrentPic(pictures[0]);
    setWord(wordsArray[1]);
  };

  useEffect(() => {
    if (currentPic === 8) {
      setGameOver(true);
      setWinner(false);
    } else if (newWordArray.length === wordArray.length) {
      setGameOver(true);
      setWinner(true);
    }
  }, [usedLetters, currentPic, gameOver, newWordArray, wordArray]);

  return (
    <div className="App">
      <h1>Hangman</h1>
      {gameOver ? (
        <div>
          <Gameover word={word} newGame={newGame} winner={winner} />
        </div>
      ) : (
        <div>
          <Picture currentPic={currentPic} />
          <Word wordArray={wordArray} usedLetters={usedLetters} />
          <Alphabet
            alphEntries={alphEntries}
            handleClick={handleClick}
            usedLetters={usedLetters}
          />
        </div>
      )}
    </div>
  );
}

export default App;
