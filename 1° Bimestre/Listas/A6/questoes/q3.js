function esperar(ms) {
    console.log(`Esperando ${ms}ms...`);
    return new Promise((resolve) => setTimeout(() => resolve("Terminou"), ms));
}

esperar(2000).then((result) => {
    console.log(result);
});

console.log("Oi")

// Esperando 2000ms...
// Oi
// Terminou