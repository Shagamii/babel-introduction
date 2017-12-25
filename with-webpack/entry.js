import Caluculator from './modules/increment';

console.log('before:', 0);
console.log('***increment***');

const increment = new Caluculator(0).increment()

console.log('after:', increment);
