//exercicios - bonus

//(Bônus) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
function converterNumeralRomano (stringAlgarismosRomanos){

let valorNumeralRomano = {
    I:1,
    V:5,
    X:10,
    L:50,
    C:100,
    D:500,
    M:1000,
}

let numero = 0;
let atualAlgarismo = 'M';
for(let index=0;index<stringAlgarismosRomanos.length-1;index+=1){
    if (valorNumeralRomano[stringAlgarismosRomanos[index]]<valorNumeralRomano[stringAlgarismosRomanos[index+1]]){
        numero-=valorNumeralRomano[stringAlgarismosRomanos[index]];
    } else{
        numero+=valorNumeralRomano[stringAlgarismosRomanos[index]];
    }
}
numero+=valorNumeralRomano[stringAlgarismosRomanos[stringAlgarismosRomanos.length-1]];
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

let vector = [[1, 2, ], [3,4,5,6], [7,8,9,10, [11,[12,[13]]]]];

function arrayOfNumbers(vector){
    let pares = [];
    
    let vector1D = abreArray(vector);
    for(valor of vector1D){
        if (valor%2==0){
            pares.push(valor);
        }
    }
    
    return pares;
}

function abreArray(array){
    let arrayAuxiliar=[];
    for(teste of array){
        if (Array.isArray(teste)){
            let a = abreArray(teste);
            arrayAuxiliar = arrayAuxiliar.concat(a);
        }else{
            arrayAuxiliar.push(teste);
        }
    }
    return arrayAuxiliar;
}



console.log(arrayOfNumbers(vector));