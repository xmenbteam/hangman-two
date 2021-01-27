let wordArray = ["S", "L", "E", "E", "P", "Y"];
let usedLetters = ["S", "L", "E", "P", "Y"];

const compArr = (usedLetters, wordArray) => {
  for (let i in usedLetters) {
    if (wordArray.includes(usedLetters[i])) {
      continue;
    }
    console.log(true);
    return true;
  }
  console.log(false);
  return false;
};

compArr(usedLetters, wordArray);
