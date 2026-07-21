function reduce(lista, funcReduce, valorInicial) { 
  let acc 
	let inicio

	if (valorInicial !== undefined) {
		acc = valorInicial
		inicio = 0;
	} else {
		acc = lista[0]
		inicio = 1
	}

  for (let i=inicio; i < lista.length; i++) {
    acc = funcReduce(acc, lista[i])
  }

  return acc 
}

// teste do mdn para reduce
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = reduce(
	array1,
	(accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10

// teste do chatgpt para reduce
const palavras = ["Olá", "mundo", "!"];

const frase = reduce(palavras, (acc, palavra) => {
    return acc + " " + palavra;
});

console.log(frase);