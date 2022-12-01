const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"]

console.log(palavras.some(compra => compra === "cerveja" || compra === "vodka" ? "revise sua lista, joão. possui bebida com venda proibida!" : "tudo certo, vamos às compras."))