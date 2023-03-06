// 1 - Dada uma matriz, transforme em um array.

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  const flatten = () => arrays.reduce( (arrayTotal,arrayIteracao) => {
    arrayTotal.push(...arrayIteracao);
    return arrayTotal;
  },[]);
  console.log(flatten());

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

  // 2 - Crie uma string com os nomes de todas as pessoas autoras.

  let expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

const reduceNames = () => books.reduce( (stringNomes,book) => stringNomes += book.author.name +', ','').replace(/, $/,".");
console.log(reduceNames(), '===', expectedResult);

// 3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
expectedResult = 43;

const averageAge = () => books.reduce( (mediaIdades,book,undefined,books) => mediaIdades + (book.releaseYear - book.author.birthYear)/books.length ,0 ).toFixed(0); 
console.log(averageAge(), '===', expectedResult);

// 4 - Encontre o livro com o maior nome.

expectedResult = {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  };
  
  const longestNamedBook = () => books.reduce( (maiorNome,book) => maiorNome.name.length > book.name.length ? maiorNome : book);
  console.log(longestNamedBook(), '===', expectedResult);