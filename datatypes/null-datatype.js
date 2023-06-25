console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(null === undefined); // false
console.log(null == undefined); // true
console.log(null === null); // true
console.log(null == null); // true
console.log(!null); // true
console.log(Number.isNaN(1 + null)); // false
console.log(Number.isNaN(1 + undefined)); // true

console.log(1 + null); // 1
console.log(1 + undefined); // NaN

// function getVowel(str){
//     const m = str.match(/[aeiou]/gi);
//     if (m === 0){
//         return 0;
//     }
//     return m.length;
// }

// console.log(getVowel('sky'))

function getVowels(str) {
    const m = str.match(/[aeiou]/gi);
    if (m === null) {
      console.log(m);// null
      return 0;
    }
    return m.length;
  }
  
  console.log(getVowels('sky'));
  // Expected output: 0
  