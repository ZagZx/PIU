// essa já não é uma função pura?
// - não altera variáveis globais
// - retorna um novo valor
// - mesmo resultado caso o parâmetro não mude

// TODO: Altere a função abaixo para que ela se torne uma função pura.
// Algoritmo de ordenação "Bubble-sort"
function bubbleSort(arr) {
  // Cria uma cópia do array para não modificar o original
  const array = [...arr];
  const n = array.length;
  
  // Loop externo: controla o número de passagens
  for (let i = 0; i < n - 1; i++) {
    let trocou = false; // Flag para otimização
    
    // Loop interno: compara e troca elementos adjacentes
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        // Realiza a troca
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        trocou = true;
      }
    }
    
    // Se nenhuma troca foi feita, o array já está ordenado
    if (!trocou) break;
  }
  
  return array;
}

// Testes (NÃO ALTERE)
// Caso comum
const esperado1 = [11, 12, 22, 25, 34, 64, 90];
const calculado1 = bubbleSort([64, 34, 25, 12, 22, 11, 90])
const teste1 = calculado1.every((v, i) => v === esperado1[i]);
console.assert(teste1, `Caso Array comum: Esperava ${esperado1}, recebeu ${calculado1}`);

// Array já ordenado
const esperado2 = [1, 2, 3, 4, 5];
const calculado2 = bubbleSort([1, 2, 3, 4, 5])
const teste2 = calculado2.every((v, i) => v === esperado2[i]);
console.assert(teste2, `Caso Array ordenado: Esperava ${esperado2}, recebeu ${calculado2}`);

// Array com elementos repetidos
const esperado3 = [1, 2, 3, 3, 3, 7, 7];
const calculado3 = bubbleSort([3, 7, 3, 1, 7, 2, 3])
const teste3 = calculado3.every((v, i) => v === esperado3[i]);
console.assert(teste3, `Caso Array com elementos repetidos: Esperava ${esperado3}, recebeu ${calculado3}`);

// Array vazio
const calculado4 = bubbleSort([])
console.assert(calculado4.length === 0, `Caso Array vazio: Esperava uma lista vazia, recebeu ${calculado4}`);
