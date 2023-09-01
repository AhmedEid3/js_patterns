import connectionDb from './db';
import connectionDb2 from './init-db';

console.log(connectionDb); // { db: 'mongodb://localhost:27017/ecommerce' }
console.log(connectionDb2); // { db: 'mongodb://localhost:27017/ecommerce' }
console.log(connectionDb === connectionDb2); // true
