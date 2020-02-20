exports.JaveiroEstático = class JaveiroInfiltradoEstático {
  static digaAlgo(text) {
    return text;
  }
};

class JaveiroInfiltradoComEstado {
  constructor() {
    this.frase = 'A grama do vizinho';
  }

  digaAlgo(continuação) {
    return this.frase + ' ' + continuação;
  }
}

exports.javeiroComEstado = new JaveiroInfiltradoComEstado();

class JaveiroInfiltradoParametrizado {
  constructor(frase) {
    this.frase = frase;
  }

  digaAlgo(continuação) {
    return this.frase + ' ' + continuação;
  }
}

exports.JaveiroParametrizado = (args) =>
  new JaveiroInfiltradoParametrizado(args);
