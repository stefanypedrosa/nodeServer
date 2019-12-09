function somavarios(... parametros: number[]):number{
    let result: number = 0;
    for (let i=0; i<parametros.length; i++){
        result += parametros[i];
    }
    return result;
}
console.log("Somando lista = " + somavarios())
console.log("Somando lista = " + somavarios(10))
console.log("Somando lista = " + somavarios(10, 15, 20, 25))
console.log("Somando lista = " + somavarios(10, 11, 12, 13, 14, 15))