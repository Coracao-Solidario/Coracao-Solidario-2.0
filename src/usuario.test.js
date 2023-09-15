const Usuario = require('./usuario');
const Receptor = require('./receptor');

test('deve criar um receptor com os dados corretos', () => {
  const receptor = new Receptor('Giovana', 'giovanabruno@email.com', 'Sorocaba', 'Curativo A');
  expect(receptor.Nome).toBe('Giovana');
  expect(receptor.Contato).toBe('giovanabruno@email.com');
  expect(receptor.Tipo).toBe('Receptor');
  expect(receptor.Regiao).toBe('Sorocaba');
  expect(receptor.TipoCurativo).toBe('Curativo A');
});

describe('Testes para a classe Usuario', () => {
  let usuario;

  beforeEach(() => {
    usuario = new Usuario('Alice', 'alice@email.com', 'Receptor', 'São Paulo', 'Curativo A');
  });

  test('getNome retorna o nome correto', () => {
    expect(usuario.Nome).toBe('Alice');
  });

  test('setNome atualiza o nome corretamente', () => {
    usuario.Nome = 'Bob';
    expect(usuario.Nome).toBe('Bob');
  });

  test('getContato retorna o contato correto', () => {
    expect(usuario.Contato).toBe('alice@email.com');
  });

  test('setContato atualiza o contato corretamente', () => {
    usuario.Contato = 'bob@email.com';
    expect(usuario.Contato).toBe('bob@email.com');
  });

  test('getTipo retorna o tipo correto', () => {
    expect(usuario.Tipo).toBe('Receptor');
  });

  test('setTipo atualiza o tipo corretamente', () => {
    usuario.Tipo = 'Doador';
    expect(usuario.Tipo).toBe('Doador');
  });

  test('getRegiao retorna a região correta', () => {
    expect(usuario.Regiao).toBe('São Paulo');
  });

  test('setRegiao atualiza a região corretamente', () => {
    usuario.Regiao = 'Rio de Janeiro';
    expect(usuario.Regiao).toBe('Rio de Janeiro');
  });

  test('getTipoCurativo retorna o tipo de curativo correto', () => {
    expect(usuario.TipoCurativo).toBe('Curativo A');
  });

  test('setTipoCurativo atualiza o tipo de curativo corretamente', () => {
    usuario.TipoCurativo = 'Curativo B';
    expect(usuario.TipoCurativo).toBe('Curativo B');
  });
});

