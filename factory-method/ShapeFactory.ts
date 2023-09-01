import Circle from './Circle';
import Rectangle from './Rectangle';

export default class ShapeFactory {
  getShape(shapeType: string) {
    if (shapeType === 'CIRCLE') {
      return new Circle();
    } else if (shapeType === 'RECTANGLE') {
      return new Rectangle();
    }
    return null;
  }
}
