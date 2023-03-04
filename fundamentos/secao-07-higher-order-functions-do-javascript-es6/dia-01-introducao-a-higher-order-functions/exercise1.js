const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

let expectedResult = 'Stephen King';
const authorBornIn1947 = (books) => {
  const livroComAuthorBornIn1947 = books.find(
    (livro) => livro.author.birthYear === 1947
  );
  return livroComAuthorBornIn1947.author.name;
};

console.log(authorBornIn1947(books), '===', expectedResult);

// Retorne o nome do livro com menor número de caracteres (menor nome).

expectedResult = 'Duna';
const smallerName = (books) => {
  const menorBook = books.reduce((menorNomeLivro, livro) =>
    menorNomeLivro.name.length < livro.name.length ? menorNomeLivro : livro
  );

  return menorBook.name;
};
console.log(smallerName(books), '===', expectedResult);

// Encontre o primeiro livro cujo nome possua 26 caracteres.

expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  releaseYear: 1991,
};

const getNamedBook = (books) => books.find((book) => book.name.length === 26);

console.log(getNamedBook(books), '===', expectedResult);

// Faça uma função que retorne true se todas as pessoas autoras tiverem nascido no século XX, ou false, caso contrário.
expectedResult = false;

const everyoneWasBornOnSecXX = (books) => books.every( (book) => (book.author.birthYear > 1899 && book.author.birthYear < 2000 ));

console.log(everyoneWasBornOnSecXX(books), '===', expectedResult);

// Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.
