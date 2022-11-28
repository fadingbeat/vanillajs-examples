// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
// const temperatures2 = [23, -21, -6, -1, "error", 19, 3, 7, 15, 14, 9, 5];

// const calcTempAmplitude = (temps) => {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp != "number") continue;
//     if (curTemp > max) {
//       max = curTemp;
//     }
//     if (curTemp < min) {
//       min = curTemp;
//     }
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// function should receive two arrays of temperatures
// - do we need to implement functionality twice?
// - just merge two arrays in one
// - how to merge two arrays?

// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
// const temperatures2 = [23, -21, -6, -1, "error", 19, 3, 7, 15, 14, 9, 5];

// const calcTempAmplitudeNew = (t1, t2) => {
//   const temps = [...t1, ...t2];
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp != "number") continue;
//     if (curTemp > max) {
//       max = curTemp;
//     }
//     if (curTemp < min) {
//       min = curTemp;
//     }
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitudeNew = calcTempAmplitudeNew(temperatures, temperatures2);
// console.log(amplitudeNew);

/* Introducing bugs */

const measureKelvin = () => {
  const measurement = {
    type: "temp",
    unit: "celsius",
    // FIX bug: convert string to number
    // value: Number(prompt("Degrees celsius:")),
    value: 10,
  };
  console.table(measurement);
  // console.warn(measurement.value);
  // console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [23, -21, -6, -1, "error", 19, 3, 7, 15, 14, 9, 5];

const calcTempAmplitudeBug = (t1, t2) => {
  const temps = [...t1, ...t2];
  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp != "number") continue;
    if (curTemp > max) {
      max = curTemp;
    }
    if (curTemp < min) {
      min = curTemp;
    }
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug(temperatures, temperatures2);
console.log(amplitudeBug);
