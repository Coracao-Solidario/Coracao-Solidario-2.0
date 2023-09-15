const Receptor = require('../receptor');
const Doador = require('../doador');
const Curativo = require('../curativo');
const Usuario = require("../usuario");

const receptor1 = new Receptor('Jane', 'tiajane@gmail.com', 'Zona Oeste', 'Curativo z');
const receptor2 = new Receptor('Elvira', 'elvirabrunoleme@gmail.com', 'Zona Norte', 'Curativo Y');
const doador1 = new Doador('AnaLú', 'minhalinda@gmail.com', 'Zona Norte', 'Curativo X');
const doador2 = new Doador('Eurofarma', 'contatodoacao@eurofarma.com.br', 'Zona Norte', 'Curativo Y');
const curativoX = new Curativo('Curativo X');
const curativoY = new Curativo('Curativo Y');

receptor1.solicitarDoacao(curativoX, [doador1, doador2]);
receptor2.solicitarDoacao(curativoY, [doador1, doador2]);
// Crie um novo objeto Usuario
const usuario = new Usuario('Diva', 'donadiva@email.com', 'Receptor', 'Zona Sul', 'Curativo A');

// Use os getters para acessar propriedades
console.log('Nome:', usuario.Nome); // Saída: Nome: Diva
console.log('Contato:', usuario.Contato); // Saída: Contato: donadiva@email.com
console.log('Tipo:', usuario.Tipo); // Saída: Tipo: Receptor
console.log('Região:', usuario.Regiao); // Saída: Região: Zona Sul
console.log('Tipo de Curativo:', usuario.TipoCurativo); // Saída: Tipo de Curativo: Curativo A

// Use os setters para modificar propriedades
usuario.Nome = 'Tia Danuzia';
console.log('Novo Nome:', usuario.Nome); // Saída: Novo Nome: Tia Danuzia
usuario.Contato = 'danuzia@email.com';
console.log('Novo Contato:', usuario.Contato); // Saída: Novo Contato: danuzua@email.com

usuario.Tipo = 'Doador';
console.log('Novo Tipo:', usuario.Tipo); // Saída: Novo Tipo: Doador

usuario.Regiao = 'Zona Leste';
console.log('Nova Região:', usuario.Regiao); // Saída: Nova Região: Zona Leste

usuario.TipoCurativo = 'Curativo B';
console.log('Novo Tipo de Curativo:', usuario.TipoCurativo); // Saída: Novo Tipo de Curativo: Curativo B

