function digaAlgo(text) {
  return text;
}

exports.JaveiroEstático = JaveiroEstático = {
  digaAlgo,
};

const frase = 'A grama do vizinho';
exports.javeiroComEstado = {
  digaAlgo: (text) => frase + ' ' + text,
};

exports.JaveiroParametrizado = function(frase) {
  return {
    digaAlgo: (text) => frase + ' ' + text,
  };
};
