//Обчислення суми на каву впродовж місяця
let cupsPerDay = 2; // кількість чашок кави
let cupsCosts = 30; // середня вартість 
let dayOfMonth = 30; // середня кількість днів у місяці
let TotalCostsOfCoffe = cupsPerDay * cupsCosts * dayOfMonth; // обрахунок 
alert (`Загальні витрати на каву становлять ${TotalCostsOfCoffe} грн на місяць`); // виведення на екран


//обчислення витрат на газ впродовж місяця з використанням prompt
let gasCost = prompt ("Введіть вартість газу за метр кубічний у гривнях");
let gasPerMonth = prompt ("Введіть кількість кубічних метрів витачених за місяць:");
alert ('Загальні витрати на газ цього міцяця становить: ${totalGasCost}');
alert (`Загальні витрати на газ цього міцяця становить: ${ totalGasCost }`);


// Завдання №2
let a = 2 
let b = 8 
console.log(0, a, b)
{
    let a = 180; 
    let c = 20   
    b     = b +1 
    console.log(1, a, b, c)
}
console.log(2, a, b)
// У даному завданні я змінював не одне значення змінної, зрозумів для себе що let ми можемо змінити будь коли коли нам буде це потрібно, але коли ми присвоюємо const то її змінювати неможливо так як це константа.
// Також розглянув як змінюються значення коли перетворюєш глобальну змінну на локальну, та що коли буде виводитись