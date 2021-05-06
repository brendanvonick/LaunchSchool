// Read the following code carefully. What do you think is logged on line 7.
// Try to answer the question before you run the code.

let person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
};

console.log(person.fullName);

// NaN is logged to the console. By calling the property person.fullName, this
// refers to the global object. Since there are no firstName and lastName
// properties on the global object, we try to add undefined to undefined, which
// results in NaN.
