import calculator from "../calculator";

test("Adds two numbers", () => {
  expect(calculator.add(1, 2)).toEqual(3);
});

test("Subtracts two numbers", () => {
  expect(calculator.subtract(3, 1)).toEqual(2);
});

test("Divides two numbers", () => {
  expect(calculator.divide(6, 2)).toEqual(3);
});

test("Multiply two numbers", () => {
  expect(calculator.multiply(2, 3)).toEqual(6);
});
