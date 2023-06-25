//The equality (==) operator checks whether its two operands are equal, returning a Boolean result. 
//Unlike the strict equality operator, it attempts to convert and compare operands that are of different types.

console.log(1 == 1); // true

console.log('hello' == 'hello'); // true

console.log('1' ==  1); // true

console.log(0 == false); // true

console.log("Comparision with type conversion");

console.log("1" == 1); // true
console.log(1 == "1"); // true
console.log(0 == false); // true
// 0 == null // false
// 0 == undefined; // false
// 0 == !!null; // true ?  
// 0 == !!undefined; // true ?
// null == undefined; // true - If one of the operands is null or undefined, the other must also be null or undefined to return true. Otherwise return false.


const number1 = new Number(3);
const number2 = new Number(3);
console.log(number1 == 3); // true
console.log(number1 == number2); // false, pointing to different objects




// Comparision of objects

const object1 = {
    key: "value",
  };
  
  const object2 = {
    key: "value",
  };
  
  console.log(object1 == object2); // false
  console.log(object1 == object1); // true


  // Comparing String and String Objects

const string1 = "hello";
const string2 = String("hello"); // hello
const string3 = new String("hello"); // [String: 'hello']
const string4 = new String("hello"); // [String: 'hello']

console.log(string1 == string2); // true
console.log(string1 == string3); // true
console.log(string2 == string3); // true
console.log(string3 == string4); // false
console.log(string4 == string4); // true

 
// Comapring Dates and Strings

const d = new Date("1995-12-17T03:24:00");
const s = d.toString();  // Sun Dec 17 1995 03:24:00 GMT-0600 (Central Standard Time)
console.log(s);
console.log(d == s);// true
 

// Comparing arrays and String

const a = [1, 2, 3];
const b = "1,2,3";
console.log(a == b); // true


const c = [true, 0.5, "hey"];
const de = c.toString(); // true,0.5,hey
console.log(c == de);// true


