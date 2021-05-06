function Vehicle() {
  this.fuelLevel = 100;
}

Vehicle.prototype.move = function() {
  console.log("I can travel from point A to point B");
}

function Car(make, model) {
  this.make = make;
  this.model = model;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.drive = function() {
  console.log('Vroom vroom, driving from point A to point B');
}

let boat = new Vehicle();
boat.fuelLevel;
boat.move();

let accord = new Car('Honda', 'accord');
accord.fuelLevel;
accord.move();
accord.make;
accord.model;
accord.drive();
console.log(accord.constructor === Car);
console.log(Object.getPrototypeOf(accord) === Car.prototype);
console.log(Object.getPrototypeOf(Car.prototype) === Vehicle.prototype);
