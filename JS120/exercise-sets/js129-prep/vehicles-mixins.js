let flyable = {
  move() {
    console.log('I can fly from point A to point B');
  }
}

class Plane {}
Object.assign(Plane.prototype, flyable);

class Helicopter {}
Object.assign(Helicopter.prototype, flyable);

let newPlane = new Plane();
let newHeli = new Helicopter();

newPlane.move();
newHeli.move();
