class Vehicle {
  constructor(wheelCount) {
    this.wheels = wheelCount;
  }

  move() {
    console.log('I can travel from point A to point B');
  }
}

class Car extends Vehicle {
  constructor(wheelCount, make, model) {
    super(wheelCount);
    this.make = make;
    this.model = model;
  }

  move() {
    console.log('Vroom vroom, I drive from point A to point B');
  }
}

class Bike extends Vehicle {
  constructor(wheelCount) {
    super(wheelCount);
    this.helmetRequired = true;
  }

  move() {
    console.log('Pedaling to get from point A to point B');
  }
}

class Plane extends Vehicle {
  constructor(wheelCount) {
    super(wheelCount);
    this.wings = 2;
  }

  move() {
    console.log('I fly from point A to point B');
  }
}



let newCar = new Car(4, 'Honda', 'Accord');
let newBike = new Bike(2);
let newPlane = new Plane(0);

let vehicleArr = [newCar, newBike, newPlane];
vehicleArr.forEach(vehicle => {
  vehicle.move();
});
