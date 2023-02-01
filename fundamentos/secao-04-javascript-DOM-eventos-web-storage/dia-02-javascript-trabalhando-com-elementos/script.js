// COLOQUE SEU CÓDIGO AQUI
let body = document.getElementsByTagName("body")[0];

// Adicione a tag h1 com o texto TrybeTrip - Agência de Viagens como filho da tag body;
let titulo = document.createElement("h1");
titulo.innerHTML = "TrybeTrip - Agência de Viagens";
body.appendChild(titulo);

// Adicione a tag main com a classe main-content como filho da tag body;
let main = document.createElement("main");
main.className = "main-content";
body.append(main);

// Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
let section1 = document.createElement("section");
section1.className = "center-content";
main.append(section1);

// Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
let tagP = document.createElement("p");
tagP.innerHTML = "Bem vindo a TrybeTrip";
section1.append(tagP);

// Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
let section2 = document.createElement("section");
section2.className = "left-content";
main.append(section2);

// Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
let section3 = document.createElement("section");
section3.className = "right-content";
main.append(section3);

// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;
let img1 = document.createElement("img");
img1.src = "https://picsum.photos/200";
img1.className = "small-image";
section2.append(img1);

// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, … como valores da lista. Essa lista deve ser filha do section criado no passo 6;
let valores = ["um","dois","três","quatro","cinco","seis","sete","oito","nove","dez"];
let lista1 = document.createElement("ul");
section3.append(lista1);
for(numero of valores){
    let item = document.createElement("li");
    item.innerHTML = numero;
    lista1.append(item);
}

// Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.
for(let index=0;index<3;index+=1){
    let tagNova = document.createElement("h3");
    main.append(tagNova);
}

