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

/* // function declarations
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
 */
// brick calculation
/*

underground = 50000
1st to 10th = 10000 per floor
11th floor = 12000
12th to 21st = 10000 per floor
22th floor = 12000

73 floors = ??

*/

/* function brickCalculation(totalFloors) {
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

// console.log(brickCalculation(11)); */

/*

index values for 2x2: (1,-1) (2,-2)
index values for 1x1: (3,-3)

*/

/* function hybrid(a, b, c, d, x, y) {
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
 */
/* const a = 1;
const b = -2;
const c = -1;
const d = 2;
const x = 3;
const y = -3;

console.log(hybrid(a, b, c, d, x, y)); */

/* // arrays
// const friend1 = "shohan";
// const friend2 = "badhon";
// const friend3 = "Eklas";
// const friend4 = "nasim";

const friends = ["shohan", "badhon", "eklas", "nasim"]; //literal syntax

// const years = [1990, 1992, 1996, 1998, 2002];
const years = new Array(1990, 1992, 1996, 1998, 2002); // array function

console.log(friends);
console.log(years);

// finding elements in array bt index
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends[3]);
console.log(friends[4]);

console.log(years[0]);
console.log(years[5]);

// array length
console.log(friends.length);
console.log(years.length);

// exercise
const ageCalc = function (birthYear) {
  // console.log(birthYear);
  return 2022 - birthYear;
};

const age1 = ageCalc(years[0]);
const age2 = ageCalc(years[5]);
// console.log(age2);

// push - add element in the end
// unshift - add element at the beginning
// pop - remove element from the end
// shift - remove element from the beginning
const lastBenchers = ["shohan", "shuvo", "abdullah", "fahim", "nasim"];

lastBenchers.push("abir");
lastBenchers.push("sajib", "badhon");
lastBenchers.unshift("noman");
lastBenchers.unshift("hridoy");
lastBenchers.pop();
lastBenchers.pop();
lastBenchers.shift();
lastBenchers.shift();

console.log(lastBenchers);
console.log(lastBenchers.length);
console.log(lastBenchers[1]);

// finding index by element name
console.log(lastBenchers.indexOf("shuvo"));
console.log(lastBenchers.indexOf("fahim"));
console.log(lastBenchers.indexOf("pinky"));
console.log(lastBenchers.indexOf("puzon"));
console.log(lastBenchers.includes("fahim"));
console.log(lastBenchers.includes("abdullah"));
console.log(lastBenchers.includes("pinky"));

if (lastBenchers.includes("pinky")) {
  console.log("He is our captain.");
} else {
  console.log("Unknown");
}

if (lastBenchers.indexOf("shuvo") !== -1) {
  console.log("He is our captain.");
} */

// exercise
/*
2 teams: lionsClub, dragonClub
team members: 5  per team
lionsClub (14, 12, 17, 9, 11)
dragonClub (18, 13, 10, 8, 12)

conditions:
winner: average jump distance >= 15
draw: lions === dragon, both teams has >= 15 
*/

/* const scoreLions = (14 + 13 + 17 + 18 + 16) / 5;
console.log(scoreLions);
const scoreDragons = (14 + 13 + 17 + 16 + 15) / 5;
console.log(scoreDragons);

// if (scoreLions === scoreDragons && scoreLions >= 15 && scoreDragons >= 15) {
//   console.log("Draw!");
// } else if (
//   scoreLions > scoreDragons &&
//   scoreLions >= 15 &&
//   scoreDragons >= 15
// ) {
//   console.log("Winner is lions!");
// } else if (
//   scoreDragons > scoreLions &&
//   scoreDragons >= 15 &&
//   scoreLions >= 15
// ) {
//   console.log("Winner is dragons!");
// } else {
//   console.log("Nothing happens!");
// }

if (scoreLions >= 15 && scoreDragons >= 15) {
  if (scoreLions === scoreDragons) {
    console.log("draw");
  } else if (scoreLions > scoreDragons) {
    console.log("lions");
  } else {
    console.log("dragons");
  }
} else {
  console.log("Math dismiss!");
}

// functions
// function declarations
function add(a, b) {
  return a + b;
}

console.log(add(5, 10));

// function expression
const doMath = function (a, b) {
  return a - b;
};

console.log(doMath(10, 20));

// arrow functions
const mathArrow = (a, b) => a + b;
console.log(mathArrow(10, 20));

const mathArrow2 = (a, b) => {
  return a + b;
};

console.log(mathArrow2(20, 30));

// function calling function (callback)
const fruitCutter = (fruits) => fruits * 4;

const juiceMaker = (apples, bananas, oranges) => {
  const applePieces = fruitCutter(apples);
  const bananaPieces = fruitCutter(bananas);
  const orangePieces = fruitCutter(oranges);

  const juice = (applePieces + bananaPieces + orangePieces) / 3;
  return `${juice} ltr. juices`;
};

console.log(juiceMaker(10, 20, 30));

// currying functions
function multi(a) {
  return function (b) {
    return function (c) {
      return function (x) {
        return function (y) {
          return a * b * c * x * y;
        };
      };
    };
  };
}

// lambda calculus or lambda function declarations
const multiPro = (a) => (b) => (c) => (x) => (y) => a * b * c * x * y;

const eq1 = multiPro(10);
console.log(eq1);

console.log(multiPro(10)(5)(3)(2)(5));

const multiUltra = (a, b, c, x, y) => a * b * c * x * y;
console.log(multiUltra(10, 5, 11, 2, 5));

// objects
const student = {
  firstName: "Arafat",
  lastName: "Rahman",
  age: 2022 - 1996,
  job: "Programmer",
  friends: ["Rahim", "Karim", "Suraiya", "Nishi"],
  isGoodAtGames: true,
}; //object literal syntax

// Arafat is a programmer, and he has 4 friends. Karim is his best friend.

console.log(
  `${student.firstName} is a ${student.job}, and he has ${student.friends.length} friends. ${student.friends[1]} is his best friend.`
);

console.log(student);
// finding properties using two methods (dot method, bracket notation)
console.log(student.friends[3]);
console.log(student.job);

const nameKey = "Name";

console.log(student["first" + nameKey]);
console.log(student["last" + nameKey]);
console.log(student["isGoodAt" + "Games"]);

// exercise
// const interestIn = prompt("What do you want to know about this student?");

// if (student[interestIn]) {
//   console.log(student[interestIn]);
// } else {
//   console.log("Invalid key!");
// }

// const whatYouKnow = prompt("What do you want to know?");

// const test1 = student[whatYouKnow] ? student[whatYouKnow] : "Invalid";
// console.log(test1);

console.log(typeof null); */

// arrays
const odd = [1, 3, 5, 7, 9, 11, 13, 15];
console.log(odd);

// const even = [2, 4, 6, 8, 10];
const even = new Array(2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24);
console.log(even);

console.log(odd[0]);
console.log(odd[7]);
console.log(odd[8]);

console.log(even[5]);
console.log(even.length);
console.log(even[even.length - 2]);
const lastElement = even.length - 1;
console.log(even[lastElement]);

odd[2] = 55;
odd[odd.length - 1] = 515;
odd.push(75);
odd.push(275);
odd.unshift(57);
odd.unshift(35);
odd.pop();
odd.pop();
odd.shift();
odd.shift();
console.log(odd);

console.log(even.indexOf(32));
console.log(even.includes(45));
console.log(even.includes(20));
console.log(typeof even);

// objects
const computer = {
  processor: "intel core i9",
  clockSpeed: "4.2 GHz",
  ram: "16gb",
  gpuMemory: "8gb",
  mainFanSpeedInRPM: 1800,
  hasSSD: true,
  HDDCount: 2,
  price: 85000,
};

console.log(computer);

console.log(computer.clockSpeed);
console.log(computer.gpuMemory);
console.log(computer["mainFanSpeedIn" + "RPM"]);

const student = {
  firstName: "Sara",
  lastName: "Islam",
  birthYear: 1996,

  calcAge: function () {
    return 2022 - this.birthYear;
  },

  greetings: function () {
    return `Hello, ${this.firstName}`;
  },
};

console.log(student.calcAge());
console.log(student.greetings());

const student2 = student;

student2.firstName = "Tumpa";
console.log(student);
console.log(student2);

// console.log(student2.greetings());

// for loop
// console.log("Step 1");
// console.log("Step 2");
// console.log("Step 3");
// console.log("Step 4");
// console.log("Step 5");
// console.log("Step 6");

for (let i = 1; i <= 20; i++) {
  // console.log(i);
}

for (let i = 0; i <= 100000; i += 200) {
  // console.log(i);
}

for (let i = 10; i <= 1000; i += 10) {
  // console.log(i);
}

for (let i = 100; i >= 0; i--) {
  // console.log(i);
}

const sabrinaArray = [
  "Sabrina",
  "Ratul",
  "iMac",
  "MacOS",
  "iPhone 16",
  "Programmer",
  2022 - 1996,
  ["Trina", "Mina", "Rina", "Parina"],
  true,
  "Dancer",
];

console.log(sabrinaArray.length);

for (let i = 0; i < sabrinaArray.length; i++) {
  console.log(sabrinaArray[i]);
}

const numbers = [10, 21, 45, 78, 50, 65];

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i];
}
console.log(sum);

const arr = [10, true, 21, "a", "b", false, 55, true, "x"];
console.log(arr);

const arr2 = [];

for (let i = 0; i < arr.length; i++) {
  arr2.push(typeof arr[i]);
}

console.log(arr2);

const years = [1994, 1996, 1998, 2001, 1993, 1995];

const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2022 - years[i]);
}

console.log(ages);
console.log("Continue");

// continue and break
// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] === "string") continue;
//   console.log(arr[i], typeof arr[i]);
// }

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === arr[4]) break;
  console.log(arr[i], typeof arr[i]);
}

// loop inside a loop
for (let i = 1; i <= 10; i++) {
  console.log(`Step ---------- ${i}`);
  for (let j = 1; j <= i; j++) {
    console.log(`Run --------- ${j}`);
  }
}

// star pattern
/*
 *****
 *****
 *****
 *****
 *****
 */

let n = 10;
let star = "";

for (let row = 1; row <= n; row++) {
  for (let col = 1; col <= n; col++) {
    star += "*";
  }
  star += "\n";
}

console.log(star);

// while loop
const arr3 = [10, 20, 30, 40, 50];

let i = 0;
while (i < arr3.length) {
  console.log(arr3[i]);
  i++;
}

let x = 1;
while (x <= 100) {
  console.log(x);
  x++;
}
