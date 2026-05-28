const numbers = [0, 1, 2, 3, 4, 5, 6];

let odd = 0;
let even = 0;
for (n of numbers) {
    if (n%2 == 0) {
        even += 1;
    } else {
        odd += 1;
    }
}

console.log(`Pares: ${even}`);
console.log(`Ímpares: ${odd}`);