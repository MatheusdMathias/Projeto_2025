// calculadora.test.js

const calc = require('./calculadora');

test('soma 2 + 3 = 5', () => {
  expect(calc.somar(2, 3)).toBe(5);
});

test('subtração 5 - 3 = 2', () => {
  expect(calc.subtrair(5, 3)).toBe(2);
});

test('multiplicação 4 * 5 = 20', () => {
  expect(calc.multiplicar(4, 5)).toBe(20);
});

test('divisão 10 / 2 = 5', () => {
  expect(calc.dividir(10, 2)).toBe(5);
});

test('divisão por zero gera erro', () => {
  expect(() => calc.dividir(10, 0)).toThrow('Divisão por zero');
});

test('potencia 2^3 = 8', () => {
  expect(calc.potencia(2, 3)).toBe(8);
});

test('raiz quadrada de 9 = 3', () => {
  expect(calc.raizQuadrada(9)).toBe(3);
});

test('raiz quadrada de número negativo gera erro', () => {
  expect(() => calc.raizQuadrada(-1)).toThrow('Raiz quadrada de número negativo');
});

test('logaritmo de 1000 = 3', () => {
  expect(calc.logaritmo(1000)).toBe(3);
});

test('logaritmo de número <= 0 gera erro', () => {
  expect(() => calc.logaritmo(0)).toThrow('Logaritmo de número inválido');
  expect(() => calc.logaritmo(-10)).toThrow('Logaritmo de número inválido');
});

test('seno de 30 graus ≈ 0.5', () => {
  expect(calc.seno(30)).toBeCloseTo(0.5, 5);
});

test('cosseno de 60 graus ≈ 0.5', () => {
  expect(calc.cosseno(60)).toBeCloseTo(0.5, 5);
});

test('tangente de 45 graus ≈ 1', () => {
  expect(calc.tangente(45)).toBeCloseTo(1, 5);
});
