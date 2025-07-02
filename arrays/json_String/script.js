let pessoa = {
    "nome": "Diogo",
    "idade": 18,
    "hobbie": ["Jogar", "Academia", "Correr"],
    "profissao": "Estudante"
}

let pessoaString = JSON.stringify(pessoa);
console.log(pessoaString);

// console.log(pessoaString.nome)

let pessoaJSON = JSON.parse(pessoaString);
console.log(pessoaJSON);
console.log(pessoaJSON.hobbie[2])
