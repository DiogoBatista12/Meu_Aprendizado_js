let num = 0;
let num1 = 1;
let num2 = 2;
let num3 = 3;

 // O REST TRANSFORMA TUDO EM ARRAY DENTRO DO PARÂMETRO QUE FOR PASSADO

function imprimir_numeros(...args){
    for(let i = 0; i < args.length; i ++){
        console.log(args[i]);
    }
}

imprimir_numeros(num,num1);
console.log("Pausa");
imprimir_numeros(num2,num3);
console.log("Pausa");
imprimir_numeros(25,6,8,34,7,63,34,1,2213);
