//Завдання №1
let name = prompt("Введіть своє ім'я:");
alert("Привіт, " + name);

//Завдання №2
let line = prompt("Введіть будь якой рядко з комою:");
let comma = line.split(",");
let resultLine = comma.join(" блін,");
console.log(resultLine)

// Завдання №3
let str = "cANBerRa"
let result = str[0].toUpperCase() + str.substring(1).toLowerCase();
console.log(result)

// Завдання №4
let str = "у мене тут є якась кількість слів але я не знаю скільки саме";
let probil = str.split(" ");
let wordCount = probil.length;
console.log(wordCount);

// Завдання №5
let firstName = prompt("Введіть ім'я:").trim();
let lastName = prompt("Введіть прізвище:").trim();
let middleName = prompt("Введіть по батькові:").trim();
let normalFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
let normalLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
let normalMiddleName = middleName.charAt(0).toUpperCase() + middleName.slice(1).toLowerCase();
let fullName = normalLastName + " " + normalFirstName + " " + normalMiddleName;
console.log(fullName);

// Завдання №6
