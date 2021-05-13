const Car = require('./test1.js');


describe('The Car class', () => {
  let car;
  beforeEach(() => {
    car = new Car();
  });

  test('The car has 4 wheels', () => {
    expect(car.wheels).toBe(4);
  });

  test('The car can drive', () => {
    expect(car.drive()).toContain('driving');
  });

  test('The car has fuel', () => {
    expect(car.fuelLevel > 0).toBe(true);
  });
});
