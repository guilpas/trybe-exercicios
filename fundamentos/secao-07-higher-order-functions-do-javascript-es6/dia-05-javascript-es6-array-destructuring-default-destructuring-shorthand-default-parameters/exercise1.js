// Exercício 1
// Escreva a função swap, que, dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. Detalhe: você precisa fazer essa função gastando apenas 1 linha. O retorno da função utilizando o array myList deve ser [3, 2, 5].

const myList = [5, 2, 3];

// escreva swap abaixo
const swap = ([firstElement,secondElement,thirdElement]) => [thirdElement,secondElement,firstElement];
console.log("Ex1",swap(myList));

// Exercício 2
// Suponha que você esteja trabalhando em projeto de um site de carros, onde cada carro é representado dentro de um array. Então sua liderança pede que seja mudado o formato de array para objeto. Para isso, crie uma função chamada toObject que, dada uma lista, retorna um objeto representando o carro:

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo
const toObject = ([nome,fabricante,ano]) => ({nome,fabricante,ano});
console.log("Ex2",toObject(palio));
console.log("Ex2",toObject(shelbyCobra));

// Exercício 3
// Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento. Um parâmetro adicional pode ser passado para alterar o cumprimento utilizado:

// escreva greet abaixo
const greet = (nome,cumprimento='Hi') => `${cumprimento} ${nome}`;

// Retornos esperados:
console.log("Ex3",greet('John')); // 'Hi John'
console.log("Ex3",greet('John', 'Good morning')); // 'Good morning John'
console.log("Ex3",greet('Isabela', 'Oi')); // 'Oi Isabela'
