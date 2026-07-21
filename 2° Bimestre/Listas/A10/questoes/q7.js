// essa já não é uma função pura?
// - não altera variáveis globais
// - retorna um novo valor
// - mesmo resultado caso o parâmetro não mude

// TODO: Altere a função abaixo para que ela se torne uma função pura.
// Calcula a sequência de Fibonacci de maneira iterativa.
function fibonacci(n) {
  // Casos base
  if (n === 0) return 0;
  if (n === 1) return 1;
  
  // Variáveis para armazenar os dois últimos valores
  let anterior = 0;
  let atual = 1;
  
  // Loop iterativo para calcular até o n-ésimo número
  for (let i = 2; i <= n; i++) {
    let proximo = anterior + atual;
    anterior = atual;
    atual = proximo;
  }
  
  return atual;
}

// Testes (NÃO ALTERE)
fib0 = fibonacci(0)
console.assert(fib0 === 0, `Esperava f(0) = 0, recebeu ${fib0}`);
fib5 = fibonacci(5)
console.assert(fib5 === 5, `Esperava f(5) = 5, recebeu ${fib5}`);
fib10 = fibonacci(10)
console.assert(fib10 === 55, `Esperava f(10) = 55, recebeu ${fib10}`);
fib15 = fibonacci(15)
console.assert(fib15 === 610, `Esperava f(15) = 610, recebeu ${fib15}`);