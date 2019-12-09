"use strict";
exports.__esModule = true;
var libInput = require("readline-sync");
var titulo = libInput.question("Digite o titulo do produto: ");
var descricao = libInput.question("Digite a descricao do produto: ");
console.log("<html> <head> <title>.: Meu site :.</title> </head> <body> <h1> " + titulo + " </h1> <hr/> <p> " + descricao + " </p> </body> </html>");
