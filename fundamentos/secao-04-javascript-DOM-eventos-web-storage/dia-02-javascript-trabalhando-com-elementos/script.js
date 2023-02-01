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

// Poderia usar as variaveis anteriores guardadas mas invés disso sera usado o getElements
// Adicione a classe title na tag h1 criada;
let h1criado = document.getElementsByTagName("h1")[0];
h1criado.className = 'title';

// Adicione a classe description nas 3 tags h3 criadas;
let listaH3 = document.getElementsByTagName("h3");
for (itemH3 of listaH3){
    itemH3.className = 'description';
}

// Remova a section criada no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();
let sectionDeletar = document.getElementsByClassName("left-content")[0];
main.removeChild(sectionDeletar);

// Centralize a section criada no passo 6 (aquele que possui a classe right-content).
let sectionCentralizar = document.getElementsByClassName("right-content")[0];
sectionCentralizar.style.margin = 'auto';

// Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;
let elementoPai = document.getElementsByClassName("center-content")[0];
elementoPai.style.backgroundColor = 'green';

// Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.
let lista = document.getElementsByTagName("ul")[0];
let ultimoElemento = lista.lastChild;
ultimoElemento.remove();
ultimoElemento = lista.lastChild;
ultimoElemento.remove();