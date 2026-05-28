let livros = []

function cadastrarLivro(livro) {
    livros.map(l => {
        if (l.isbn === livro.isbn) {
            throw Error(`Livro ${l.isbn} já está cadastrado`);
        }
    });

    livros.push(livro)
}

function emprestarLivro(isbn) {
    let livroExiste;
    livros.forEach(l => {
        if (l.isbn === isbn) {
            livroExiste = true;
            if (l.status !== "disponível") {
                throw Error(`Livro ${l.isbn} está ${l.status}`);
            }
            l.status = "emprestado";
        }
    });

    if (!livroExiste) {
        throw Error(`Livro ${isbn} não está cadastrado`);
    }
}

function devolverLivro(isbn) {
    let livroExiste;
    livros.map(l => {
        if (l.isbn === isbn) {
            livroExiste = true;
            if (l.status !== "emprestado") {
                throw Error(`Livro ${l.isbn} está ${l.status}`);
            }
            l.status = "disponível";
        }
    });

    if (!livroExiste) {
        throw Error(`Livro ${isbn} não está cadastrado`);
    }
}

cadastrarLivro({
    isbn: 123,
    nome: "Libertação Animal",
    ano: 1975,
    status: "disponível"
})
cadastrarLivro({
    isbn: 234,
    nome: "Coisa de Rico",
    ano: 2024,
    status: "disponível"
})
cadastrarLivro({
    isbn: 345,
    nome: "O Hobbit",
    ano: 1934,
    status: "disponível"
})

try {
    cadastrarLivro({
        isbn: 345,
        nome: "O Alquimista",
        ano: 1988,
        status: "desaparecido"
    })
}
catch (error) {
    console.log("Erro:", error.message);
}
cadastrarLivro({
    isbn: 456,
    nome: "O Alquimista",
    ano: 1988,
    status: "desaparecido"
})
cadastrarLivro({
    isbn: 567,
    nome: "Quarto de Despejo",
    ano: 1964,
    status: "disponível"
})

emprestarLivro(123);
emprestarLivro(234);
devolverLivro(234);
try {
    devolverLivro(234);
    console
}
catch (error) {
    console.log("Erro:", error.message);
}

try {
    emprestarLivro(123);
}
catch (error) {
    console.log("Erro:", error.message);
}

try {
    emprestarLivro(456);
}
catch (error) {
    console.log("Erro:", error.message);
}


console.log(livros)