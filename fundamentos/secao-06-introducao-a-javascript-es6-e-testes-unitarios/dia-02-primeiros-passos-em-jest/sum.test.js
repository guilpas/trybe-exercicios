const { sum, myRemove } = require('./script');

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
