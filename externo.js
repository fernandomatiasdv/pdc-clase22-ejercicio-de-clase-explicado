// Creamos la función mostrarNumeros. No lleva parámetros 
function mostrarNumeros(){
    let retorno = "";
    // Recorro las 10 posiciones y vuelco el resultado de
    for(let i=0 ; i < 10; i++){
        // cada vuelta en la variable "retorno"
        retorno = retorno + "Numero : "+ i+ "\n";
    }
    // Cuando finalizaron las vueltas devuelvo "retorno"
    return retorno;
}

module.exports = {mostrarNumeros};
