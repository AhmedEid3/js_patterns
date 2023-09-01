import Shape from './Shape';

export default class Circle extends Shape {
  draw(): void {
    console.log('Inside Circle::draw() method.');
  }
}
