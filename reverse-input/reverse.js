// Reverse string, a number or an array

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
  if (Array.isArray(input)) {
    const cloneInput = [...input];
    const reversedArr = cloneInput.reverse();
    console.log(reversedArr);
    return reversedArr;
  }
  return stringReverse;
};

const finalResult = () => {
  inputArrReversed = inputArr.reverse();
  stringReverse = inputArrReversed.join("");
  console.log(stringReverse);
};

reverse("What is this madness?");
reverse(5444);
const rarr = ["5", "4", "3", "2", "1"];
reverse(rarr);
