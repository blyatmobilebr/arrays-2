const numeros = [0, 122, 4, 6, 7, 8, 44]

const resposta = numeros.every(numero => numero % 2 === 0 ? "array válido" : "array inválido");
console.log(resposta)
