"use strict";

/* joinTheClass();
let y = 10;
y--;
console.log(y);

joinTheClass();
// const private = 20;
// const interface = "audio";
// console.log(private);
 */
/*
pc on koro
google chrome a dhoko
fb te jao
meet er link a click koro
class a join koro
*/

/* // function declarations
function joinTheClass() {
  console.log("pc on koro");
  console.log("google chrome a dhoko");
  console.log("fb te jao");
  console.log("meet er link a click koro");
  console.log("class a join koro");
}
console.log(addTwoNumbers(20, 10));

joinTheClass(); //call or run or invoke
joinTheClass();

let x = 10;
x++;
console.log(x);

joinTheClass();

function addTwoNumbers(num1, num2) {
  const sum = num1 + num2;
  return sum;
}

console.log(addTwoNumbers(10, 20));

console.log(addTwoNumbers(5, 40));

function oddNumberFinder(number) {
  if (number % 2 !== 0) {
    return `${number} is an odd number.`;
  } else {
    return `${number} is an even number.`;
  }
}

console.log(oddNumberFinder(12));

const myNumber = oddNumberFinder(17);
console.log(myNumber); */

/* // function declarations
// console.log(addThreeNumbers(10, 20, 30));

function addThreeNumbers(num1, num2, num3) {
  const sum = num1 + num2 + num3;
  return sum;
}

// console.log(addThreeNumbers(10, 20, 30));
// const a = 10;
// const b = 20;
// const c = 30;

// const mySum = addThreeNumbers(a, b, c);
// console.log(mySum);

// console.log(addThreeNumbers(1, 11, 1));

// function expressions
const juiceFactory = function (apples, oranges) {
  const juices = (apples * oranges) / 2;
  return `${juices} juices is ready using ${apples} apples and ${oranges} oranges. 🥤`;
};

// console.log(juiceFactory(10, 5));

const pizzaMaker = function (bread, peanut, mayoneese) {
  const pizza = bread + peanut / mayoneese;
  return `${pizza} kilo pizza is ready for everyone. 🍕`;
};

// console.log(pizzaMaker(1.5, 0.2, 0.5));

// arrow functions
const pizzaMakerArrow = (bread, peanut, mayoneese) => {
  const pizza = bread + peanut / mayoneese;
  return `${pizza} kilo pizza is ready for everyone. 🍕`;
};

console.log(pizzaMakerArrow(1.5, 0.2, 0.5));

const ageCalculator = (birthYear) =>
  2022 - birthYear >= 18 ? `You are adult.` : `You are not adult.`;

console.log(ageCalculator(1990));

const heroMaker = (age, skill) => {
  if (age >= 18 || skill) {
    return "You can be a Superhero";
  } else {
    return "You can not be a Superhero";
  }
};

const heroMakerPro = (age, skill) =>
  age >= 18 && skill ? "You can be a Superhero" : "You can not be a Superhero";

console.log(heroMakerPro(17, true)); */

// function declarations
const myBirthYear = 1860;
// console.log(ageCalculator(myBirthYear));

function ageCalculator(birthYear) {
  const age = 2022 - birthYear;
  return age;
}

// function expressions
const evenNumberFinder = function (number) {
  if (number % 2 === 0) {
    return `${number} is an even number.`;
  } else {
    return `${number} is an odd number.`;
  }
};

// console.log(evenNumberFinder(24));

// arrow functions
const doMath = (a, b, c) => {
  const x = a + b;
  const y = x * c;
  return y;
};

// console.log(doMath(13, 21, 78));

const doMathPro = (x, y) => {
  return x * y;
};

// console.log(doMathPro(11, 22));

const doMathUltraProMax = (x, y) => x * y;

// console.log(doMathUltraProMax(10, 20));

// function calling function
function fruitCutter(fruit) {
  return fruit * 4;
}

function juiceMaker(apples, oranges) {
  const applePieces = fruitCutter(apples);
  const orangePieces = fruitCutter(oranges);

  const juice = (applePieces + orangePieces) / 10;
  return `${juice} ltr. juice is ready using ${applePieces} apple pieces and ${orangePieces} orange pieces. 🧃`;
}

// console.log(juiceMaker(15, 10));

function technicalTest(ramFeq, cpuClock) {
  const dramState = ramFreqTest(ramFeq);
  const cpuState = cpuTurbo(cpuClock);

  return `${dramState} and ${cpuState}`;
}

// console.log(technicalTest(2400, 1.8));

function ramFreqTest(ramFreq) {
  return ramFreq >= 2660 ? `DDR4` : `DDR3`;
}

function cpuTurbo(cpuClock) {
  return cpuClock >= 3.1 ? `1800rpm` : `1400rpm`;
}

// brick calculation
/*

underground = 50000
1st to 10th = 10000 per floor
11th floor = 12000
12th to 21st = 10000 per floor
22th floor = 12000

73 floors = ??

*/

function brickCalculation(totalFloors) {
  let totalBricks;
  const undergroundBricks = 50000;
  let bricksForAllFloors = totalFloors * 10000;

  if (totalFloors >= 11) {
    const extraFloors = Math.trunc(totalFloors / 11);
    const extraBricks = extraFloors * 2000;
    bricksForAllFloors += extraBricks;
    totalBricks = undergroundBricks + bricksForAllFloors;
  } else {
    totalBricks = undergroundBricks + bricksForAllFloors;
  }

  return `total bricks needed: ${totalBricks}`;
}

// console.log(brickCalculation(11));

/*

index values for 2x2: (1,-1) (2,-2)
index values for 1x1: (3,-3)

*/

function hybrid(a, b, c, d, x, y) {
  const max = (a + d) * (b + c);
  const min = x + y;
  const def = 2 * (max - min) * max;
  const result = defFinder(def);

  function defFinder(def) {
    const dx = [1, -1];
    const dy = [1, 1];

    dx.push(def);

    const dz = dx.concat(dy);
    return dz;
  }

  return result;
}

const a = 1;
const b = -2;
const c = -1;
const d = 2;
const x = 3;
const y = -3;

console.log(hybrid(a, b, c, d, x, y));
