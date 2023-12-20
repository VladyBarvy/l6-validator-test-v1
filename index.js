import Validator from './src/Validator.js';

export default Validator;
/*
const v = new Validator();
const schema = v.number();

console.log(schema.isValid(null)); // false
console.log(schema.isValid('')); // false
console.log(schema.isValid(true)); // false
console.log(schema.isValid(123)); // true
console.log(schema.isValid(0)); // true
console.log(schema.isValid(2)); // true
console.log(schema.isValid(-3)); // true
console.log(schema.isValid(2)); // true
*/
/*
const v = new Validator();

const schema1 = v.array();
console.log(schema1.isValid([])); // true;
console.log(schema1.isValid([1,2])); // true;
console.log(schema1.isValid(12)); // false;
console.log(schema1.isValid({})); // false;

const schema2 = v.array().allIntegers();
console.log(schema2.isValid([])); // true;
console.log(schema2.isValid([1,2])); // true;
console.log(schema2.isValid([12, 'b'])); // false;
console.log(schema2.isValid({})); // false;
console.log(schema2.isValid([1.2, 1, 2])); // false;
console.log(schema2.isValid([122n, 0])); // true;
*/

const v = new Validator();
const schema1 = v.array().custom((element) => (element % 2) === 0);

console.log(schema1.isValid([1, 2])); // false;
console.log(schema1.isValid([2, 4, 8, 12])); // true;
console.log(schema1.isValid([1.2])); // false;
