let onibus = {
    rodas: 8,
    limitePassageiros: 40,
    portas: 2,
}

let janelas = {
    janealas: 20
}

 // OUTRA FORMA MAIS FÁCIL DE FAZER onibus.janelas = 20

Object.assign(onibus, janelas);
delete onibus.rodas;

console.log(onibus);  

// FIZ DE OUTRA FORMA TAMBÉM PARA TREINAR OS CONCEITOS
console.log(Object.keys(onibus));
console.log(Object.values(onibus));