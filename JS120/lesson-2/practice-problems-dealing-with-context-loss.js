// 1. The code below should output "Christopher Turk is a Surgeon". Without
//    running the code, what will it output? If there is a difference between
//    the actual and desired output, explain the difference.

// let turk = {
//   firstName: 'Christopher',
//   lastName: 'Turk',
//   occupation: 'Surgeon',
//   getDescription() {
//       return this.firstName + ' ' + this.lastName + ' is a '
//                                   + this.occupation + '.';
//   }
// };
//
// function logReturnVal(func) {
//   let returnVal = func();
//   console.log(returnVal);
// }
//
// logReturnVal(turk.getDescription);

//  'undefined undefined is a undefined.' is logged.
//  This does not log the intended result because we are passing the method as
//  an argument to the logReturnVal function when invoking that function. When
//  we do that, the method loses its context.


// 2. Modify the program from the previous problem so that logReturnVal accepts
//    an additional context argument. If you then run the program with turk as
//    the context argument, it should produce the desired output.

// let turk = {
//   firstName: 'Christopher',
//   lastName: 'Turk',
//   occupation: 'Surgeon',
//   getDescription() {
//       return this.firstName + ' ' + this.lastName + ' is a '
//                                   + this.occupation + '.';
//   }
// };
//
// function logReturnVal(func) {
//   let returnVal = func.call(turk);
//   console.log(returnVal);
// }
//
// logReturnVal(turk.getDescription);

// 3. Suppose that we want to extract getDescription from turk, but we always
//    want it to execute with turk as its execution context. How would you
//    modify your code to do that?

// let turk = {
//   firstName: 'Christopher',
//   lastName: 'Turk',
//   occupation: 'Surgeon',
//   getDescription() {
//       return this.firstName + ' ' + this.lastName + ' is a '
//                                   + this.occupation + '.';
//   }
// };
//
// function logReturnVal(func) {
//   let returnVal = func();
//   console.log(returnVal);
// }
//
// let getTurkDescription = turk.getDescription.bind(turk);
// logReturnVal(getTurkDescription);


// 4. Consider the following code:

// const TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames: function() {
//     this.titles.forEach(function(title) {
//       console.log(this.seriesTitle + ': ' + title);
//     });
//   }
// };
//
// TESgames.listGames();

//    Will this code produce the following output? Why or why not?

// The Elder Scrolls: Arena
// The Elder Scrolls: Daggerfall
// The Elder Scrolls: Morrowind
// The Elder Scrolls: Oblivion
// The Elder Scrolls: Skyrim

//  No it will not produce this output because forEach uses the global context
//  when functions are passed as arguments to other functions. For each
//  iteration, this.seriesTitle evaluates to Undefined.


// 5. Use let self = this; to ensure that TESgames.listGames uses TESGames as
//    its context and logs the proper output.

// const TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames: function() {
//     let self = this;
//     this.titles.forEach(function(title) {
//       console.log(self.seriesTitle + ': ' + title);
//     });
//   }
// };
//
// TESgames.listGames();


// 6. The forEach method provides an alternative way to supply the execution
//    context for the callback function. Modify the program from the previous
//    problem to use that technique to produce the proper output:

// const TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames: function() {
//     let self = this;
//     this.titles.forEach(function(title) {
//       console.log(self.seriesTitle + ': ' + title);
//     }, this);
//   }
// };
//
// TESgames.listGames();


// 7. Use an arrow function to achieve the same result:

// const TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames: function() {
//     let self = this;
//     this.titles.forEach(title => {
//       console.log(self.seriesTitle + ': ' + title);
//     });
//   }
// };
//
// TESgames.listGames();


// 8. Consider the following code:

// let foo = {
//   a: 0,
//   incrementA: function() {
//     function increment() {
//       this.a += 1;
//     }
//
//     increment();
//   }
// };
//
// foo.incrementA();
// foo.incrementA();
// foo.incrementA();

//    What will the value of foo.a be after this code runs?

//  foo.a will be 0 still because increment() gets invoked as a normal function
//  it uses the global context so the value of foo.a isn't modified.


// 9. Use one of the methods we learned in this lesson to invoke increment with
//    an explicit context such that foo.a gets incremented with each invocation
//    of incrementA.

// let foo = {
//   a: 0,
//   incrementA: function() {
//     increment = function() {
//       this.a += 1;
//     }.bind(this);
//
//     increment();
//   }
// };
//
// foo.incrementA();
// foo.incrementA();
// foo.incrementA();
