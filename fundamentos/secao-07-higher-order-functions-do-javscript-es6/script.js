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
