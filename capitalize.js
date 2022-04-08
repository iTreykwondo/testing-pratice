const capitalize = (word) => {
  let fullWord = word.split("");
  let firstLetter = fullWord.splice(0, 1).toString().toUpperCase();
  fullWord.splice(0, 0, firstLetter);
  word = fullWord.join("");
  return word;
};

module.exports = capitalize;
