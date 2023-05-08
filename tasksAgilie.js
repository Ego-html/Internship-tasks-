const fs = require("fs");
const path = require("path");

const objReadJSON = fs.readFileSync("inputData.json", "utf-8");
const inputData = JSON.parse(objReadJSON);

//Task №1
let numberGuessFirstFriend = inputData.Task1Number1;
let numberGuessSecondFriend = inputData.Task1Number2;

if (
  numberGuessFirstFriend * 2 == numberGuessSecondFriend ||
  numberGuessFirstFriend + 1 == numberGuessSecondFriend
) {
  console.log("In this case can transform one number to another");
  // fs.writeFileSync(
  //   path.resolve(__dirname, "outputData.json"),
  //   JSON.stringify({"Task1": "In this case can transform one number to another" },
  //   { encoding: "utf-8" }
  // ));
} else {
  console.log(`Can't transform one number to another`);
}

// Task №2

function getDoble(arr) {
  return arr.reduce((acc, item) => {
    if (acc[item] && !acc["answer"]) {
      acc["answer"] = item;
    } else {
      acc[item] = 1;
    }
    return acc;
  }, {}).answer;
}

let result = getDoble(inputData.arrayTask2);

//Task№3
//3.1

//Create two arrays with our loads and american
let arrOurLoads = inputData["array1Task3.1"];
let arrAmericanLoads = inputData["array2Task3.1"];
let arrResult = [];
let resultAllSums = 0;
let count = 0;
let totalWeight = 0;
let randomLoad = null;
const neckWeight = 20;

//Use method forEach in order iteration arrOurLoads array to transform lbs to kilograms and push to arrOurLoads
//arrAmericanLoads.forEach((x) => arrOurLoads.push(x * 0.45));

//Generate a random counts of loads (max - 12, min - 1) and check what this is counts was different from 0.
let countLoads = Math.floor(Math.random() * 13);
if (countLoads == 0) {
  countLoads = 1;
}

while (countLoads) {
  //Generate random load
  randomLoad = arrOurLoads[Math.floor(Math.random() * arrOurLoads.length)];
  //Define the final total weight
  totalWeight += randomLoad * 2;
  countLoads--;
}
//Add to total weight neck weight
totalWeight += neckWeight;

//Use loop in loop in order to get sums of all array arrOurLoads elements which will be more than variable value totalWeight
for (let i = 0; i < arrOurLoads.length; i++) {
  for (let j = i + 1; j < arrOurLoads.length; j++) {
    resultAllSums += arrOurLoads[i] + arrOurLoads[j];
    if (resultAllSums > totalWeight) {
      arrResult.push(resultAllSums);
    }
  }
}

//Get the minimum value from arrResult and this is will be minimum next load
let minimumNumber = Math.min(...arrResult);
console.log(totalWeight);
console.log(arrResult);
console.log(minimumNumber);

//Task №3
//3.2

let objShirts = inputData["objTask3.2"];

class Shirts {
  constructor(size, allSportsmens) {
    this.size = size;
    this.allSportsmans = allSportsmens;
    //Filter sportsmens with one size order
    this.oneSize = this.allSportsmans.filter(
      (item) => item.favoriteSize.length === 1
    );
    //Filter sportsmens with two size order
    this.twoSize = this.allSportsmans.filter(
      (item) => item.favoriteSize.length === 2
    );
  }
  //Method checks the presence of T-shirts with one order if there are deduct it from object objShirts
  countOneSize() {
    if (this.size[this.oneSize[0].favoriteSize] == 0) {
      return "We can't make a gift all sportsmens";
    } else {
      for (let i = 0; i < this.oneSize.length; i++) {
        this.size[this.oneSize[0].favoriteSize] -= 1;
      }
    }
  }
  // Method countTwoSize() check what in object objShirts has T-shirt size wich sportsmen indicated first. If have - break loop and iteration doesn't reach up to two size T-shirt in array favoriteSize.
  //If we don't have T-shirts with one size, iteration continues and pick up second size in array favoriteSize.
  //Also method countTwoSize() check if in object objShirts has T-shirt first and second size and array with T-shirts size completely iterated.
  //If did not have enough T-shirts at least for one sportments console.log() returns appropriate message
  //and vice versa if enough T-shirts will also notify message.

  countTwoSize() {
    this.countOneSize();
    for (let i = 0; i < this.twoSize.length; i++) {
      for (let j = 0; j < this.twoSize[i].favoriteSize.length; j++) {
        if (j === 1 && this.size[this.twoSize[i].favoriteSize[j - 1]] >= 0) {
          break;
        }

        this.size[this.twoSize[i].favoriteSize[j]] -= 1;

        if (
          this.size[this.twoSize[i].favoriteSize[j]] < 0 &&
          this.size[this.twoSize[i].favoriteSize[j - 1]] < 0 &&
          j == this.twoSize[i].favoriteSize.length - 1
        ) {
          return `We can't make a gift all sportsmens`;
        }
      }
    }
    return "We can make a gift all sportsmens";
  }
}

class Sportsmens {
  constructor(name, favoriteSize) {
    this.name = name;
    this.favoriteSize = favoriteSize;
  }
}

let vasa = new Sportsmens("Vasa", ["S"]);
let peta = new Sportsmens("Peta", ["S"]);
let kola = new Sportsmens("Kola", ["XXL", "XXXL"]);
let dima = new Sportsmens("Dima", ["M", "L"]);
let misha = new Sportsmens("Misha", ["M", "L"]);
let ihor = new Sportsmens("Ihor", ["L", "XL"]);

const arrSportsmens = [vasa, kola, dima, peta, misha, ihor];

let shirts = new Shirts(objShirts, arrSportsmens);

console.log(shirts.countTwoSize());

//Task №4

let n = 12; // Y
let m = 9; // X
let arr = new Array(...Array(n)).map((el) => (el = [...Array(m)]));
arr[0][0] = "Actors";
let actorsList;

let actors = inputData.objTask4;

actorsList = actors.map((item) => item[0] + "." + item[1]);

console.log(actorsList);

let actorsSet = new Set(actorsList);

for (let i = 0; i < actors.length; i++) {
  arr[actors[i][0]][actors[i][1]] = "Actors";
}

let testArray = [];
for (let i = 0; i < actors.length; i++) {
  for (let j = 0; j < n; j++) {
    testArray.push(`${j}.${actors[i][1]}`);
  }
  for (let k = 0; k < m; k++) {
    testArray.push(`${actors[i][0]}.${k}`);
  }

  console.log(`this is our actor: ${actorsList[i]}`);
}
let obj = new Set(testArray);
let countOfGoodPosition = new Set([...obj].filter((x) => !actorsSet.has(x)));

console.table(arr);
console.log(countOfGoodPosition.size);
console.log(countOfGoodPosition);

//Write down answers in another JSON file
fs.writeFileSync(
  path.resolve(__dirname, "outputData.json"),
  JSON.stringify(
    {
      Task1: "In this case can transform one number to another",
      Task2: result,
      ["Task3.1"]: minimumNumber,
      ["Task3.2"]: shirts.countTwoSize(),
      Task4: countOfGoodPosition.size,
    },
    { encoding: "utf-8" }
  )
);
