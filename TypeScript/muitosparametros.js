function somavarios() {
    var parametros = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        parametros[_i] = arguments[_i];
    }
    var result = 0;
    for (var i = 0; i < parametros.length; i++) {
        result += parametros[i];
    }
    return result;
}
console.log("Somando lista = " + somavarios());
console.log("Somando lista = " + somavarios(10));
console.log("Somando lista = " + somavarios(10, 15, 20, 25));
console.log("Somando lista = " + somavarios(10, 11, 12, 13, 14, 15));
