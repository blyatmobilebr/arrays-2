const pessoas = [
    {
      nome: "Antonio",
      idade: 30,
      profissao: "Jornalista",
    },
    {
      nome: "Maria",
      idade: 30,
      profissao: "Jornalista",
    },
    {
      nome: "Ana",
      idade: 21,
      profissao: "Programador",
    },
    {
      nome: "Beatriz",
      idade: 20,
      profissao: "Programador",
    },
    {
      nome: "José",
      idade: 32,
      profissao: "Jornalista",
    },
    {
      nome: "Marcos",
      idade: 30,
      profissao: "Programador",
    },
];

pessoas.forEach(pessoa => {
    if (pessoa.idade > 20 && pessoa.profissao === "Programador") console.log(pessoa);
})

pessoas.forEach(pessoa => {
    if (pessoa.idade > 30 && pessoa.profissao === "Jornalista") console.log(pessoa);
})

pessoas.forEach(pessoa => {
    if (pessoa.idade <= 29 && pessoa.profissao === "Programador" || pessoa.profissao === "Jornalista") console.log(pessoa);
})