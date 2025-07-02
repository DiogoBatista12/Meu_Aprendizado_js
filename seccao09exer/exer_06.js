const verificar = (a) => {
    if(a.length >= 5){
        console.log("Muitos elementos");
    }else{
        console.log("Poucos elementos");
    }
}

let num = [1,2,3,4,5,6,7];
let nums = [1,2,3,4];

verificar(num);
verificar(nums);

