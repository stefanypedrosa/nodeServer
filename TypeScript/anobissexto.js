"use strict";
exports.__esModule = true;
function anobissexto(ano) {
    if (ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0) {
        console.log(ano + " \u00E9 bissexto");
    }
    else {
        console.log(ano + " n\u00E3o \u00E9 bissexto");
    }
}
var libInput = require("readline-sync");
var ano = libInput.question("Digite um ano aleatorio: ");
anobissexto(parseInt(ano));
