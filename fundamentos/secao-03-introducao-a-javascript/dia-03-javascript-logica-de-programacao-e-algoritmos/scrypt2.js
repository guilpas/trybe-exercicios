//Escreva um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

console.log("quadrado");
let n = 7;
let linha = "";
for (let indexLinha = 0; indexLinha < n; indexLinha++) {
  linha += "*";
}
for (let indexAltura = 0; indexAltura < n; indexAltura++) {
  console.log(linha);
}

//Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.
console.log("triangulo");

for (let indexAltura = 0; indexAltura < n; indexAltura++) {
  let linha = "";
  for (let indexLinha = 0; indexLinha <= indexAltura; indexLinha++) {
    linha += "*";
  }
  console.log(linha);
}

//Agora inverta o lado do triângulo.
console.log("triangulo invertido");

for (let indexAltura = 0; indexAltura < n; indexAltura++) {
  let linha = "";
  for (let indexLinha = n - 1; indexLinha >= 0; indexLinha--) {
    if (indexLinha <= indexAltura) {
      linha += "*";
    } else {
      linha += " ";
    }
  }
  console.log(linha);
}

//Depois, faça uma pirâmide com n asteriscos de base:
console.log("triangulo centro");
let centro = (n - 1) / 2;
for (let indexAltura = 0; indexAltura < n; indexAltura += 2) {
  let linha = "";
  for (let indexLinha = 0; indexLinha < n; indexLinha++) {
    if (
      indexLinha > centro + indexAltura / 2 ||
      indexLinha < centro - indexAltura / 2
    ) {
      linha += " ";
    } else {
      linha += "*";
    }
  }
  console.log(linha);
}

//Faça uma pirâmide com n asteriscos de base que seja vazia no meio.
console.log("triangulo vazio no meio");

for (let indexAltura = 0; indexAltura < n; indexAltura += 2) {
  let linha = "";
  for (let indexLinha = 0; indexLinha < n; indexLinha++) {
    if (
      indexLinha == centro + indexAltura / 2 ||
      indexLinha == centro - indexAltura / 2 ||
      indexAltura == n - 1
    ) {
      linha += "*";
    } else {
      linha += " ";
    }
  }
  console.log(linha);
}

//Faça um programa que diz se um número definido numa variável é primo ou não.
let testePrimo = 601;
let divisivel;
for (divisivel = 2; divisivel < testePrimo; divisivel++) {
  if (testePrimo% divisivel == 0) {
    console.log("O número", testePrimo, "não é primo."); //é divisivel por outro
    break;
  }
}
if (divisivel == testePrimo) {
  console.log("O número", testePrimo, "é primo.");
}
