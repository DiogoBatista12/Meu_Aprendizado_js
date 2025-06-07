function soma(a, b){
    let result = a + b;
    return result;
}

console.log(soma(5, 6));

function podeDirigir(idade, cnh){
    if(idade >= 18 && cnh == true){
        console.log("Pode dirigir");
    }else{
        console.log("Não pode dirigir");
    }
}

podeDirigir(18, true);

let n = 15;

function mostrarN(){
    let n = 25;
    return n;
}

console.log(mostrarN());
console.log(n);