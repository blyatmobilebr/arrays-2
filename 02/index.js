const palavras = ["livro", "caneta", "sol", "carro", "orelha"]

function validarArray(array) {
    for (let palavra of palavras) {
        if (palavra.length >= 5) return "existe palavra inválida";
        else { return "array validado"; }
    }
}

console.log(validarArray(palavras))