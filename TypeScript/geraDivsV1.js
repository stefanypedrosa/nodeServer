function geraDivs() {
    var parametros = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        parametros[_i] = arguments[_i];
    }
    var result = "";
    for (var i = 0; i < parametros.length; i++) {
        result += "<div id='id" + (i + 1) + "'</div> " + parametros[i] + " </div>\n";
    }
    return result;
}
console.log(geraDivs('valorA', 'valorB', 'valorC', 'valorD', 'valorE', 'valorF', 'valorG', 'valorH', 'valorI'));
