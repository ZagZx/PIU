async function cinco() {
    return 5;
}

let final = cinco().then(
    (value) => value * 2 
).then(
    (value) => value * 3
);

console.log(final);