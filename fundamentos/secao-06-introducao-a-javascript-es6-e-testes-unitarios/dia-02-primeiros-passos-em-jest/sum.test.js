const { sum, myRemove, myFizzBuzz } = require('./script');

test('sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
});

describe('testa função myRemove', () => {
  // Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado;
  test('remove o elemento 3 do array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  // Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4];
  test('testa se o array foi alterado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  // Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado.
  test('tenta remover 5 do array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

describe('testa função myFizzBuzz', () => {
  // Execute a função myFizzBuzz(num), sendo num um número divisível por 3 e 5, e verifique se o retorno é o esperado.
  test('numero divisel por 3 e 5 = fizzbuzz', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
  });

  // Execute a função myFizzBuzz(num), sendo num um número divisível por 3, e verifique se o retorno é o esperado.
  test('numero divisel por 3 = fizz', () => {
    expect(myFizzBuzz(6)).toEqual('fizz');
  });

  // Execute a função myFizzBuzz(num), sendo num um número divisível por 5, e verifique se o retorno é o esperado.
  test('numero divisel por 5 = buzz', () => {
    expect(myFizzBuzz(10)).toEqual('buzz');
  });

  // Execute a função myFizzBuzz(num), sendo num um número que não é divisível por 3 ou 5, e verifique se o retorno é o esperado.
  test('numero nao divisel por 5 ou 3 = numero', () => {
    expect(myFizzBuzz(7)).toEqual(7);
  });

  // Execute a função myFizzBuzz(num), sendo num um parâmetro que não é um número, e verifique se o retorno é o esperado.
  test('parametro não é numero = false', () => {
    expect(myFizzBuzz("teste")).toEqual(false);
  });

});
