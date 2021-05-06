let carLot = {
  cars: ['accord', 'civic', 'camry'],
  year: 2008,
  logCarYears: function() {
    this.cars.forEach(function(car) {
      console.log(`${car}: ${this.year}`);
    });
  }
}

carLot.logCarYears();

// fix with variable in outer scope

// let carLot = {
//   cars: ['accord', 'civic', 'camry'],
//   year: 2008,
//   logCarYears: function() {
//     let self = this;
//     this.cars.forEach(function(car) {
//       console.log(`${car}: ${self.year}`);
//     });
//   }
// }
//
// carLot.logCarYears();

// fix with bind

// let carLot = {
//   cars: ['accord', 'civic', 'camry'],
//   year: 2008,
//   logCarYears: function() {
//     this.cars.forEach(function(car) {
//       console.log(`${car}: ${this.year}`);
//     }.bind(this));
//   }
// }
//
// carLot.logCarYears();

// fix with arrow function

// let carLot = {
//   cars: ['accord', 'civic', 'camry'],
//   year: 2008,
//   logCarYears: function() {
//     this.cars.forEach(car => {
//       console.log(`${car}: ${this.year}`);
//     });
//   }
// }
//
// carLot.logCarYears();

// fix with optional thisArg

// let carLot = {
//   cars: ['accord', 'civic', 'camry'],
//   year: 2008,
//   logCarYears: function() {
//     this.cars.forEach(function(car) {
//       console.log(`${car}: ${this.year}`);
//     }, this);
//   }
// }
//
// carLot.logCarYears();
