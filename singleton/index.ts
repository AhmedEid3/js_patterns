import connectionDb from './db.js';
import connectionDb2 from './init-db.js';

console.log(connectionDb); // { db: 'mongodb://localhost:27017/ecommerce' }
console.log(connectionDb2); // { db: 'mongodb://localhost:27017/ecommerce' }
console.log(connectionDb === connectionDb2); // true
