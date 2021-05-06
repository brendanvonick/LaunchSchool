// Implement an ancestors method that returns the prototype chain (ancestors)
// of a calling object as an array of object names. Here's an example output:

// name property added to make objects easier to identify
// let foo = {name: 'foo'};
// let bar = Object.create(foo);
// bar.name = 'bar';
// let baz = Object.create(bar);
// baz.name = 'baz';
// let qux = Object.create(baz);
// qux.name = 'qux';
//
// qux.ancestors();  // returns ['baz', 'bar', 'foo', 'Object.prototype']
// baz.ancestors();  // returns ['bar', 'foo', 'Object.prototype']
// bar.ancestors();  // returns ['foo', 'Object.prototype']
// foo.ancestors();  // returns ['Object.prototype']

let foo = {name: 'foo'};

foo.ancestors = function() {
  Object.getPrototypeOf(foo).name = 'Object.prototype';
  let prototypes = [];
  let self = this;
  while (Object.getPrototypeOf(self) !== null) {
    prototypes.push(Object.getPrototypeOf(self).name);
    self = Object.getPrototypeOf(self);
  }
  return prototypes;
}

let bar = Object.create(foo);
bar.name = 'bar';
let baz = Object.create(bar);
baz.name = 'baz';
let qux = Object.create(baz);
qux.name = 'qux';

qux.ancestors();  // returns ['baz', 'bar', 'foo', 'Object.prototype']
baz.ancestors();  // returns ['bar', 'foo', 'Object.prototype']
bar.ancestors();  // returns ['foo', 'Object.prototype']
foo.ancestors();  // returns ['Object.prototype']
