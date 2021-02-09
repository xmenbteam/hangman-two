import "./App.css";
import React, { useState, useEffect } from "react";
import Picture from "./Components/Pic";
import Word from "./Components/Word";
import Alphabet from "./Components/Alphabet";
import Gameover from "./Components/Gameover";
import { alphEntries, numEntries } from "./bits";
// import wordsArrayImp from "./Components/Words";
import getRandomWords from "./Components/API";

function App() {
  const [usedLetters, setUsedLetters] = useState([]);
  const [correctLetters, setCorrectLetters] = useState([]);

  const [wordsArray, setWordsArray] = useState(["WELCOME!"]);
  const [word, setWord] = useState(wordsArray[0]);
  const [wordArray, setWordArray] = useState(word);

  const [pictures] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [currentPic, setCurrentPic] = useState(pictures[0]);

  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(false);

  useEffect(() => {
    getRandomWords().then((res) => {
      console.log(res, "RESPONSE");
      const array = res;
      const newArray = array.map((word) => {
        return word.word;
      });
      setWordsArray(newArray);
      console.log(wordsArray, "WORDS ARRAY");
    });
  }, []);

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

  useEffect(() => {
    const sortUsed = (correctLetters) => {
      const sortedUsed = correctLetters.sort().toString();
      return sortedUsed;
    };

    const sortWord = (wordArray) => {
      const regex = /[A-Z0-9]/g;
      const reducedWord = Array.from(new Set(wordArray));
      const sortedWord = reducedWord.sort().toString();
      const filteredWord = sortedWord.match(regex).toString();
      return filteredWord;
    };

    const sortedUsed = sortUsed(correctLetters);
    const sortedWord = sortWord(wordArray);

    console.log(sortedWord, "SORTED WORD");
    console.log(sortedUsed, "SORTED USED");

    // isWin();
    if (currentPic === 8) {
      setGameOver(true);
      setWinner(false);
    } else if (sortedUsed === sortedWord) {
      setGameOver(true);
      setWinner(true);
    }
  }, [usedLetters, gameOver, currentPic, correctLetters, wordArray, word]);

  return (
    <div className="App">
      <h1>Obscure Word Hangman!</h1>
      <h2>
        Powered by{" "}
        <a href="http://www.wordnik.com" target="blank">
          Wordnik
        </a>
      </h2>

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
            numEntries={numEntries}
            handleClick={handleClick}
            usedLetters={usedLetters}
          />
        </div>
      )}
    </div>
  );
}

export default App;
