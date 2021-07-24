'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e'];

// ******* METODO SLICE

console.log(arr.slice(2)); //metodo slice pega pedaço do array. retorna um array
console.log(arr.slice(2,4)); //podemos definir o comeco e o fim
console.log(arr.slice(-1)); //pega o ultimo elemento do array. comeca a cortar do penultimo
console.log(arr.slice(-2)); //pega o penultimo elemento do array e o ultimo elemento do array (comeca a cortar do penultimo)

// usando o slice pra criar uma shallow copy do array
console.log(arr.slice()); // metodo slice sem nenhum argumento
console.log(...arr); //tambem eh possivel com o spread operator / mas ai ele nao retorna um array, mas sim os elementos 1 a 1
console.log([...arr]); //agora o spread operator retorna em uma array

// vantagem de usar o slice em detrimento do spread operator para formar shallow copies:
// com o slice voce pode encadear outros metodos ao resultado da sua shallow copy, o que pode ser util em algum momento

// ******* METODO SPLICE

// o splice faz a mesma coisa que o slice, mas ele altera o array original
console.log(arr.splice(2)); // [c, d, e]
console.log(arr); // agora o arr eh o que sobrou, ou seja, [a, b]
// geralmente o splice eh usado para deletar um ou mais elementos de um array / portanto na maioria das vezes o que ele retorna nao eh muito utilizado

arr = ['a', 'b', 'c', 'd', 'e'];

// removendo o ultimo elemento de um array com o splice
arr.splice(-1); // -1 eh o ultimo elemento
console.log(arr); // [a, b, c, d]

arr = ['a', 'b', 'c', 'd', 'e'];

// splice com 2 argumentos funciona diferente do slice com 2 elementos
arr.splice(1, 2) // a partir do elemento na posicao 1, 2 elementos foram deletados
// o segundo argumento eh o numero de elementos que queremos deletar
console.log(arr); // [a, d, e] / 'b' e 'c' foram deletados

// ******* METODO REVERSE

arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.reverse()); // [e, d, c, b, a]
// assim como o splice, o reverse muda o array original
console.log(arr); // [e, d, c, b, a];

// ******* METODO CONCAT

//utilizado para concatenar 2 arrays

let arr2 = ['f', 'g', 'h', 'i', 'j'];

const letters = arr.reverse().concat(arr2); //fizemos o arr voltar ao original e depois concatenamos com a segunda array que criamos, arr 2
console.log(letters) // resultado = [a, b, c, d, e, f, g, h, i, j]

// tambem podemos concatenar com o spread operator

let numeros = [1, 2, 3];
let numeros2 = [4, 5, 6];

console.log([...numeros, ...numeros2]); // [1, 2, 3, 4, 5, 6]

// ******* METODO JOIN

//junta os elementos de um array em uma string com o separador que desejarmos

const numerosJuntos = [...numeros, ...numeros2];
console.log(numerosJuntos.join(' / ')); // 1/2/3/4/5/6