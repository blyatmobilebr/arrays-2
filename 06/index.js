const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
];

console.log(cidades.filter(cidade => cidade.length <= 8).join(", "));