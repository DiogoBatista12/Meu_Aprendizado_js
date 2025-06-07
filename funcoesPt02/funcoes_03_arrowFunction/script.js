const numeroPar = (a) => {
    if(a % 2 == 0){
        console.log("Número é par");
    } else{
        console.log("Número é ímpar");
    }
}

numeroPar(5);

const multiplicacao = (a, b) => {
    return a * b
}

console.log(multiplicacao(2,9));


const multiplicacaoPor2  = x => x * 2;

/*
console.log(multiplicacaoPor2(3))

function multiplicacaoPor3(x){
    return x * 2;
}

const multiplicacaoPor4 = (x) =>{
    return x * 4;
}*/