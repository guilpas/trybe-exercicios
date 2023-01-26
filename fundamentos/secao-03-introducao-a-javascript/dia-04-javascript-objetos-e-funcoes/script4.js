//exercicios - bonus

//(Bônus) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
function converterNumeralRomano(stringAlgarismosRomanos) {
  let valorNumeralRomano = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let numero = 0;
  let atualAlgarismo = "M";
  for (let index = 0; index < stringAlgarismosRomanos.length - 1; index += 1) {
    if (
      valorNumeralRomano[stringAlgarismosRomanos[index]] <
      valorNumeralRomano[stringAlgarismosRomanos[index + 1]]
    ) {
      numero -= valorNumeralRomano[stringAlgarismosRomanos[index]];
    } else {
      numero += valorNumeralRomano[stringAlgarismosRomanos[index]];
    }
  }
  numero +=
    valorNumeralRomano[
      stringAlgarismosRomanos[stringAlgarismosRomanos.length - 1]
    ];
  return numero;
}
/* console.log(converterNumeralRomano("I"));
console.log(converterNumeralRomano("III"));
console.log(converterNumeralRomano("IV"));
console.log(converterNumeralRomano("V"));
console.log(converterNumeralRomano("VIII"));
console.log(converterNumeralRomano("IX"));
console.log(converterNumeralRomano("X"));
console.log(converterNumeralRomano("XIII"));
console.log(converterNumeralRomano("XIV"));
console.log(converterNumeralRomano("XVIII"));
console.log(converterNumeralRomano("CDXLIV")); */
console.log(converterNumeralRomano("MMCCCXXXIII"));

//Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro.
//Através de um loop for, percorra essa variável, busque os números pares e os adicione a um novo array, que deverá ser retornado ao final pela função.

let vector = [
  [1, 2],
  [3, 4, 5, 6],
  [7, 8, 9, 10, [11, [12, [13]]]],
];

function arrayOfNumbers(vector) {
  let pares = [];

  let vector1D = abreArray(vector);
  for (valor of vector1D) {
    if (valor % 2 == 0) {
      pares.push(valor);
    }
  }

  return pares;
}

function abreArray(array) {
  let arrayAuxiliar = [];
  for (teste of array) {
    if (Array.isArray(teste)) {
      let a = abreArray(teste);
      arrayAuxiliar = arrayAuxiliar.concat(a);
    } else {
      arrayAuxiliar.push(teste);
    }
  }
  return arrayAuxiliar;
}

console.log(arrayOfNumbers(vector));

//A partir do array de frutas basket, retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor. Por exemplo, o array [‘Melancia’, ‘Abacate’, ‘Melancia’, ‘Melancia’, ‘Uva’], deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função.

//Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: Sua cesta possui: x Melancias, x Abacates...

const basket = [
  "Melancia",
  "Abacate",
  "Melancia",
  "Melancia",
  "Uva",
  "Laranja",
  "Jaca",
  "Pera",
  "Melancia",
  "Uva",
  "Laranja",
  "Melancia",
  "Banana",
  "Uva",
  "Pera",
  "Abacate",
  "Laranja",
  "Abacate",
  "Banana",
  "Melancia",
  "Laranja",
  "Laranja",
  "Jaca",
  "Uva",
  "Banana",
  "Uva",
  "Laranja",
  "Pera",
  "Melancia",
  "Uva",
  "Jaca",
  "Banana",
  "Pera",
  "Abacate",
  "Melancia",
  "Melancia",
  "Laranja",
  "Pera",
  "Banana",
  "Jaca",
  "Laranja",
  "Melancia",
  "Abacate",
  "Abacate",
  "Pera",
  "Melancia",
  "Banana",
  "Banana",
  "Abacate",
  "Uva",
  "Laranja",
  "Banana",
  "Abacate",
  "Uva",
  "Uva",
  "Abacate",
  "Abacate",
  "Melancia",
  "Uva",
  "Jaca",
  "Uva",
  "Banana",
  "Abacate",
  "Banana",
  "Uva",
  "Banana",
  "Laranja",
  "Laranja",
  "Jaca",
  "Jaca",
  "Abacate",
  "Jaca",
  "Laranja",
  "Melancia",
  "Pera",
  "Jaca",
  "Melancia",
  "Uva",
  "Abacate",
  "Jaca",
  "Jaca",
  "Abacate",
  "Uva",
  "Laranja",
  "Pera",
  "Melancia",
  "Jaca",
  "Pera",
  "Laranja",
  "Jaca",
  "Pera",
  "Melancia",
  "Jaca",
  "Banana",
  "Laranja",
  "Jaca",
  "Banana",
  "Pera",
  "Abacate",
  "Uva",
];

function contaFrutas(array) {
  let objetoFrutas = {};
  for (fruta of array) {
    if (typeof objetoFrutas[fruta] == "undefined") {
      objetoFrutas[fruta] = 1;
    } else {
      objetoFrutas[fruta] += 1;
    }
  }
  return objetoFrutas;
}

let basketObject = contaFrutas(basket);
let mensagem = "Sua cesta possui:";
for (item in basketObject) {
  mensagem += " ";
  mensagem += basketObject[item];
  mensagem += " ";
  mensagem += item;
  mensagem += "s,";
}
mensagem = mensagem.replace(/,$/, ".");
mensagem = mensagem.replace(/,([^,]*)$/, " e" + "$1");
console.log(mensagem);

//Usando o objeto abaixo, faça o que for pedido a seguir:

let moradores = {
  blocoUm: [
    {
      nome: "Luiza",
      sobrenome: "Guimarães",
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: "William",
      sobrenome: "Albuquerque",
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: "Murilo",
      sobrenome: "Ferraz",
      andar: 8,
      apartamento: 804,
    },
    {
      nome: "Zoey",
      sobrenome: "Brooks",
      andar: 1,
      apartamento: 101,
    },
  ],
};

//Acesse as chaves nome, sobrenome, andar e apartamento do último morador do blocoDois e faça um console.log no seguinte formato: “O morador do bloco 2 de nome Zoey Brooks mora no 1° andar, apartamento 101”.

//Utilize o for para imprimir o nome completo de todos os moradores do bloco 1, acessando suas chaves nome e sobrenome. Depois faça o mesmo para os moradores do bloco 2.

let morador = moradores.blocoDois[moradores.blocoDois.length-1];
console.log("O morador do bloco 2 de nome",morador.nome,morador.sobrenome,"mora no",morador.andar+"° andar, apartamento",morador.apartamento);

for(bloco in moradores){
    console.log(bloco);
    for(morador of moradores[bloco]){
        console.log(morador.nome,morador.sobrenome);
    }
}
