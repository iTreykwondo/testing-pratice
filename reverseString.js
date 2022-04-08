const reverseString = (word) => {
  let fullWord = word.split("").reverse().join("");
  word = fullWord;
  return word;
};

module.exports = reverseString;
