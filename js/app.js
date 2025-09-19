function Calculator() {
  this.actions = ["+", "-", "*", "/", "^"];
  this.history = [];
}

Calculator.prototype.isCorrectAction = function (action) {
  return this.actions.includes(action); // zwraca true lub false
};

Calculator.prototype.getHistoryAsString = function () {
  return this.history.join("\n"); // zwraca historię operacji, każdą operację np. 1 + 1 = 2, w nowej linii
};

Calculator.prototype.performCalculation = function (
  num1,
  num2,
  operator,
  result
) {
  const str = `${num1} ${operator} ${num2} = ${result}`;
  this.history.push(str);
  return result;
};
Calculator.prototype.add = function (num1, num2) {
  const result = num1 + num2;
  return this.performCalculation(num1, num2, "+", result);

  // 1. zamień wartości przekazane przez parametr na typ number
  // 2. sprawdź czy są one poprawne
  // 3. jeśli tak to wykonaj działanie i zapisz jego resultat
  // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2
};

Calculator.prototype.substract = function (num1, num2) {
  const result = num1 - num2;
  return this.performCalculation(num1, num2, "-", result);
};

Calculator.prototype.multiply = function (num1, num2) {
  const result = num1 * num2;
  return this.performCalculation(num1, num2, "*", result);
};

Calculator.prototype.divide = function (num1, num2) {
  const result = num1 / num2;
  return this.performCalculation(num1, num2, "/", result);
};

Calculator.prototype.power = function (num1, num2) {
  let counter = 0;
  let result = 1;
  while (counter !== num2) {
    result = result * num1;
    counter = counter + 1;
  }
  return this.performCalculation(num1, num2, "^", result);
};

const calc = new Calculator();
let action, promptContent, isCorrectAction, number1, number2;
do {
  promptContent =
    "Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n"; // \n - znak nowej linii
  promptContent += "Jeśli chcesz zrezygnować wciśnij Anuluj. \n";
  promptContent += "Lista poprzednich operacji: \n" + calc.getHistoryAsString();

  action = prompt(promptContent);
  isCorrectAction = calc.isCorrectAction(action);
  if (isCorrectAction) {
    number1 = Number(prompt("Podaj liczbę nr 1"));
    number2 = Number(prompt("Podaj liczbę nr 2"));

    if (action === "+") {
      calc.add(number1, number2);
    } else if (action === "-") {
      calc.substract(number1, number2);
    } else if (action === "*") {
      calc.multiply(number1, number2);
    } else if (action === "/") {
      calc.divide(number1, number2);
    } else if (action === "^") {
      calc.power(number1, number2);
    }
  }
} while (calc.isCorrectAction(action));
