function geraDivs() {
    var parametros = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        parametros[_i] = arguments[_i];
    }
    for (var i = 0; i < parametros.length; i++) {
        console.log("<div id='id" + (i + 1) + "'> " + parametros[i] + " </div>");
    }
}
geraDivs('valorA', 'valorB', 'valorC', 'valorD', 'valorE', 'valorF', 'valorG', 'valorH', 'valorI');
