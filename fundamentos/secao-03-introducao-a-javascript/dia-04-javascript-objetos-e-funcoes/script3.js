let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

 //Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Use a sintaxe meuObjeto.chave.

 console.log("Bem-vinda,",info.personagem);

 //Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. Use a sintaxe meuObjeto['chave'] = valor. 
 info['recorrente'] = 'Sim';
 console.log(info);

 //Faça um for/in que mostre todas as chaves do objeto.
 for (chave in info){
    console.log(chave);
 }

 //Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto. 
 for (chave in info){
    console.log(info[chave]);
 }

 //Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: ‘Tio Patinhas’, ‘Christmas on Bear Mountain, Dell’s Four Color Comics #178’, ‘O último MacPatinhas’, ‘Sim’. Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves. 

 let infoTioPatinhas = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
  };
  for (chave in info){
    if (chave != 'recorrente' || info[chave] != "Sim" || infoTioPatinhas[chave] != "Sim" ){
        console.log(info[chave],"e",infoTioPatinhas[chave]);
    } else {
        console.log("Ambos recorrentes");
    }
 }

 /// Leitura de Objetos

 let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

  //Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Pior Dia de Todos’”.
  console.log("O livro favorito de",leitor.nome,leitor.sobrenome,"se chama","'"+leitor.livrosFavoritos[0].titulo+"'");

  //Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a essa chave um objeto contendo as seguintes informações:
  let novoLivro = {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  };
  leitor.livrosFavoritos.push(novoLivro);
  console.log(leitor);

  //Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: “Julia tem <quantidade> livros favoritos”, onde “<quantidade>” é um número gerado automaticamente pelo seu código.
  console.log(leitor.nome,"tem",leitor.livrosFavoritos.length,"livros favoritos.");