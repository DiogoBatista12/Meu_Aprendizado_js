let pessoa = {
  nome: "Diogo",
  idade: 18,
  altura: 1.65,
  peso: 73,
  profissao: "Programador",
};

let pessoa2 = {
  nome: "Diogo",
  idade: 28,
  profissao: "Programador",
};

let pessoa3 = {
  nome: "Diogo",
  idade: 18,
  profissao: "Programador",
};

console.log(pessoa);
delete pessoa.idade;
console.log(pessoa);
pessoa.casado = false;
console.log(pessoa);