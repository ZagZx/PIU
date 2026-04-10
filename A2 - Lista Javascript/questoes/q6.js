// const n = 1;
const n = 0;
// const n = -1;

if (typeof n === "number") {
    if (n > 0) {
        console.log("Positivo");
    } else if (n < 0) {
        console.log("Negativo");
    } else {
        console.log("Zero");
    }
}
else {
    console.log("Valor inválido");
    console.log(`Tipo: ${typeof n}`);
}
