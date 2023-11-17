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
let str = "Було жарко. Василь пив пиво вприкуску з креветками";
let words = str.split(" "); 
words = words.map(word => (word === "пиво" ? "чай" : word)); 
let result = words.join(" "); 
console.log(result);

// Завдання №7
let str = "якийсь текст, в якому є один тег <br /> і всяке інше";
let tagStart = str.indexOf("<"); 
let tagEnd = str.indexOf(">", tagStart) + 1; 
let result = str.slice(0, tagStart) + str.slice(tagEnd); 
console.log(result);

// Завдання №8
let str = "якийсь текст у якому є один тег <br /> і всяке інше";
let tagStart = str.indexOf("<");
let tagEnd = str.indexOf(">", tagStart) + 1;
let tag = str.slice(tagStart, tagEnd); 
let tagUpperCase = tag.toUpperCase(); 
let result = str.slice(0, tagStart) + tagUpperCase + str.slice(tagEnd);
console.log(result);


// Завдання №9
let userInput = prompt("Введіть рядок з переносами рядка (\\n):");
let lines = userInput.split("\\n"); 
let multiLineString = lines.join("\n");
console.log(multiLineString);


// Завдання №10
const youtubeRegex = /(?:https:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/;
const userInput = prompt("Введіть текст з посиланням на YouTube:");
const match = userInput.match(youtubeRegex);

if (match) {
  const videoId = match[1];
  const embeddedHtml = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`

  document.write(embeddedHtml);
} else {
  document.write("Посилання на YouTube не знайдено.");
}