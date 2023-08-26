function Add(x, y) {
  return x + y;
}

function Subtract(x, y) {
  return x - y;
}

function Multiply(x, y) {
  return x * y;
}

function Divide(x, y) {
  if (y == 0) {
    throw new Error("Can't divide by zero");
  }

  return x / y;
}

export { Add, Subtract, Multiply, Divide };
