const a = 12;
const b = 7;
const c = 21;

let parametro = 0;

//Soma
let soma = a + b;
console.log(soma);

//Subtração
let subtracao = a - b;
console.log(subtracao);

//Multiplicação
let multiplicacao = a * b;
console.log(multiplicacao);

//Divisão
let divisao = a / b;
console.log(divisao);

//Modulo
let modulo = a % b;
console.log(modulo);

//Maior numero entre dois
if (a > b) {
  console.log("Maior numero é " + a);
} else {
  console.log("Maior numero é " + b);
}

//Maior numero entre três
if (a > b && a > c) {
  console.log("Maior numero é " + a);
} else if (b > c) {
  console.log("Maior numero é " + b);
} else {
  console.log("Maior numero é " + c);
}

//Parametro positivo ou negativo
if (parametro > 0) {
  console.log("positive");
} else if (parametro < 0) {
  console.log("negative");
} else {
  console.log("zero");
}
