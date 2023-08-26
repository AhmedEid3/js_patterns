import { isAllLetters, isValidEmail } from './validation.js';

export const user = {
  firstName: 'John',
  lastName: 'Doe',
  username: 'johndoe',
  age: 42,
  email: 'john@doe.com',
};

const userProxy = new Proxy(user, {
  get: (obj, property) => {
    return `${new Date()} | The value of ${property.toString()} is ${Reflect.get(obj, property)}`;
  },
  set: (obj, property, value) => {
    if (property === 'username') {
      if (!isAllLetters(value)) {
        throw new TypeError('Username is not all letters');
      }
      if (value.length < 3) {
        throw new TypeError('Username is too short');
      }
    }

    if (property === 'email') {
      if (!isValidEmail(value)) {
        throw new TypeError('Email is not valid');
      }
    }

    if (property === 'age') {
      if (!Number.isInteger(value)) {
        throw new TypeError('Age is not an integer');
      }
      if (value < 0) {
        throw new TypeError('Age is a negative number');
      }
      if (value < 18) {
        throw new TypeError('Age is below 18');
      }
    }

    return Reflect.set(obj, property, value);
  },
});

userProxy.firstName;
userProxy.lastName;

userProxy.age = 18;
userProxy.age;

userProxy.email = 'john@doe.com';
userProxy.email;

userProxy.username = 'jon';
userProxy.username;

console.log(userProxy.firstName);
