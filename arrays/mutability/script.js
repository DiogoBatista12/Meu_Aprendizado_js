let carro1 = {
    portas: 4,
    cor: "vermelho",
    tetoSolar: true
}

let carro2 = carro1;

let carro3 = {
    portas: 4,
    cor: "Azul",
    tetoSolar: false
}

console.log(carro1);
console.log(carro2);
console.log(carro3);

console.log(carro1 == carro2);
console.log(carro3 == carro1);
