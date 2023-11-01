//Завдання №1
var a = 5;
var b, c;

b = a * 5;
b = (c = (b / 2)); // також можназробити ось так: b = c = (b / 2);

//Завдання №2
let age = +prompt ("Введіть ваш вік:");
let yearBirthday = 2023 - age;
alert (`Ваш рік народення: ${yearBirthday}`);

// Завдання №3 
let celsium = +prompt ("Введіть температуру у Цельціях:");
let farintheyt = (celsium * 9/5) + 32;
alert (`Температура у Фаркнтгейтах становить: ${farintheyt}`);
// Або навпаки
let farintheyt = +prompt ("Введіть температуру у Фарентгейтах:");
let celsium = (farintheyt - 32) * 5/9;
alert (`Температура у Цельсіях становить: ${celsium}`);


// Завдання №4 
let numberOne = +prompt ("Введіть ділене число:");
let numberTwo = +prompt ("Введіть дільник:");
let result  = Math.floor (numberOne / numberTwo);
alert (`Результат ділення націло: ${result}`);

// Завдання №5
const rate = 37.5; // вартість доллара
let currentGrn = +prompt ("Введіть суму гривень яку ви хотіли б обміняти на доллар:");
let exchangedResult = (currentGrn / rate).toFixed(2);
alert (`результат обміну: ${exchangedResult}`);

// Завдання №6
let red = +prompt("Введіть червоний компонент (0-255):");
let green = +prompt("Введіть зелений компонент (0-255):");
let blue = +prompt("Введіть синій компонент (0-255):");
let cssColor = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
alert(`Сформований CSS-колір: ${cssColor}`);

// Завдання №7
let numfloor = +prompt("Введіть кількість поверхів у будинку:");
let numApartmensPerFloor = +prompt("Введыть кількість квартир на поверху:");
let apartmentsNumbet = +prompt("Введіть номер квартири:");
var entrance = Math.ceil(apartmentsNumbet / (numfloor * numApartmensPerFloor));
var floor = Math.ceil((apartmentsNumbet % (numfloor * numApartmensPerFloor)) / numApartmensPerFloor);
alert("Квартира " + apartmentsNumbet + " знаходиться на " + floor + "-му поверсі " + entrance + "-го під'їзду.");
