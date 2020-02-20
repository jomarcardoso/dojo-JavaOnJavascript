const {
  JaveiroEstático,
  JaveiroParametrizado,
  javeiroComEstado,
} = require('./javeiro-camuflado');

it('Chamada estática', () => {
  const text = 'Time que ta ganhando não mexe';
  const result = JaveiroEstático.digaAlgo(text);

  expect(result).toBe(text);
});

it('Com estado', () => {
  const result = javeiroComEstado.digaAlgo('é sempre mais verde.');

  expect(result).toBe('A grama do vizinho é sempre mais verde.');
});

it('Parametrizado', () => {
  const javeiro = JaveiroParametrizado('De grão em grão');
  const result = javeiro.digaAlgo('a galinha enche o papo.');

  expect(result).toBe('De grão em grão a galinha enche o papo.');
});
