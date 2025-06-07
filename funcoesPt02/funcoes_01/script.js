function escrevendoTexto(){
    console.log("Hellow WORLD")
}

escrevendoTexto();

// PRIMEIRA MANEIRA DE DECLARAR UMA FUNÇÃO;


const textoNoConsole = function(){
    console.log("Outra maneira de criar uma função");
}

textoNoConsole();

// SEGUNDA MANEIRA DE CRIAR UMA FUNÇÃO;

const porParametro = function(texto){
    console.log(texto);
}

porParametro("Terceira forma de instanciar uma função");

/* TERCEIRA FORMA DE CRIAR UMA FUNÇÃO, O PARÁMETRO PODE SER USADO NAS OUTRAS
DUAS FORMAS*/

