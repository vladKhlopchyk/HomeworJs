// Завдання №1
let number = +prompt ("Введіть число:");
if (number %2 === 0) {
    console.log ("Введене число є парним");
} else {
    console.log ("Введене число є непарним");
}

// Завдання №2


// Завдання №3
let questions = confirm ("Чи гарна погода на дворі сьогодні?")
if (questions) {
    console.log ("Погода гарна")
} else {
    console.log ("Погода погана")
}

// Завдання №4
let gender = confirm ("Ви чоловік?")
let questions = confirm ("Чи гарна погода на дворі сьогодні?")
if (questions) {
    console.log ("Погода гарна")
} else {
    console.log ("Погода погана")
}

if (gender) {
    console.log ("Ви чоловік")
} else {
    console.log ("Ви жінка")
}

// Завдання №5
const userSize = prompt("Будь ласка, введіть свій розмір нижньої білизни у нашій системі (наприклад, S, M, L):");

let usaSize;

if (userSize === "S") {
  usaSize = "12";
} else if (userSize === "M") {
  usaSize = "14";
} else if (userSize === "L") {
  usaSize = "16";
} else {
  usaSize = "Розмір не визначено";
}

alert(`Ваш розмір в американській системі: ${usaSize}`);

// Завдання №6
let male = confirm ("Ви чоловік?");
let whatMale = male ? "Ви чоловік" : "Ви жінка";
alert(whatMale);

// Завданн №7
// bool type cast
!!2 //true
!!0 // false
!!1 // true
// or
2 || 1 // 2
2 || 0 // 2
//and
2 && 1 //1
1 && 2 //2
0 && 2 //0
// or and and difference
0 || 1 || 2 //1
0 && 1 && 2 //0
2 || 1 || 0 //2
2 && 1 && 0 //0
confirm('left') || confirm('right') // якщо хоч один конфірм буде прийнятий то буде виведено true якщо жоден не буде підтверджений то false
confirm('left') && confirm('right') // якщо обидва конфірма будуть підтвердженими то true, якщо хоч один не підтверджений то false
//null, undefined, so on
null || 2 //2
undefined && 1 //undefined
alert("Hello") && confirm('Are you sexy?');  // якщо обидва конфірма будуть підтвердженими то true, якщо хоч один не підтверджений то false
alert("Hello") || confirm('Are you drunk?');  // якщо хоч один конфірм буде прийнятий то буде виведено true якщо жоден не буде підтверджений то false
//brackets and complex expressions
(undefined || 2) && (3 || 0) //3
(2 && 1) || (null && 0) // 1
(2 > 1) && "greater" // "greater"
(2 < 1) && null // false
null && (2 < 1) // null
// ternary operator
1 ? "one" : "not one" // "one"
0 ? "zero" : "not zero" // "not zero"
"0" ? "\"zero\"" : "not `zero`" // "zero"
parseInt("0") ? 'true' : 'false' // false
("" || 2) && (3 || "3.5") || (4 && 5) // 3
(-1 + 1) && "zero" // 0
"-1" + 1 && "oups" // "oups"
(typeof null === 'object') ? "null is object" : "null is null" // "null is object"
// ternary && ||
Math.random() < 0.5 && 'less' || 'more' // якщо більше 0.5 то 'less' якщо менше то 'more'
(a = Math.random()) < 0.5 && 'less: '+a || 'more: '+a // якщо більше 0.5 то 'less' якщо менше то 'more' і + виводить значення яке було у рандомі
//in for array
[2,3,5,7,11].indexOf(7) > -1 ? 'prime' : 'not found' // 'prime'

// Завдання 8
let age = prompt("Введіть свій вік:") || "";

if (!age) {
  alert("Помилка: Ви не ввели вік або натиснули 'Скасувати'.");
} else {
  alert(`Ваш вік: ${age}`);
}

// Завдання №9
let shopping = confirm("Шопінг?");
shopping || alert("Ти - бяка");

// Завдання №10
let shopping = confirm("Шопінг?");

if (!shopping) {
  alert("Ти - бяка");
}

// Завдання №11
const login = prompt("Введіть логін:");

if (login === "admin") {
  const password = prompt("Введіть пароль:");

  if (password === "qwerty") {
    alert("Привіт, admin)))");
  } else {
    alert("Помилка: невірний пароль.");
  }
} else {
  alert("Помилка: невірний логін.");
}

// Завдання №12
const cash = prompt("Введіть валюту (наприклад, USD, EUR):").toUpperCase();

const buying = confirm("Ви бажаєте купити цю валюту?");

let rate;

if (cash === "USD") {
  rate = buying ? 27.5 : 27.0;
} else if (cash === "EUR") {
  rate = buying ? 32.0 : 31.5;
} else {
  alert("Валюта не підтримується.");
}

if (rate) {
  const amount = parseFloat(prompt(`Введіть суму ${buying ? "грн" : cash}:`));

  if (!isNaN(amount)) {
    const result = buying ? amount / rate : amount * rate;
    alert(`Результат: ${result.toFixed(2)} ${buying ? cash : "грн"}`);
  } else {
    alert("Некоректна сума.");
  }
}

// Завдання №13
const you = prompt("Виберіть: камінь, ножиці, або папір").toLowerCase();

const computer = ["камінь", "ножиці", "папір"][Math.floor(Math.random() * 3)];

alert(`Комп'ютер вибрав: ${computer}`);

let champion;

if (you === computer) {
  champion = "Нічия";
} else if (
  (you === "камінь" && computer === "ножиці") ||
  (you === "ножиці" && computer === "папір") ||
  (you === "папір" && computer === "камінь")
) {
  champion = "Ви перемогли!";
} else {
  champion = "Комп'ютер переміг!";
}

alert(champion);