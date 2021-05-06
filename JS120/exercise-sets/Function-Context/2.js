// The method franchise.allMovies is supposed to return the following array:

// [
//   'How to Train Your Dragon 1',
//   'How to Train Your Dragon 2',
//   'How to Train Your Dragon 3'
// ]

// Explain why this method will not return the desired object? Try fixing this
// problem by taking advantage of JavaScript lexical scoping rules.
//
// let franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies: function() {
//     return [1, 2, 3].map(function(number) {
//       return this.name + ' ' + number;
//     });
//   },
// };

// Because there is a nested function within the method and this is used within
// that nested function, when we call the method with method invocation, the
// execution context of this gets set to the global object. There is no name
// property on the global object so we don't see the desired results. One way
// to fix this is to use an arrow function inside maps callback.

let franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    return [1, 2, 3].map(number => {
      return this.name + ' ' + number;
    });
  },
};
