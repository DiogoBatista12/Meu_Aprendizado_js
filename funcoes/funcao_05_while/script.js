let x = 0
while(x == 0){

    console.log("1 - ADICIONAR PESSSOA A LISTA");
    console.log("2 - EXCLUIR PESSOAS DA LISTA");
    console.log("3 - MOSTRAR AS PESSOAS DA LISTA");
    x += 1

let pergunta = prompt("Qual das alternatvas você escolhe? ")    

if(pergunta != 1 && pergunta != 2 && pergunta != 3){
    console.log("Escolha inválida");
    x -=1
} else if( pergunta == 1){
    console.log("Você adicionou a pessoa a lista");
} else if(pergunta == 2){
    console.log("Pessoa excluida com sucesso");
} else if(pergunta == 3){
    console.log("Mostrando as pessoas da lista");
}
}

