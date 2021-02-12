// 1. What will the following code log to the console? Explain why it logs that
//    value. Try to answer without running the code.

// let qux = { foo: 1 };
// let baz = Object.create(qux);
// console.log(baz.foo + qux.foo);

// The value of 2 is logged to the console. The object qux is created with a
// property 'foo' with a value of 1. We initialize baz as a child of the
// prototype object qux, so it has access to the prototype property 'foo',
// which is also 1. When we add the 2 properties together, we get a logged value
// of 2.


// 2. What will the following code log to the console? Explain why it logs that
//    value. Try to answer without running the code.

// let qux = { foo: 1 };
// let baz = Object.create(qux);
// baz.foo = 2;
//
// console.log(baz.foo + qux.foo);

// The value of 3 is logged to the console. The object qux has a property 'foo'
// with a value of 1 again, and we initialize baz as a child object of qux, so it
// has access to that prototype property. However, when we directly assign it
// the property foo with a value of 2, that is the property used as it becomes
// an own property of the object baz. So when evaluating the sum of foo in each
// object, 3 is the value that is calculated and logged.


// 3. What will the following code log to the console? Explain why it logs that
//    value. Try to answer without running the code.

// let qux = { foo: 1 };
// let baz = Object.create(qux);
// qux.foo = 2;
//
// console.log(baz.foo + qux.foo);

// Again, qux is created with a property foo with value 2. The object baz is
// again initialized as a prototype of object qux, so it has access to the baz
// property 'foo'. When we update foo in qux to be 2, it is reflected in baz as
// inherited properties reflect changes to the prototype object. So here the
// foo property in both objects has a value of 2, so 4 is the ultimate value
// calculated and logged to the console.


// 4. Write a function that searches the prototype chain of an object for a
//    given property and assigns it a new value. If the property does not exist
//    in any of the prototype objects, the function should do nothing. The
//    following code should work as shown:

let fooA = { bar: 1 };
let fooB = Object.create(fooA);
let fooC = Object.create(fooB);
//
// assignProperty(fooC, "bar", 2);
// console.log(fooA.bar); // 2
// console.log(fooC.bar); // 2
//
// assignProperty(fooC, "qux", 3);
// console.log(fooA.qux); // undefined
// console.log(fooC.qux); // undefined
// console.log(fooA.hasOwnProperty("qux")); // false
// console.log(fooC.hasOwnProperty("qux")); // false



function assignProperty(obj, property, value) {
  while (obj !== null) {
    if (obj.hasOwnProperty(property)) {
      obj[property] = value;
      break;
    }

    obj = Object.getPrototypeOf(obj);
  }
}


// 5. Consider the following two loops:
//
//  for (let property in foo) {
//    console.log(`${property}: ${foo[property]}`);
//  }
 // Object.keys(foo).forEach(property => {
 //   console.log(`${property}: ${foo[property]}`);
 // });
//
//  If foo is an arbitrary object, will these loops always log the same results
//  to the console? Explain why they do or do not. If they don't always log the
//  same information, show an example of when the results differ.

//  The don't always log the same results. This is because Object.keys() only
//  logs over an objects' own properties while the first iterates over all
//  of an objects' properties, including inherited properties.

let bar = { a: 'one', b: 2 };
let foo = {};
Object.setPrototypeOf(foo, bar);
foo.c = 3;

 for (let property in foo) {
   console.log(`${property}: ${foo[property]}`);
 }

 // c: 3
 // a: 'one'
 // b: 2

 Object.keys(foo).forEach(property => {
   console.log(`${property}: ${foo[property]}`);
 });

 // c: 3


 // 6. How do you create an object that doesn't have a prototype? How can you
 //    determine whether an object has a prototype?

 // You can create an object without a prototype by creating an object that has
 // a prototype of null with proObject.create(null). You determine if an object
 // has a prototype by using Object.getPrototypeOf(obj). If it doesn't return
 // null then it has a prototype.

 let obj1 = Object.create(null);
 let obj2 = { a: 1, b: 2 };

 Object.getPrototypeOf(obj1); // => null - does not have a prototype
 Object.getPrototypeOf(obj2); // => {} - has a prototype of Object.prototype
 Object.getPrototypeOf(obj2) === Object.prototype; // true
