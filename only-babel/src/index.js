class Caluculator {
  constructor(initialvalue) {
      this.value = initialvalue

      this.increment = this.increment.bind(this)
  }

  increment() {
      return this.value + 1
  }
}

console.log('before:', 0);
console.log('***increment***');

const increment = new Caluculator(0).increment()

console.log('after:', increment);
