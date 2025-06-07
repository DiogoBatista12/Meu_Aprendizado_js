function verificarDado(dado){
    if(typeof dado == "number"){
        return console.log("Esse dado é do tipo Number");
    } else if(typeof dado == "string"){
        return console.log("Essse dado é do tipo String");
    } else if(typeof dado == "boolean"){
        return console.log("Esse dado é do tipo Boolean");
    }
}

verificarDado(true);