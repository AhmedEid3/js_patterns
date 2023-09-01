function Add(x: number, y: number) {
  return x + y;
}

function Subtract(x: number, y: number) {
  return x - y;
}

function Multiply(x: number, y: number) {
  return x * y;
}

function Divide(x: number, y: number) {
  if (y == 0) {
    throw new Error("Can't divide by zero");
  }

  return x / y;
}

export { Add, Subtract, Multiply, Divide };
