const Doador = require('./doador');
const Usuario = require('./usuario');

describe('Doador', () => {
  // Teste para o construtor e método doar
  test('deve criar um doador com os valores corretos e doar um curativo', () => {
    const doador = new Doador('Giovana', 'giovanabruno@email.com', 'Sorocaba', 'Curativo A');
    const receptor = new Usuario('Henriqueta', 'henriqueta@email.com', 'Receptor', 'Sorocaba', 'Curativo A');
    
    // Chama o método doar
    const resultado = doador.doar({ tipo: 'Curativo A' }, receptor);

    // Como o método doar não retorna nada, você pode verificar se o resultado é undefined
    expect(resultado).toBeUndefined();
  });
});
