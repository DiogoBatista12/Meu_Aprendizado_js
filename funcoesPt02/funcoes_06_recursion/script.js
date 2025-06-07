function recursando(n){
    if(n -1  < 2){
        console.log("Recursão parou");
    }else if (n % 2 != 0){
        console.log("Número ímpar");
        recursando(n-1); 
    }else{
        console.log("Número par");
        recursando(n - 2);
    }
}

recursando(63);