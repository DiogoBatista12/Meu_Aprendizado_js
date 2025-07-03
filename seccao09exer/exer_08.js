let pessoa = {
    "nome": "Diogo",
    "idade": 18,
    "profissao": "programador"
}

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.profissao)

let {nome: vNome, idade: vIdade, profissao: vProfissao} = pessoa;

console.log(vNome);
console.log(vIdade);
console.log(vProfissao);