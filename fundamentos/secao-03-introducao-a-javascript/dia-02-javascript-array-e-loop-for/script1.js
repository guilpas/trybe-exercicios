let names = ["João", "Maria", "Antônio", "Margarida"];

for (let nome of names) {
  console.log(nome);
}

//Iremos utilizar esse array para realizar os próximos exercícios.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Percorra o array imprimindo todos os valores nele contidos
for (let numero of numbers) {
  console.log(numero);
}

//Some todos os valores contidos no array e imprima o resultado;
let soma = 0;
for (let numero of numbers) {
  soma += numero;
}
console.log("Soma: ",soma);

//Calcule e imprima a média aritmética dos valores contidos no array;
//A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
let media = soma / numbers.length;
console.log("Media: ",media);

//Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;
if (media > 20) {
  console.log("valor maior que 20");
} else {
  console.log("valor menor ou igual a 20");
}

//Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let maior = numbers[0];
for (let numero of numbers) {
  if (numero > maior) {
    maior = numero;
  }
}
console.log("Maior valor:", maior);

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;
let impares = 0;
for (let numero of numbers) {
  if (numero % 2 == 1) {
    impares += 1;
  }
}
if (impares > 0) {
  console.log(impares, " valores impares");
} else {
  console.log("nenhum valor ímpar encontrado");
}

//Utilizando for, descubra qual o menor valor contido no array e imprima-o;
let menor = numbers[0];
for (let numero of numbers) {
  if (numero < menor) {
    menor = numero;
  }
}
console.log("Menor valor:", menor);

//Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
array = [];
for(let index=1;index<=25;index++){
    array.push(index);
}
console.log(array);

//Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.
for(let numero of array){
    console.log(numero/2);
}