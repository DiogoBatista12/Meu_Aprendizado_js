const numeroCaracter = (a) => {

    let medir = a.length;

    if(medir > 10){
        console.log("Texto muito longo");
    } else {
        console.log("Texto dentro do limite");
    }
}

numeroCaracter("Pindamoinhagaba");
numeroCaracter("Diogo");
numeroCaracter("abcdefghij");