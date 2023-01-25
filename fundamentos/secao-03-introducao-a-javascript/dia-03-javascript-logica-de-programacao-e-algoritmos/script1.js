//crie um algoritmo que imprima na tela o fatorial de 10.

let fatorial = 1;
for(let index=1;index<=10;index++){
    fatorial *= index;
}
console.log("O fatorial de 10 é",fatorial)

//desenvolver um algoritmo que seja capaz de inverter uma palavra.
let word = 'banana';
let invertida='';
for(let index=word.length-1;index>=0;index--){
    invertida+=word[index];
}
console.log(word,"->",invertida);

//escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.
let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior=0;
let menor=0;
for(let index=0;index<array.length;index++){
    if (array[index].length > array[maior].length){
        maior = index;
    } 
    if (array[index].length < array[menor].length){
        menor = index;
    } 
}
console.log("Maior palavra",array[maior]);
console.log("Menor palavra",array[menor]);

//escreva um algoritmo que imprima no console o maior número primo entre 2 e 50.
let maiorPrimo=2;
for(let index=50;index>1;index--){
    let divisivel;
    for(divisivel=2;divisivel<index;divisivel++){
        if (index%divisivel == 0){ //é divisivel por outro
            break;
        }
    }
    if (divisivel == index){
        maiorPrimo = index;
        break;
    }
}
console.log("O maior primo é",maiorPrimo);