export function createProof() {
  const FirstNumber = Math.floor((Math.random() * 100) + 1);
  const SecondNumber = Math.floor((Math.random() * 100) + 1);
  const mathOperators = ['+', '-', '/', '*'];
  const operatorChoosed = mathOperators[Math.floor(Math.random() * mathOperators.length)];
  const equation = `${FirstNumber} ${operatorChoosed} ${SecondNumber}`;
  const result = Number(eval(equation));

  return {
    equation,
    result
  };
}
