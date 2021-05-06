//  Is the named function inside in this IIFE accessible in the global scope?

(function foo() {
  console.log('Bar');
})();

foo() // ?

//  No, it is not. We have created an immediately invoked function that is not
//  accessible in the global scope. We see that when trying to invoke it on
//  line 7 returns an error that foo is not defined. Even though it's named,
//  it's not available outside the scope created by the IIFE.
