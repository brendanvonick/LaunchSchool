//  Consider the following code:

function Greeting() {}

Greeting.prototype.greet = function(message) {
  console.log(message);
};

function Hello() {}

Hello.prototype = Object.create(Greeting.prototype);

Hello.prototype.hi = function() {
  this.greet('Hello!');
};

function Goodbye() {}

Goodbye.prototype = Object.create(Greeting.prototype);

Goodbye.prototype.bye = function() {
  this.greet("Goodbye");
};

//  What happens in each of the following cases? Try to answer without running
//  the code.


// 1.
// let hello = new Hello();
// hello.hi();

//  logs 'Hello!' to the console.

// 2.
// let hello = new Hello();
// hello.bye();

// Raises a TypeError since neither Hello.prototype nor its prototype,
// Greeting.prototype has a 'bye' method.

// 3.
// let hello = new Hello();
// hello.greet();

// 'undefined' is logged to the console. Hello has access to Greeting's
// prototype, however, since there's no message to be passed into the method,
// undefined is what's logged.

// 4.
// let hello = new Hello();
// hello.greet('Goodbye');

// 'Goodbye' is logged. We use the gret function in Greeting's prototype and
// pass in 'Goodbye' as the message to the greet method. That is what's logged
// to the console.

// 5.
// Hello.hi();

// We get a TypeError because hi is a method of Hello's prototype, not the
// constructor itself, so Hello does not have access to the hi method.
