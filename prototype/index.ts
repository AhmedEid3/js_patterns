import Prototype from './prototype';

const emp1 = new Prototype('John Doe', 9000, 7);
const emp2 = emp1.clone();

console.log(emp1);
console.log(emp2);
console.log(emp1 === emp2);
