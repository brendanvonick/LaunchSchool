

let car = {
  make: 'Honda',
  model: 'Accord',
  info: function() {
    return `My car is a ${this.make} ${this.model}.`;
  }
}

let carInfo = car.info;
carInfo();

// fix with bind:
// let carInfo = car.info.bind(this);
