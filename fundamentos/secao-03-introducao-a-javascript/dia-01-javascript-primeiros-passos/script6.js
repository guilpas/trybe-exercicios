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
