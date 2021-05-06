class Vehicle {
  constructor() {
    this.fuelLevel = 100;
  }

  move() {
    console.log('I can travel from point A to point B');
  }
}

class Car extends Vehicle {
  constructor(make, model) {
    super();
    this.make = make;
    this.model = model;
  }

  drive() {
    console.log('Vroom vroom, driving from point A to point B');
  }
}

let civic = new Car('Honda', 'Civic');
let boat = new Vehicle();

civic.fuelLevel;
civic.move();
civic.make;
civic.model;
civic.drive();

boat.fuelLevel;
boat.move();
