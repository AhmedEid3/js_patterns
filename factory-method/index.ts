import ShapeFactory from './ShapeFactory';

const shape1 = new ShapeFactory().getShape('CIRCLE');
shape1?.draw();

const shape2 = new ShapeFactory().getShape('RECTANGLE');
shape2?.draw();
