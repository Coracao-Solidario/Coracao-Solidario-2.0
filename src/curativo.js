class Curativo {
    constructor(tipo, quantidadeDisponivel) {
      this.tipo = tipo;
      this.quantidadeDisponivel = quantidadeDisponivel;
    }
  
    doarPara(receptor) {
      if (this.quantidadeDisponivel > 0) {
        this.quantidadeDisponivel--;
        receptor.receberCurativo(this);
      } else {
        console.log(`Não há mais curativos do tipo ${this.tipo} disponíveis para doação.`);
      }
    }
  }
  
  module.exports = Curativo;
  