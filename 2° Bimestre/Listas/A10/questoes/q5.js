function forEach(lista, funcForEach) { 
   for (let i=0; i < lista.length; i++) 
       funcForEach(lista[i], i) 
}

// testes forEach mdn
const array1 = ["a", "b", "c"];

forEach(array1, (element) => console.log(element));

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

function logArrayElements(element, index, array) {
  console.log("a[" + index + "] = " + element);
}
forEach([2, 5, 9], logArrayElements);
// logs:
// a[0] = 2
// a[1] = 5
// a[2] = 9