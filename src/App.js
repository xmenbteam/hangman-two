import "./App.css";
import React, { useState, useEffect } from "react";
import Picture from "./Components/Pic";
import Word from "./Components/Word";
import Alphabet from "./Components/Alphabet";
import Gameover from "./Components/Gameover";
import alphEntries from "./bits";

function App() {
  const [usedLetters, setUsedLetters] = useState([]);
  const [correctLetters, setCorrectLetters] = useState([]);

  const [wordsArray, setWordsArray] = useState([
    "word",
    "test: one",
    "test, 2",
    "test (three)",
  ]);
  const [word, setWord] = useState(wordsArray[0]);
  const [wordArray, setWordArray] = useState(word.toUpperCase().split(""));

  const [pictures] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [currentPic, setCurrentPic] = useState(pictures[0]);

  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(false);

  const handleClick = (letterData) => {
    const letter = letterData.target.innerText;
    // if the letter isn't in the chosen word array move the picture on
    wordArray.indexOf(letter) === -1
      ? setCurrentPic(pictures[currentPic + 1])
      : // but if it is, push it in to the new word array
        setCorrectLetters([...correctLetters, letter]);
    // if the letter isn't in the used letter array, add it to the letter array
    usedLetters.indexOf(letter) === -1 &&
      setUsedLetters([...usedLetters, letter]);
  };

  const randomNum = () => {
    const randomNumber = Math.floor(Math.random() * wordsArray.length);
    return randomNumber;
  };

  const newGame = () => {
    setGameOver(false);
    setUsedLetters([]);
    setCorrectLetters([]);
    setWord(wordsArray[randomNum()]);
    setWordArray(word.toUpperCase().split(""));
    setCurrentPic(pictures[0]);
    setWinner(false);
  };

  // const wordArr = [];
  // const isWin = () => {
  //   // filter out the letters themselves in the arrays and check they're all there
  //   const clickedLetters = correctLetters.sort();
  //   const wordLetters = wordArray.sort();

  //   for (let i in wordLetters) {
  //     for (let j in clickedLetters) {
  //       if (wordLetters[i] === clickedLetters[j]) {
  //         wordArr.push(wordLetters[i]);
  //       }
  //     }
  //   }
  //   console.log(wordArr, "WORD ARR");
  //   console.log(clickedLetters, "clicked letters");
  //   console.log(wordLetters, "wordletters");
  // };

  useEffect(() => {
    // isWin();
    if (currentPic === 8) {
      setGameOver(true);
      setWinner(false);
    } else if (correctLetters.length === wordArray.length) {
      setGameOver(true);
      setWinner(true);
    }
  }, [usedLetters, gameOver, currentPic, correctLetters, wordArray]);

  return (
    <div className="App">
      <h1>Hangman</h1>

      {gameOver ? (
        <div>
          <Gameover word={word} newGame={newGame} winner={winner} />
          <Word
            wordArray={wordArray}
            usedLetters={usedLetters}
            gameOver={gameOver}
          />
        </div>
      ) : (
        <div>
          <button onClick={newGame}>Different Word?</button>
          <Picture currentPic={currentPic} />
          <Word
            wordArray={wordArray}
            usedLetters={usedLetters}
            setUsedLetters={setUsedLetters}
          />
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
