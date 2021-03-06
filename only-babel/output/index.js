'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Caluculator = function () {
    function Caluculator(initialvalue) {
        _classCallCheck(this, Caluculator);

        this.value = initialvalue;

        this.increment = this.increment.bind(this);
    }

    _createClass(Caluculator, [{
        key: 'increment',
        value: function increment() {
            return this.value + 1;
        }
    }]);

    return Caluculator;
}();

console.log('before:', 0);
console.log('***increment***');

var increment = new Caluculator(0).increment();

console.log('after:', increment);