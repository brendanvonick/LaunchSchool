let carPrototype = {
  init(make, model) {
    this.make = make;
    this.model = model;
    return this;
  },

  drive: function() {
    console.log('vroom vroom, driving along.');
  }
}

let civic = Object.create(carPrototype).init('Honda', 'Civic');
let accord = Object.create(carPrototype).init('Honda', 'Accord');

civic.make;
civic.hasOwnProperty('make');
civic.model;
civic.drive();
console.log(civic.hasOwnProperty('drive') === false);
console.log(Object.getPrototypeOf(civic).hasOwnProperty('drive') === true);

accord.make;
accord.model;
accord.drive();
