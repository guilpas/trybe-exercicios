const anguloA = 60;
const anguloB = 20;
const anguloC = 100;

if (anguloA <= 0 || anguloB <= 0 || anguloC <= 0) {
  console.log("Erro: os angulos devem ter valores positvos.");
} else {
  console.log(anguloA + anguloB + anguloC == 180);
}

let nomePeca = "Torre";

switch (nomePeca.toLowerCase()) {
  case "bispo":
    console.log(nomePeca + " -> Linha reta diagonais");
    break;
  case "peao":
    console.log(nomePeca + " -> Uma casa a frente");
    break;
  case "torre":
    console.log(nomePeca + " -> Linha reta horizontal ou vertical");
    break;
  case "cavalo":
    console.log(nomePeca + " -> Em L");
    break;
  case "rainha":
    console.log(nomePeca + " -> Linha reta horizontal, vertical ou diagonal");
    break;
  case "rei":
    console.log(nomePeca + " -> Uma casa em qualquer direção");
    break;

  default:
    console.log("Erro: peça inválida.");
}

let nota = 92;
if (nota > 100) {
  console.log("Erro: Nota tem que estar entre 0 e 100.");
} else if (nota >= 90) {
  console.log("Conceito A.");
} else if (nota >= 80) {
  console.log("Conceito B.");
} else if (nota >= 70) {
  console.log("Conceito C.");
} else if (nota >= 60) {
  console.log("Conceito D.");
} else if (nota >= 50) {
  console.log("Conceito E.");
} else if (nota >= 0) {
  console.log("Conceito F.");
} else {
  console.log("Erro: Nota tem que estar entre 0 e 100.");
}
