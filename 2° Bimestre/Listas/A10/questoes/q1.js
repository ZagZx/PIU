function map(lista, funcMap) { 
   const nova = Array(lista.length) 
   for (let i=0; i < lista.length; i++) 
       nova[i] = funcMap(lista[i], i) 
   return nova 
}