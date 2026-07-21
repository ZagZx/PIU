function find(lista, funcFind) { 
  let result

  for (let i=0; i < lista.length; i++) {
    if (funcFind(lista[i], i)) {
      result = lista[i]
      break
    }
  }

  return result
}

// teste find do mdn
const array1 = [5, 12, 8, 130, 44];

const found = find(array1, (element) => element > 10);

console.log(found);
// Expected output: 12

// testes find chatgpt
const alunos = [
    { nome: "Ana", nota: 8 },
    { nome: "João", nota: 6 },
    { nome: "Maria", nota: 9 }
];

const aluno = alunos.find(a => a.nome === "João");

console.log(aluno);
// {
//     nome: "João",
//     nota: 6
// }


const numeros = [2, 4, 6];

const resultado = numeros.find(n => n > 10);

console.log(resultado);
// undefined