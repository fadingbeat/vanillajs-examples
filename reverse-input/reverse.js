// Reverse string or a number

let stringReverse;
let inputArr;
let inputArrReversed;

const reverse = (input) => {
  if (typeof input === "string") {
    inputArr = input.split("");
    finalResult();
  }
  if (typeof input === "number") {
    numToStringArr = input.toString();
    inputArr = numToStringArr.split("");
    finalResult();
  }
  return stringReverse;
};

const finalResult = () => {
  inputArrReversed = inputArr.reverse();
  stringReverse = inputArrReversed.join("");
  console.log(stringReverse);
};

reverse("What is this madness?");
// reverse(5444);

// REVERSE AN ARRAY

const ages = [21, 27, 33, 36];
const newAges = [...ages];
console.log(ages);
console.log(newAges);

// using reverse method
console.log(newAges.reverse());
