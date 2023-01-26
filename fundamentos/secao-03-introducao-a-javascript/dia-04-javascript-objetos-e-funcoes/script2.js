//Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados.

const a = 230;
const b = 23;

function adicao(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function multiplicacao(a, b) {
  return a * b;
}

function divisao(a, b) {
  return a / b;
}

function modulo(a, b) {
  return a % b;
}

console.log(adicao(a,b));
console.log(subtracao(a,b));
console.log(multiplicacao(a,b));
console.log(divisao(a,b));
console.log(modulo(a,b));

//Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

function maior(a,b){
    if(a>b){
        return a;
    }else{
        return b;
    }
}

console.log("O maior entre",a,b,"é",maior(a,b));

//Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.
const c = 1234;

function maior3(a,b,c){
    if(a>b && a>c){
        return a;
    }else if (b>c){
        return b;
    }else{
        return c;
    }
}

console.log("O maior entre",a,b,c,"é",maior3(a,b,c));

//Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

function sinal(a){
    if (a>0){
        return "positive";
    }else if (a < 0){
        return "negative";
    }else {
        return "zero";
    }
}
console.log(sinal(10),sinal(-10),sinal(0));


//Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.
//Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
//Um ângulo será considerado inválido se não tiver um valor positivo.

function trianguloValido(anguloA,anguloB,anguloC){
    if (anguloA <= 0 || anguloB <= 0 || anguloC <= 0) {
        return "Erro: os angulos devem ter valores positivos."
      } else {
        return(anguloA + anguloB + anguloC == 180);
      }
}

console.log(trianguloValido(20,40,120),trianguloValido(-20,40,120),trianguloValido(20,40,110));
