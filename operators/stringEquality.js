// The strict equality (===) operator checks whether its two operands are equal, returning a Boolean result. 
// Unlike the equality operator, the strict equality operator always considers operands of different types to be different.

console.log(1 === 1); // true

console.log('hello' === 'hello'); // true

console.log('1' ===  1); // false

console.log(0 === false); // false

"hello" === "hello"; // true
"hello" === "hola";  // false

// Comparing operands of the same type

3 === 3; // true
3 === 4; // false

true === true; // true
true === false; // false

null === null; // true

// Comparing operands of different types

"3" === 3; // false
true === 1; // false
null === undefined; // false
3 === new Number(3); // false

// Comparing objects

const object1 = {
    key: "value",
  };
  
  const object2 = {
    key: "value",
  };
  
  console.log(object1 === object2); // false
  console.log(object1 === object1); // true
  
