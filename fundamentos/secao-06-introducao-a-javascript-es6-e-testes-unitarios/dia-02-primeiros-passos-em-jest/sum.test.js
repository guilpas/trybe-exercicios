const { sum, myRemove, myFizzBuzz, encode, decode } = require('./script');

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
    expect(myFizzBuzz('teste')).toEqual(false);
  });
});

describe('testa funções encode e decode', () => {
  // Teste se encode e decode são funções;
  test('testa se encode é função', () => {
    expect(typeof encode).toEqual('function');
  });
  test('testa se decode é função', () => {
    expect(typeof decode).toEqual('function');
  });

  // Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
  test('testa se encode converte as vogais', () => {
    expect(encode('iniciando novo teste para a função encode')).toEqual('3n3c31nd4 n4v4 t2st2 p1r1 1 f5nçã4 2nc4d2');
  });

  // Para a função decode, teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente;
  test('testa se decode converte os numeros devolta para vogais', () => {
    expect(decode('3n3c31nd4 n4v4 t2st2 p1r1 1 f5nçã4 2nc4d2')).toEqual('iniciando novo teste para a função encode');
  });

  // Teste se as demais letras/números não são convertidos para cada caso;
  test('testa se encode converte apenas as vogais', () => {
    expect(encode('a b c d e f g h i j k l m n o p q r s t u v w x y z 0 1 2 3 4 5 6 7 8 9')).toEqual('1 b c d 2 f g h 3 j k l m n 4 p q r s t 5 v w x y z 0 1 2 3 4 5 6 7 8 9');
  });

  test('testa se decode converte apenas os numeros de 1 a 5', () => {
    expect(decode('a b c d e f g h i j k l m n o p q r s t u v w x y z 0 1 2 3 4 5 6 7 8 9')).toEqual('a b c d e f g h i j k l m n o p q r s t u v w x y z 0 a e i o u 6 7 8 9');
  });

  // Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro.
  test('testa o numero de caracteres da encode', () => {
    expect(encode('a1b2c3d4e5').length).toEqual(10);
  });

  test('testa o numero de caracteres da decode', () => {
    expect(decode('a1b2c3d4e5').length).toEqual(10);
  });


});

