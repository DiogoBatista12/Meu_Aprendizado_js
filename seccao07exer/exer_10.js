const numerosPares = (a) => {

    let num = a;

    while(a != 0){

        a--;
        if(a % 2 == 0){
            console.log(a);
        }
    }
}

numerosPares(100);