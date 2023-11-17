//Завдання №1
const car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2010,
    color: 'silver',
}

const motorcycle = {
    brand: 'Lifan',
    model: 'Lf-150-2e',
    year: 2021,
    color: 'black',
}

//Завдання №2
car[prompt('Введіть додаткову властивість:')] = prompt('Введіть значення додаткової властивості:');
car[prompt('Введіть додаткову властивість:')] = prompt('Введіть значення додаткової властивості:');

console.log (car);


motorcycle[prompt('Введіть додаткову властивість:')] = prompt('Введіть значення додаткової властивості:');
motorcycle[prompt('Введіть додаткову властивість:')] = prompt('Введіть значення додаткової властивості:');

console.log (motorcycle);

//Завдання №3
const NewValue = prompt('Введіть додаткову властивість:');
const ValueProperty = prompt('Введіть значення додаткової властивості:');

const newObject = {
  ...car,
  [NewValue]: ValueProperty,
};

console.log(newObject);

//Завдання №4
var htmlTree = {
    tagName: 'body',
    children: [
      {
        tagName: 'div',
        children: [
          {
            tagName: 'span',
            children: ['Enter a data please:'],
          },
          {
            tagName: 'br',
            attrs: {},
            children: [],
          },
          {
            tagName: 'input',
            attrs: {
              type: 'text',
              id: 'name',
            },
            children: [],
          },
          {
            tagName: 'input',
            attrs: {
              type: 'text',
              id: 'surname',
            },
            children: [],
          },
        ],
      },
      {
        tagName: 'div',
        children: [
          {
            tagName: 'button',
            attrs: {
              id: 'ok',
            },
            children: ['OK'],
          },
          {
            tagName: 'button',
            attrs: {
              id: 'cancel',
            },
            children: ['Cancel'],
          },
        ],
      },
    ],
  };


  console.log (htmlTree.children[1].children[1].children[0]); // Виведе з другої колонки
  console.log (htmlTree.children[0].children[2].attrs.id); // виведе id у другому input


// Завдання №5
var htmlTree = {
    tagName: 'body',
    children: [
      {
        tagName: 'div',
        parent: null,  
        children: [
          {
            tagName: 'span',
            parent: 'div',  
            children: ['Enter a data please:'],
          },
          {
            tagName: 'br',
            parent: 'div',  
            attrs: {},
            children: [],
          },
          {
            tagName: 'input',
            parent: 'div',  
            attrs: {
              type: 'text',
              id: 'name',
            },
            children: [],
          },
          {
            tagName: 'input',
            parent: 'div',  
            attrs: {
              type: 'text',
              id: 'surname',
            },
            children: [],
          },
        ],
      },
      {
        tagName: 'div',
        parent: null, 
        children: [
          {
            tagName: 'button',
            parent: 'div',  
            attrs: {
              id: 'ok',
            },
            children: ['OK'],
          },
          {
            tagName: 'button',
            parent: 'div',  
            attrs: {
              id: 'cancel',
            },
            children: ['Cancel'],
          },
        ],
      },
    ],
  };
  


//Завдання №6
var userInput = prompt('Введіть значення для id тега button:')

htmlTree.children[1].children[0].attrs.id = userInput

console.log(htmlTree)


//Завдання №7
const [{ children: [{ children: [spanText] }] }] = htmlTree.children
console.log(spanText)

const [, { children: [{ children: [secondButtonText] }] }] = htmlTree.children
console.log(secondButtonText)

const { id } = htmlTree.children[0].children[3].attrs
console.log(id)

//Завдання №8
let arr = [1, 2, 3, 4, 5, "a", "b", "c"];

const [even1, odd1, even2, odd2, even3, ...letters] = arr

console.log("Even Numbers:", even1, even2, even3)
console.log("Odd Numbers:", odd1, odd2)
console.log("Letters:", letters)

//Завдання №9
{let arr = [1, "abc"];

const [number, [s1, s2, s3]] = arr;

console.log("Number:", number); 
console.log("Letters:", s1, s2, s3);}

//Завдання №10
let obj = {name: 'Ivan',
           surname: 'Petrov',
           children: [{name: 'Maria'}, {name: 'Nikolay'}]}
const { children: [{ name: name1 }, { name: name2 }] } = obj;

console.log("Ім'я 1:", name1)
console.log("Ім'я 2:", name2)

//Завдання №11
let arr = [1, 2, 3, 4, 5, 6, 7, 10];

const [a, b, ...rest] = arr;
const length = arr.length;

console.log('a:', a);
console.log('b:', b);
console.log('length:', length);

//Завдання №12
const car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2010,
    color: 'silver',
  };
  
  const userKeyToRemove = prompt('Введіть ключ для видалення:');
  
  const { [userKeyToRemove]: removedKey, ...newCar } = car;
  
  console.log('Оригінальний car:', car);
  console.log('Новий car без ключа:', newCar);


//Завдання №13
fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
    .then(data => {

    console.log(data); 

    const inputCurrency = prompt('Введіть валюту яку хотіли б поміняти (у такому форматі: USD):').toUpperCase();
    const outputCurrency = prompt('Введіть валюту на яку хотіли б обміняти (у такому форматі: EUR):').toUpperCase();
    const inputAmount = parseFloat(prompt('Enter the amount in the input currency:'));

    if (!(inputCurrency in data.rates) || !(outputCurrency in data.rates)) {
      console.log('Неправильний код валюти');
      return;
    }

    const exchangeRate = data.rates[outputCurrency] / data.rates[inputCurrency];
    const outputAmount = inputAmount * exchangeRate;

    console.log(`Сума яка вийшла: ${outputAmount.toFixed(2)} ${outputCurrency}`);
  })


//Завдання №14
fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
    .then(data => {
    const currencies = Object.keys(data.rates);

    let dropdownOptions = '';

    currencies.forEach(currency => {
      dropdownOptions += `<option value="${currency}">${currency}</option>`;
    });

    const dropdownList = `<select>${dropdownOptions}</select>`;

    document.body.innerHTML = dropdownList;
  })


//Завдання №15
fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
    .then(data => {
      const currencies = Object.keys(data.rates)
      const exchangeRatesTable = []

      // Перший рядок
      exchangeRatesTable.push(['', ...currencies])

      currencies.forEach(fromCurrency => {
        const row = [fromCurrency];
        currencies.forEach(toCurrency => {
          if (fromCurrency === toCurrency) {
            row.push(1); 
          } else {
            const crossRate = data.rates[toCurrency] / data.rates[fromCurrency];
            row.push(crossRate.toFixed(4)); 
          }
        });
        exchangeRatesTable.push(row);
      });

      // Створення таблиці
      const table = document.createElement('table')
      table.style.borderCollapse = 'collapse';
      table.style.width = '70%';
      table.style.margin = '20px auto';

      // Додавання рядків 
      exchangeRatesTable.forEach(rowData => {
        const tr = document.createElement('tr');
        rowData.forEach((value, index) => {
          const cell = index === 0 ? document.createElement('th') : document.createElement('td');
          cell.textContent = value;
          cell.style.border = '1px solid #dddddd';
          cell.style.textAlign = 'center';
          cell.style.padding = '8px';
          tr.appendChild(cell);
        });
        table.appendChild(tr);
      });

      document.body.appendChild(table)
    })


//Завдання №16
const car = {
    "Name": "chevrolet chevelle malibu",
    "Cylinders": 8,
    "Displacement": 307,
    "Horsepower": 130,
    "Weight_in_lbs": 3504,
    "Origin": "USA",
    "in_production": false
  };

         //визначення типу 
  function getInputType(value) {
    if (typeof value === 'number') {
      return 'number';
    } else if (typeof value === 'boolean') {
      return 'checkbox';
    } else {
      return 'text';
    }
  }

  const form = document.createElement('form');

  for (const key in car) {
    const label = document.createElement('label');
    label.textContent = `${key}: `;

    const input = document.createElement('input');
    input.type = getInputType(car[key]);

    if (input.type === 'checkbox') {
      input.checked = car[key];
    } else {
      input.value = car[key];
    }

    label.appendChild(input);
    form.appendChild(label);
  }

  document.body.appendChild(form);


//Завдання №17
const persons = [
    {
      name: 'Марія',
      fatherName: 'Іванівна',
      surname: 'Іванова',
      sex: 'female'
    },
    {
      name: 'Миколай',
      fatherName: 'Іванович',
      surname: 'Іванов',
      age: 15
    },
    {
      name: 'Петро',
      fatherName: 'Іванович',
      surname: 'Іванов',
      married: true
    },
  ];
  
  const columns = [];
  persons.forEach(person => {
    for (const key in person) {
      if (!columns.includes(key)) {
        columns.push(key);
      }
    }
  });
  
  const table = document.createElement('table')
  table.style.borderCollapse = 'collapse'; 
  
  const headerRow = document.createElement('tr');
  columns.forEach(column => {
    const th = document.createElement('th');
    th.textContent = column;
    th.style.border = '1px solid #dddddd'; 
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);
  
  persons.forEach(person => {
    const dataRow = document.createElement('tr');
    columns.forEach(column => {
      const td = document.createElement('td');
      td.textContent = person[column] || ''; 
      td.style.border = '1px solid #dddddd'; 
      dataRow.appendChild(td);
    });
    table.appendChild(dataRow);
  });
  
  document.body.appendChild(table)


//Тестове завдання
const cars = [
    {
      "Name": "chevrolet chevelle malibu",
      "Cylinders": 8,
      "Displacement": 307,
      "Horsepower": 130,
      "Weight_in_lbs": 3504,
      "Origin": "USA"
    },
    {
      "Name": "buick skylark 320",
      "Miles_per_Gallon": 15,
      "Cylinders": 8,
      "Displacement": 350,
      "Horsepower": 165,
      "Weight_in_lbs": 3693,
      "Acceleration": 11.5,
      "Year": "1970-01-01",
    },
    {
      "Miles_per_Gallon": 18,
      "Cylinders": 8,
      "Displacement": 318,
      "Horsepower": 150,
      "Weight_in_lbs": 3436,
      "Year": "1970-01-01",
      "Origin": "USA"
    },
    {
      "Name": "amc rebel sst",
      "Miles_per_Gallon": 16,
      "Cylinders": 8,
      "Displacement": 304,
      "Horsepower": 150,
      "Year": "1970-01-01",
      "Origin": "USA"
    },
  ];
  
  const carColumns = [];
  cars.forEach(car => {
    for (const key in car) {
      if (!carColumns.includes(key)) {
        carColumns.push(key);
      }
    }
  });
  
  const carTable = document.createElement('table');
  carTable.style.borderCollapse = 'collapse';
  
  const carHeaderRow = document.createElement('tr');
  carColumns.forEach(column => {
    const th = document.createElement('th');
    th.textContent = column;
    th.style.border = '1px solid #dddddd';
    carHeaderRow.appendChild(th);
  });
  carTable.appendChild(carHeaderRow);
  
  cars.forEach(car => {
    const carDataRow = document.createElement('tr');
    carColumns.forEach(column => {
      const td = document.createElement('td');
      td.textContent = car[column] || '';
      td.style.border = '1px solid #dddddd';
      carDataRow.appendChild(td);
    });
    carTable.appendChild(carDataRow);
  });
  
  document.body.appendChild(carTable);