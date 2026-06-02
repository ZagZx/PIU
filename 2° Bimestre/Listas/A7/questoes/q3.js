async function esperar(ms) {
    console.log(`Esperando ${ms}ms...`);
    
    return new Promise((resolve) => setTimeout(() => resolve("Terminou"), ms));
}

let resultado = await esperar(2000);
console.log(resultado);


// SEM AWAIT
// Esperando 2000ms...
// Promise { <pending> }

// COM AWAIT
// Esperando 2000ms...
// Terminou