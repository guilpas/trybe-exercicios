// crie uma função que receba como parâmetro o nome completo da nova pessoa colaboradora e que automaticamente gere um email no formato nome_da_pessoa@trybe.com;

const addPerson = (nomeCompleto) => ({
  nomeCompleto,
  email: `${nomeCompleto.toLowerCase().replace(' ', '_')}@trybe.com`,
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

function sorteadorDeLoteria(apostado, callback) {
  const sorteado = Math.floor(Math.random() * 5) + 1;
  return callback(apostado, sorteado)
    ? 'Parabéns, você ganhou'
    : 'Tente novamente';
}

console.log(sorteadorDeLoteria(3, callbackIsSorteado));

// Corretor automático de exame
// Crie uma HOF que receberá três parâmetros:
// O primeiro será um array de respostas corretas (soluções);
// O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;
// O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso, essa função usará os seguintes critérios:
// Uma resposta correta adiciona 1 ponto à pontuação final;
// A ausência de uma resposta não altera a pontuação (quando for “N.A”);
// Uma resposta incorreta reduz a pontuação final em 0.5 ponto.
// Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante.
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const callbackCorretor = (gabarito, respostas) =>
  respostas.reduce((pontuacao,resposta, index) => {
    if (resposta === 'N.A') return pontuacao;
    if (resposta === gabarito[index]) return pontuacao+1;
    return pontuacao -0.5;
  },0);

function corretorAutomatico(gabarito, respostas, callback) {
    return callback(gabarito,respostas);
}

console.log('Pontuação',corretorAutomatico(RIGHT_ANSWERS, STUDENT_ANSWERS,callbackCorretor));
