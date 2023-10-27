let counter = 0;
let instance;

class Counter {
  constructor() {
    if (instance) {
      return instance;
    }
    instance = this;
  }
  getInstance() {
    return this;
  }
  increment() {
    return counter++;
  }
  decrement() {
    return counter--;
  }
  getCount() {
    return counter;
  }
}

const singletonCounter = Object.freeze(new Counter());

export default singletonCounter;
