for( let i = 0; i < 51; i++){
    if(i % 2 == 0){
        console.log(`Esse número é par: ${i}`);
        continue;
    }
    if(i % 2 != 0){
        console.log(`Esse número é ímpar: ${i}`);
        continue;
    }
}