const Curativo = require('./curativo');
const Usuario = require("./usuario")
const Receptor = require('./receptor');

describe('Classe Curativo', () => {
  test('deve criar um curativo com os valores corretos', () => {
    const curativo = new Curativo('Curativo A', 10);
    expect(curativo.tipo).toBe('Curativo A');
    expect(curativo.quantidadeDisponivel).toBe(10);
  });

  test('deve doar um curativo corretamente', () => {
    const curativo = new Curativo('Curativo A', 5);
    const receptor = new Receptor('Giovana', 'giovana@email.com', 'Sorocaba', 'Curativo A');
    curativo.doarPara(receptor);
    expect(curativo.quantidadeDisponivel).toBe(4);
    expect(receptor.TipoCurativo).toBe('Curativo A');
  });
});

test('deve criar um curativo com o tipo correto', () => {
  const curativo = new Curativo('Micropor Anti alérgico');
  expect(curativo.tipo).toBe('Micropor Anti alérgico');
});