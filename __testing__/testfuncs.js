const word = "test (three)";

const usedLetters = ["T", "E", "S", "H", "R"];
const wordArray = word.toUpperCase().split("");

const compArr = (usedLetters, wordArray) => {
  const regex = /[A-Z0-9]/g;
  const sortedUsed = usedLetters.sort().toString();
  console.log(sortedUsed);

  const reducedWord = Array.from(new Set(wordArray));
  const sortedWord = reducedWord.sort().toString();
  const filteredWord = sortedWord.match(regex).toString();

  console.log(filteredWord);
};

compArr(usedLetters, wordArray);

// module.exports = { compArr };
