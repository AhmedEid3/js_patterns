import Shape from './Shape';

export default class Rectangle extends Shape {
  draw(): void {
    console.log('Inside Rectangle::draw() method.');
  }
}
