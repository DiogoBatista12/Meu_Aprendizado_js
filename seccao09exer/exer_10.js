const calculadora = {
    soma: function(a,b){
        return a + b;
    },
    sub: function(a,b){
        return a - b;
    },
    mult: function(a,b){
        return a * b;  
    },
    div: function(a,b){
        if(a <= 0){
            console.log("Não se pode dividir por zero");
        }else{
            return a / b;
        }
    } 
}

console.log(calculadora.soma(3,8));
console.log(calculadora.sub(10,7));
console.log(calculadora.mult(5,5));
console.log(calculadora.div(10,2));