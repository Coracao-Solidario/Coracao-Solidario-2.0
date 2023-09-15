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

