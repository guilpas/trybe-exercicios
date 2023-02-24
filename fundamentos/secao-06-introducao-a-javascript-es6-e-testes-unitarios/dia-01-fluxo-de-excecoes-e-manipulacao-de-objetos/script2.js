const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const addNoite = (obj, ch, val) => (obj[ch] = val);

addNoite(lesson2, 'turno', 'noite');
console.log(lesson2);

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
// Object.keys()
const listKeys = (obj) => {
  const keys = [];
  for (const key in obj) keys.push(key);
  return keys;
};

console.log(listKeys(lesson2));

// Crie uma função para mostrar o tamanho de um objeto.
// array.length

const lengthObject = (obj) => listKeys(obj).length;
console.log(lengthObject(lesson2));

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
// Object.values()

const listValues = (obj) => {
  const values = [];
  for (const key in obj) values.push(obj[key]);
  return values;
};
console.log(listValues(lesson2));

// Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves lesson1, lesson2 e lesson3.

const allLessons = Object.assign({}, { lesson1 }, { lesson2 }, { lesson3 });
console.log(allLessons);

// Usando o objeto criado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas.

function totalEstudantes(obj) {
    let total = 0;
    const lessons = Object.values(obj);
    for (const lesson of lessons) total+= lesson.numeroEstudantes;
    return total;
}
console.log( totalEstudantes(allLessons));

// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.

function getValueByNumber(obj,num) {
    const array = Object.values(obj);
    return array[num];
}
console.log(getValueByNumber(lesson1, 0));

// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles o objeto, o nome da chave e o valor da chave. 

function verifyPair (obj, key, val) {
    const entries = Object.entries(obj);
    for(const entry of entries) {
        if (entry[0] === key && entry[1] === val) return true;
    }
    return false;
}

console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false

// Bônus - Organizando lições
// Utilizando o objeto (allLesson), crie uma função para contar quantos estudantes assistiram às aulas de Matemática;

function countEstudantesAula(obj,aula) {
  let estudantes = 0;
  const lessons = Object.values(obj);
    for (const lesson of lessons) {
      if (lesson.materia === aula) estudantes+= lesson.numeroEstudantes;
    }
    return estudantes;
}
console.log(countEstudantesAula(allLessons,"Matemática"));

// Utilizando o objeto (allLesson), crie uma função que deva retornar um objeto que represente o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes.

function createReport(obj, professor) {
  let estudantes = 0;
  const aulas = [];
  const lessons = Object.values(obj);
    for (const lesson of lessons) {
      if (lesson.professor === professor) {
        estudantes+= lesson.numeroEstudantes;
        aulas.push(lesson.materia);
      }
    }
    return {professor,aulas,estudantes};
}
console.log(createReport(allLessons, 'Maria Clara'));
