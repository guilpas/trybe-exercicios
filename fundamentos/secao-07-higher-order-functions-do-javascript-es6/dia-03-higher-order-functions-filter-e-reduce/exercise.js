// Fonte: <https://restcountries.com/v2/all>
const countries = [
    {
      name: 'Afghanistan',
      region: 'Asia',
      currencies: [{ code: 'AFN', name: 'Afghan afghani' }],
      capital: 'Kabul',
      population: 40218234,
      area: 652230
    },
    {
      name: 'Åland Islands',
      region: 'Europe',
      currencies: [{ code: 'EUR', name: 'Euro' }],
      capital: 'Mariehamn',
      population: 28875,
      area: 1580
    },
    {
      name: 'Albania',
      region: 'Europe',
      currencies: [{ code: 'ALL', name: 'Albanian lek' }],
      capital: 'Tirana',
      population: 2837743,
      area: 28748
    },
    {
      name: 'Algeria',
      region: 'Africa',
      currencies: [{ code: 'DZD', name: 'Algerian dinar' }],
      capital: 'Algiers',
      population: 44700000,
      area: 2381741
    },
    {
      name: 'American Samoa',
      region: 'Oceania',
      currencies: [{ code: 'USD', name: 'United States Dollar' }],
      capital: 'Pago Pago',
      population: 55197,
      area: 199
    },
    {
      name: 'Andorra',
      region: 'Europe',
      currencies: [{ code: 'EUR', name: 'Euro' }],
      capital: 'Andorra la Vella',
      population: 77265,
      area: 468
    },
    {
      name: 'Angola',
      region: 'Africa',
      currencies: [{ code: 'AOA', name: 'Angolan kwanza' }],
      capital: 'Luanda',
      population: 32866268,
      area: 1246700
    },
    {
      name: 'Anguilla',
      region: 'Americas',
      currencies: [{ code: 'XCD', name: 'East Caribbean dollar' }],
      capital: 'The Valley',
      population: 13452,
      area: 91
    }
  ];

  // 1 - Calcule a quantidade total da população de todos os países.

  let expectedResult = 120797034;
const getPopulation = () => countries.reduce( (populacaoTotal,pais) => populacaoTotal + pais.population ,0);
console.log(getPopulation(),"===",expectedResult);

// 2 - Calcule a área total de todos os países.

expectedResult = 4311757;
const getTotalArea = () => countries.reduce( (areaTotal,pais) => areaTotal + pais.area ,0);
console.log(getTotalArea(),"===",expectedResult);

// 3 - Encontre o país com o maior nome.

expectedResult = {
    name: 'American Samoa',
    region: 'Oceania',
    currencies: [{ code: 'USD', name: 'United States Dollar' }],
    capital: 'Pago Pago',
    population: 55197,
    area: 199
  }
  const longestName = () => countries.reduce( (maiorNome,pais) => maiorNome.name.length > pais.name.length? maiorNome : pais);
  console.log(longestName(),"===",expectedResult);

  // 4 - Retorne a quantidade de vezes que a letra a maiúscula ou minúscula aparece no array de nomes.

  const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  expectedResult = 20;
  const countA = () => names.reduce( (counterA,name) => counterA + name.match(/[Aa]/g).length,0);
  console.log(countA(),"===",expectedResult);