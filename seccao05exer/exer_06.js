let idade = 17;
let cnh = false;

if(idade >= 18 && cnh == false){
    console.log("Você é de maior, mas não possui CNH")
} else if(idade >= 18 && cnh == true){
    console.log("Você pode dirigir, pois tem idade e CNH");
}else if(idade < 18 && cnh == true){
    console.log("Você não tem nem idade, mas possui CNH");
} else{
    console.log("Você não tem idade, nem CNH");
}