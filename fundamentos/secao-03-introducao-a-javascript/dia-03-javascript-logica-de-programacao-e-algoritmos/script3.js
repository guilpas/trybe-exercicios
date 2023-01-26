let ppt = ["pedra", "papel", "tesoura"];
let contador1 = 0;
let contador2= 0;
let numeroPartidas = 20;

for(let index = 0;index<numeroPartidas;index++){
    let player1 = Math.floor(Math.random() * 3);
let player2 = Math.floor(Math.random() * 3);
console.log("Jogo",index+1);
console.log("O jogador 1 jogou:", ppt[player1]);
console.log("O jogador 2 jogou:", ppt[player2]);

if (player1 == player2) {
  console.log("Empate.");
} else if (player1 == 2 && player2 == 0) {
  console.log("Jogador 2 venceu.");
  contador2++;
} else if (player1 > player2 || (player2 == 2 && player1 == 0)) {
  console.log("Jogador 1 venceu.");
  contador1++;
} else {
  console.log("Jogador 2 venceu.");
  contador2++;
}
console.log("Pontuação:",contador1,"a",contador2);
console.log("----------------");
}

if (contador1 > contador2){
    console.log("Fim de jogo - jogador 1 venceu.");
} else if (contador2 > contador1){
    console.log("Fim de jogo - jogador 2 venceu.");
} else{
    console.log("Fim de jogo - empate");
}
