let car = {
  make: 'Honda',
  model: 'Accord',
  info: function() {
    console.log(`My car is a ${this.make} ${this.model}.`);
  }
}


function logInfo(func) {
  func();
}

logInfo(car.info);


// fix with context as argument:

// function logInfo(func, context) {
//   func.call(context);
// }
//
// logInfo(car.info, car);
