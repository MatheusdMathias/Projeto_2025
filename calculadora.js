// calculadora.js

function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) throw new Error('Divisão por zero');
  return a / b;
}

function potencia(a, b) {
  return Math.pow(a, b);
}

function raizQuadrada(a) {
  if (a < 0) throw new Error('Raiz quadrada de número negativo');
  return Math.sqrt(a);
}

function logaritmo(a) {
  if (a <= 0) throw new Error('Logaritmo de número inválido');
  return Math.log10(a);
}

function seno(a) {
  return Math.sin(a * Math.PI / 180);
}

function cosseno(a) {
  return Math.cos(a * Math.PI / 180);
}

function tangente(a) {
  return Math.tan(a * Math.PI / 180);
}

module.exports = {
  somar,
  subtrair,
  multiplicar,
  dividir,
  potencia,
  raizQuadrada,
  logaritmo,
  seno,
  cosseno,
  tangente,
};
