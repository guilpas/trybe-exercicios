// crie uma função que receba como parâmetro o nome completo da nova pessoa colaboradora e que automaticamente gere um email no formato nome_da_pessoa@trybe.com;

const addPerson = (nomeCompleto) => ({
  nomeCompleto,
  email: `${nomeCompleto.toLowerCase().replace(' ','_')}@trybe.com`,
});

console.log(addPerson('Guilherme Silva'));

// utilize a função newEmployees, definida abaixo, para receber a sua função como parâmetro e criar o objeto de cada pessoa contratada.

const newEmployees = () => {
  const employees = {
    id1: addPerson('Pedro Guerra'), // Nome: Pedro Guerra
    id2: addPerson('Luiza Drumond'), // Nome: Luiza Drumond
    id3: addPerson('Carla Paiva'), // Nome: Carla Paiva
  };
  return employees;
};

console.log(newEmployees());

// Desenvolva uma HOF que retorne o resultado de um sorteio. Essa HOF irá gerar um número aleatório entre 1 e 5, recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns, você ganhou”).

const callbackIsSorteado = (apostado, sorteado) => apostado === sorteado;

function sorteadorDeLoteria(apostado,callback){
    const sorteado = Math.floor(Math.random()*5)+1;
    return callback(apostado,sorteado) ? 'Parabéns, você ganhou' : 'Tente novamente';
}

console.log(sorteadorDeLoteria(3,callbackIsSorteado));

