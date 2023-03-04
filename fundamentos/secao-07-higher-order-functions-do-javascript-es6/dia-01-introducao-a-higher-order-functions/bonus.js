const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 420,
  strength: 60,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const randomDmg = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// Crie uma função que retorne o dano do dragão. O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).
const dragonDmg = () => randomDmg(15, dragon.strength);

// Crie uma função que retorne o dano causado pelo warrior. O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).
const warriorDmg = () =>
  randomDmg(warrior.strength, warrior.weaponDmg * warrior.strength);

// Crie uma função que retorne um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disso, a função deve ter uma condicional: caso o mago tenha menos de 15 de mana, o valor de dano recebe uma mensagem (Ex: “Não possui mana suficiente”), e a mana gasta é 0.
const mageObj = () =>
  mage.mana >= 15
    ? {
        mageDmg: randomDmg(mage.intelligence, mage.intelligence * 2),
        manaSpent: 15,
      }
    : {
        mageDmg: 'Não possui mana suficiente',
        manaSpent: 0,
      };

// Parte II
// Crie a primeira HOF que compõe o objeto gameActions.
// Ela será a função que simula o turno do personagem warrior. Essa HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon. Além disso, ela também deve atualizar o valor da chave damage do warrior.
const gameActions = {
  warriorTurn: (warriorDmg) => {
    warrior.damage = warriorDmg();
    dragon.healthPoints -= warrior.damage;
  },
};

// Crie a segunda HOF que compõe o objeto gameActions.
// Ela será a função que simula o turno do personagem mage. Essa HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon. Além disso, ela também deve atualizar o valor das chaves damagee mana do mage.

Object.assign(gameActions, {
  mageTurn: (mageObj) => {
    mage.damage = mageObj().mageDmg;
    mage.mana -= mageObj().manaSpent;
    dragon.healthPoints -= typeof mage.damage === 'number' ? mage.damage : 0;
  },
});

// Crie a terceira HOF que compõe o objeto gameActions.
// Ela será a função que simula o turno do monstro dragon. Essa HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os healthPoints dos personagens mage e warrior. Além disso, ela também deve atualizar o valor da chave damage do monstro.

Object.assign(gameActions, {
    dragonTurn: (mageObj) => {
      dragon.damage = dragonDmg();
      mage.healthPoints -= dragon.damage;
      warrior.healthPoints -= dragon.damage;
    },
  });

  // Adicione ao objeto gameActions uma função de primeira classe que retorna o objeto battleMembers atualizado e faça um console.log para visualizar o resultado final do turno.

  Object.assign(gameActions, {
    turnResults: () => battleMembers,
  });

  // Testando
  let turno = 1;
  const turn = () => {
    gameActions.warriorTurn(warriorDmg);
    gameActions.mageTurn(mageObj);
    gameActions.dragonTurn(dragonDmg);
    mortes();
    console.log('Turno',turno++,gameActions.turnResults());
  }

  const mortes = () => {
    warrior.strength *= warrior.healthPoints < 1? 0 : 1; 
    mage.intelligence *= mage.healthPoints < 1? 0 : 1; 
  }
  
  
  while((warrior.healthPoints > 0 || mage.healthPoints > 0) && (dragon.healthPoints > 0)) {  
    turn();
  }

  if (dragon.healthPoints > 0) console.log('Triste dia! O Dragão derrotou os herois');
  else if (warrior.healthPoints > 0 || mage.healthPoints > 0) console.log('Os herois triunfaram novamente!')
  else console.log('Os herois sacrificaram suas vidas para derrotar o dragão');
  
