const n = 1;
// const n = false;
// const n = "a";

try {
    if (!Number.isInteger(n)) {
        throw new Error("O valor não é inteiro")
    }

    console.log(n*1);
    console.log(n*2);
    console.log(n*3);
    console.log(n*4);
    console.log(n*5);
    console.log(n*6);
    console.log(n*7);
    console.log(n*8);
    console.log(n*9);
} catch (error) {
    console.log(error)
}