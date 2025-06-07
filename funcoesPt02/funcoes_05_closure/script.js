function somarNumeros(x){
    return function(y){
        return x + y;
    }
}

let soma1 = somarNumeros(5);
console.log(soma1(4));