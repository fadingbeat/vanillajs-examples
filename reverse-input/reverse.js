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
