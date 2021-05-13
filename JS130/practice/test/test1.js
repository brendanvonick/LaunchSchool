'use strict';

class Car {
  constructor() {
    this.wheels = 4;
    this.fuelLevel = 100;
  }

  drive() {
    return 'vroom vroom... driving';
  }
}

module.exports = Car;
