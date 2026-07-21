// essa já não é uma função pura?
// - não altera variáveis globais
// - retorna um novo valor
// - mesmo resultado caso o parâmetro não mude

// TODO: Altere a função abaixo para que ela se torne uma função pura.
// Retorna um array com os n primeiros termos da sequência de Fibonacci.
function fibonacciSequencia(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  
  const sequencia = [0, 1];
  
  for (let i = 2; i < n; i++) {
    sequencia.push(sequencia[i - 1] + sequencia[i - 2]);
  }
  
  return sequencia;
}

// Testes (NÃO ALTERE)
const calculado = fibonacciSequencia(8)
const esperado = [ 0, 1, 1, 2, 3, 5, 8, 13 ]
const iguais = calculado.every((val, index) => val === esperado[index]);
console.assert(iguais, `Esperava ${esperado}, recebeu ${calculado}`);
