function carCreator(make, model) {
  return {
    make: make,
    model: model,
    drive: function() {
      console.log('vroom vroom, driving along');
    }
  }
}

let civic = carCreator('Honda', 'civic');
let accord = carCreator('Honda', 'accord');

civic.make;
civic.model;
civic.drive();
civic.hasOwnProperty('make');
civic.hasOwnProperty('drive');

accord.make;
accord.model;
accord.drive();
