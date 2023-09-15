class Usuario {
    constructor(nome, contato, tipo, regiao, tipoCurativo) {
      this.nome = nome;
      this.contato = contato;
      this.tipo = tipo;
      this.regiao = regiao;
      this.tipoCurativo = tipoCurativo;
    }
  
    get Nome() {
      return this.nome;
    }
  
    set Nome(novoNome) {
      this.nome = novoNome;
    }
  
    get Contato() {
      return this.contato;
    }
  
    set Contato(novoContato) {
      this.contato = novoContato;
    }
  
    get Tipo() {
      return this.tipo;
    }
  
    set Tipo(novoTipo) {
      this.tipo = novoTipo;
    }
  
    get Regiao() {
      return this.regiao;
    }
  
    set Regiao(novaRegiao) {
      this.regiao = novaRegiao;
    }
  
    get TipoCurativo() {
      return this.tipoCurativo;
    }
  
    set TipoCurativo(novoTipoCurativo) {
      this.tipoCurativo = novoTipoCurativo;
    }
  }
  
  module.exports = Usuario;
  