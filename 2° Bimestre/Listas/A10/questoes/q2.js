function filter(lista, funcFilter) { 
  const nova = []
  for (let i=0; i < lista.length; i++) {
    if (funcFilter(lista[i], i)) {
      nova.push(lista[i])
    }
  }

  return nova 
}

// teste do mdn para filter
const words = ["spray", "elite", "exuberant", "destruction", "present"];
const result = filter(words, (word) => word.length > 6);
console.log(result);