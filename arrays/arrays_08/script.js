// OBJECT.ASSING => UM OBJETO IRÁ HERDAR TODAS AS CARACTERÍSTICAS DO OUTRO OBJETO;

// OBJECT.KEYS => VAI VER OS VALORES DAQUELA COLEÇÃO

let carro = {
    portas: 4,
    portamalas: "200l",
    motor: 2.0
}

let adicionais = {
    tetoSolar: true,
    arcondicionado: true
}

Object.assign(carro, adicionais);
console.log(carro);

console.log(Object.keys(carro));