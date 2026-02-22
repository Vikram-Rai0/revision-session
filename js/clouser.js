// what is Clousers?
// A clouser happens when a function remembers the variables from its outer scope, 
// even after the outer function has finished executing.

//Real useCase
// Cluser are used for:
// 1. Data privacy ( like private variables)
// 2. Counters
// 3. Event handlers that remember state

// how to create clouser?
// 1. Closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the variables in the local scope)
// 2. The outer function has access to the variables of the inner function
// 3. The inner function has access to the variables of the outer function

function outer() {
    let counter = 0;
    return function inner() {
        counter++;
        console.log(counter);
    }
}
const myCounter = outer();
myCounter();
myCounter();
myCounter();
