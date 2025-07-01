let carro = {
    portas: 4,
    rodas: 4,
    tetoSolar: false,
    motor: 2.0
}

// O DESTRUCTURING PERMITE A GENTE CRIAR VARIAVEIS A PARTIR DO OBJETO, FACILITANDO NA HORA QUE A GENTE FOR CHAMAR

const {portas: vPortas, rodas: vRodas, tetoSolar: vTetoSolar, motor: vMotor} = carro;

console.log(`O motor é ${vMotor}.0`);
console.log(vTetoSolar);