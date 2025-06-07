let numeros = [20,45,23,67,19,60];

let par = 0;
let impar = 0;

for(let i = 0; i <= numeros.length; i++){
    if(numeros[i] % 2 == 0){
        console.log("Esse é par");
        par += 1;
    } else{
        console.log("Esse é ímpar");
        impar += 1
    }
}

console.log(`Tiveram ${par} números pares`);
console.log(`Tiveram ${impar} números ímpares`);