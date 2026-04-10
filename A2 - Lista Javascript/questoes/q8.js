
function oddEvenQuantity(numbers) {
    let quantities = {
        odd: 0,
        even: 0
    }

    for (n of numbers) {
        if (!Number.isInteger(n)) {
            throw new Error(`O valor "${n}" não é inteiro`)
        }

        if (n%2 == 0) {
            quantities.even += 1;
        } else {
            quantities.odd += 1;
        }
    }

    return quantities;
}

console.log(oddEvenQuantity([0, 1, 2, 3, 4, 5, 6]));
console.log(oddEvenQuantity([0, 1, "a", 3, 4, 5, 6]));

