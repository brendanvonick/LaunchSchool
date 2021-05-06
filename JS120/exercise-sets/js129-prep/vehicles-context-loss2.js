let car = {
  make: 'Honda',
  model: 'Accord',
  info: function() {
    function logInfo() {
      console.log(`My car is a ${this.make} ${this.model}l`);
    }

    logInfo();
  }
}

car.info();

// fix with call/apply

// let car = {
//   make: 'Honda',
//   model: 'Accord',
//   info: function() {
//     function logInfo() {
//       console.log(`My car is a ${this.make} ${this.model}l`);
//     }
//
//     logInfo.call(this);
//   }
// }
//
// car.info();

// fix with variable in outer scope

// let car = {
//   make: 'Honda',
//   model: 'Accord',
//   info: function() {
//     let self = this;
//     function logInfo() {
//       console.log(`My car is a ${self.make} ${self.model}l`);
//     }
//
//     logInfo();
//   }
// }
//
// car.info();

// fix with arrow function

// let car = {
//   make: 'Honda',
//   model: 'Accord',
//   info: function() {
//     let logInfo = () => {
//       console.log(`My car is a ${this.make} ${this.model}l`);
//     }
//
//     logInfo();
//   }
// }
//
// car.info();

// fix with bind

// let car = {
//   make: 'Honda',
//   model: 'Accord',
//   info: function() {
//     let logInfo = function() {
//       console.log(`My car is a ${this.make} ${this.model}l`);
//     }.bind(this);
//
//     logInfo();
//   }
// }
//
// car.info();
