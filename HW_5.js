//Завдання №1
let answers = [
    confirm("Ти поїв?"),
    confirm("То не голодний?"),
    confirm("Може чайку?")
  ];
  
  console.log(answers);

//Завдання №2
const masuv = [];

masuv[0] = prompt("Хто ти?");
masuv[1] = prompt("Шо тут забув?");
masuv[2] = prompt("Як звати?");

console.log(masuv);

//Завдання№3
let array = [1, 2, 3, 4, 5, 6, 7];

const index = prompt("Введіть індекс:");

alert(`Значення з індексом ${index}: ${array[index]}`);

//Завдання №4
let myMasuv = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let index = prompt("Введіть індекс:");
let value = prompt("Введіть нове значення:");

myMasuv[(index)] = value;
alert(`Значення з індексом ${index} було змінено на: ${value}`);

//Завдання №5
const arr = [
    [0, 0, 0, 0, 0],
    [0, 1, 2, 3, 4],
    [0, 2, 4, 6, 8],
    [0, 3, 6, 9, 12],
    [0, 4, 8, 12, 16]
  ];

//Завдання №6
const arr = [
    [0, 0, 0, 0, 0],
    [0, 1, 2, 3, 4],
    [0, 2, 4, 6, 8],
    [0, 3, 6, 9, 12],
    [0, 4, 8, 12, 16]
  ];
  
  const newArr = arr.slice(1).map(subarray => subarray.slice(1));

//Завдання №7
let userString = prompt("Введіть рядок із слів:");
let choiseWord = prompt("Введіть слово, яке потрібно, і буде чудо:");

let wordsProbil = userString.split(" ");
let wordIndex = wordsProbil.indexOf(choiseWord);

if (wordIndex !== -1) {
  alert(`Слово "${choiseWord}" розташоване на позиції ${wordIndex + 1}.`); // +1 через те що починається з 0
} else {
  alert(`Слова "${choiseWord}" немає.`);
}

//Завдання №8
const arrayOne = [];
const arrayTwo = [];

let i = 0;
while (i < 5) {
  const userInput = prompt(`Введіть елемент ${i + 1}:`);
  arrayOne.push(userInput);
  i++;
}
const arrayTwoCopy = [...arrayOne];
while (arrayTwoCopy.length > 0) {
  arrayTwo.push(arrayTwoCopy.pop());
}

console.log("Перший масив:", arrayOne);
console.log("У зворотньому напрямку:", arrayTwo);

//Завдання №9
const arrayOne = [];
const arrayTwo = [];
const reversArray = [];

let i = 0;
while (i < 5) {
  const userInput = prompt(`Введіть елемент ${i + 1}:`);
  arrayOne.push(userInput);
  i++;
}

const arrayTwoCopy = [...arrayOne];
while (arrayTwoCopy.length > 0) {
  arrayTwo.push(arrayTwoCopy.pop());
}

const arrayTwoCopy2 = [...arrayTwo];
while (arrayTwoCopy2.length > 0) {
  reversArray.unshift(arrayTwoCopy2.shift());
}

console.log("Перший масив:", arrayOne);
console.log("Масив у зворотньому напрямку:", arrayTwo);
console.log("Двічі зворотній масив:", reversArray);

//Завдання №10
let arrayCopia = [...arr];

//Завдання №11
const arr = [
    [0, 0, 0, 0, 0],
    [0, 1, 2, 3, 4],
    [0, 2, 4, 6, 8],
    [0, 3, 6, 9, 12],
    [0, 4, 8, 12, 16]
  ];
  
  const deepCopyArray = originalArray.map(subArray => [...subArray]);
  
  console.log(deepCopyArray);

// Завдання №12
let arr1 = [1, 2, 3];
let arr2 = arr1;

console.log(arr1 === arr2)

//Завдання №13
const arr = [
    [0, 0, 0, 0, 0],
    [0, 1, 2, 3, 4],
    [0, 2, 4, 6, 8],
    [0, 3, 6, 9, 12],
    [0, 4, 8, 12, 16]
  ];
  
  let arrayNext = [].concat(...arr);
  
  console.log(arrayNext);
  console.log("Довжина масиву:", arrayNext.length);

//Завдання №14
const userLetter = prompt("Введіть рядок:");
const [letterOne, , , , letterTwo, , , , letterThree] = userInput;

console.log("Перша літера:", letterOne);
console.log("П'ята літера:", letterTwo);
console.log("Дев'ята літера:", letterThree);

//Завдання №15
const arr = [
    [0, 0, 0, 0, 0],
    [0, 1, 2, 3, 4],
    [0, 2, 4, 6, 8],
    [0, 3, 6, 9, 12],
    [0, 4, 8, 12, 16]
  ];
  
  let [, ...restArrays] = arr;
  let newArr = restArrays.map(([,...rest]) => rest);
  
  let arrayWithout0 = newArr.flat().filter(element => element !== 0);
  
  console.log(arrayWithout0);

//Завдання №16
let`` names = ["John", "Paul", "George", "Ringo"];

for (const name of names) {
  alert(name);
}

//Завдання №17
const currencies = ["USD", "EUR", "GBP", "UAH"]
let str = "<select>"

for (const currency of currencies) {
  str += `<option>${currency}</option>`
}

str += "</select>"
document.write(str)

//Завдання №18
const names = ["John", "Paul", "George", "Ringo"]
let str = "<table><tr>"

for (const name of names) {
  str += `<td>${name}</td>`
}

str += "</tr></table>"
document.write(str)

//Завдання №19
const names = ["John", "Paul", "George", "Ringo"];
let str = "<table>";

for (const name of names) {
  str += "<tr><td>" + name + "</td></tr>";
}

str += "</table>";
document.write(str);

//Завдання №20
const currencies = ["USD", "EUR", "GBP", "UAH"]
let str = "<table>"

for (let i = 0; i < 4; i++) { 
  str += "<tr>";
  const currency = currencies[i]

  for (let j = 0; j < 3; j++) { 
    const letter = currency[j] || ""
    str += `<td>${letter}</td>`
  }

  str += "</tr>"
}

str += "</table>"
document.write(str)


//Завдання №21
const arr = [
    [0, 0, 0, 0, 0],
    [0, 1, 2, 3, 4],
    [0, 2, 4, 6, 8],
    [0, 3, 6, 9, 12],
    [0, 4, 8, 12, 16]
  ];
  
  let str = "<table>";
  
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      str += "<tr style='background-color: gray;'>";
    } else {
      str += "<tr style='background-color: blue;'>";
    }
    const subarray = arr[i];
  
    for (let j = 0; j < subarray.length; j++) {
      str += `<td>${subarray[j]}</td>`;
    }
  
    str += "</tr>";
  }
  
  str += "</table>";
  document.write(str);
  

//Завдання №22
const capitalize = str => {
    let result = ""
    
      const firstLetter = str[0].toUpperCase()
      const restLetter = str.slice(1).toLowerCase() 
      result = firstLetter + restLetter 
    
    return result
  }
  
  console.log(capitalize("cANBerRa"))

//Завдання №23
const userInput = prompt("Введіть рядок:")

const words = userInput.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1))

const userUpper = words.join(' ')

console.log(userUpper)

//Завдання №24
const input_string = prompt("Введіть рядок:");

const badWords = ["1", "2", "3"]; 

const words = input_string.split(' ');

function isAllowed(word) {
  return !badWords.includes(word.toLowerCase()); 
}

const normalWords = words.filter(isAllowed);

const wordsPide = normalWords.length === 0;

if (wordsPide) {
  console.log(false);
} else {
  const output_string = normalWords.join(' ');
  console.log(output_string);
}

//Завдання №25
const input_string = prompt("Введіть рядок:")

const forbiddenWords = ["1", "2", "3"]

const words = input_string.split(' ')

const replacedWords = words.map(word => forbiddenWords.includes(word) ? "BEEP" : word)

const output_string = replacedWords.join(' ')

console.log(output_string)

//Завдання №26
const currencies = ["USD", "EUR", "GBP", "UAH"];

const selectOptions = currencies.reduce((acc, currency) => {
  return acc + `<option>${currency}</option>`;
}, "");

const selectElement = `<select>${selectOptions}</select>`;

document.write(selectElement);

//Завдання №27
const line = prompt();
const bracketsStack = [];
let i = 0;

for (const character of line) {
  if (character === "(" || character === "[" || character === "{") {
    bracketsStack.push({ character, index: i });
  } else if (character === ")" || character === "]" || character === "}") {
    if (bracketsStack.length === 0) {
      console.log(`Помилка: Немає відповідної відкриваючої дужки на позиції ${i}`);
      break;
    }

    const lastOpenBracket = bracketsStack.pop();
    if (
      (character === ")" && lastOpenBracket.character !== "(") ||
      (character === "]" && lastOpenBracket.character !== "[") ||
      (character === "}" && lastOpenBracket.character !== "{")
    ) {
      console.log(`Помилка: Дужка не відповідає відкриваючій на позиції ${i}`);
      break;
    }
  }
  i++; 
}

if (bracketsStack.length === 0) {
  console.log("Всі дужки правильно відповідають одна одній.");
} else {
  console.log(`Помилка: Не вистачає закриваючих дужок.`);
}
  
