'use strict';

var _increment = require('./increment');

var _increment2 = _interopRequireDefault(_increment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('before:', 0);
console.log('***increment***');

var increment = new _increment2.default(0).increment();

console.log('after:', increment);