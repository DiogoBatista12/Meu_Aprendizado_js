let pessoa = {
    nome: "Diogo",
    idade: 18,
    profissao: "Programador",
    programar: function(){
        return ("HELLOW WORLD");
    }
}

console.log(`Eu me chamo ${pessoa.nome}, tenho ${pessoa.idade} anos e trabalho sendo ${pessoa.profissao} e esse foi minha primeira saída:  ${pessoa.programar()}`);

// ARRAY => [];
// OBJECT => {};

let familia = {
    pai: "Casemiro",
    mae: "Daniela",
    irmaoVelho: "Everton",
    irmaoMeio: "Caio",
    irmaoNovo: "Junior"
}

console.log(`Esse é meu pai: ${familia.pai}`);
console.log(`Essa é minha mãe: ${familia.mae}`);
console.log(`Esse é meu irmão mais velho: ${familia.irmaoVelho}`);
console.log(`Esse é meu irmão do meio: ${familia.irmaoMeio}`);
console.log(`Esse sou eu: ${familia.irmaoNovo}`);