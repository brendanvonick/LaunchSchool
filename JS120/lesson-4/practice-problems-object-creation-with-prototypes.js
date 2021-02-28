// 1. Use a factory function to create pet objects. The factory should let us
//    create and use pets like this:

// let pudding = createPet("Cat", "Pudding");
// console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
// pudding.sleep(); // I am sleeping
// pudding.wake();  // I am awake

// let neptune = createPet("Fish", "Neptune");
// console.log(`I am a ${neptune.animal}. My name is ${neptune.name}.`);
// neptune.sleep(); // I am sleeping
// neptune.wake();  // I am awake
//
// function createPet(animal, name) {
//   return {
//     animal,
//     name,
//
//     sleep() {
//       return 'I am sleeping';
//     },
//
//     wake() {
//       return 'I am awake';
//     },
//   };
// }


// 2. Use the OLOO pattern to create an object prototype that we can use to
//  create pet objects. The prototype should let us create and use pets like
//  this:

// let pudding = Object.create(PetPrototype).init("Cat", "Pudding");
// console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
// pudding.sleep(); // I am sleeping
// pudding.wake();  // I am awake
//
// let neptune = Object.create(PetPrototype).init("Fish", "Neptune");
// console.log(`I am a ${neptune.animal}. My name is ${neptune.name}.`);
// neptune.sleep(); // I am sleeping
// neptune.wake();  // I am awake

// let PetPrototype = {
//   init(animal, name) {
//     this.animal = animal;
//     this.name = name;
//     return this;
//   },
//
//   sleep() {
//     return 'I am sleeping';
//   },
//
//   wake() {
//     return 'I am awake';
//   },
//
//
// };

// 3. Consider the objects created by the programs in problems 1 and 2. How do
//    objects for the same animal differ from each other?

//  The objects created in problem 2 have the methods stored in the prototype,
//  so those methods are shared by the objects. Because of this, problem 2 is
//  more efficient with use of memory. Objects created in the 1st problem can
//  have private state since factory functions create private state in the
//  returned objects, which isn't something available to objects created with
//  OLOO.
