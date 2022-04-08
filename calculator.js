const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    if (a === 0) {
      return 0;
    }
    if (b === 0) {
      return (screenText.textContent = "Error");
    }
    return parseFloat(a) / parseFloat(b);
  },
  multiply: function (a, b) {
    return a * b;
  },
};

module.exports = calculator;
