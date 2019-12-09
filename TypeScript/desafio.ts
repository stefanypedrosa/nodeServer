import libInput = require('readline-sync');
let titulo:string = libInput.question("Digite o titulo do produto: ");
let descricao:string = libInput.question("Digite a descricao do produto: ");
console.log(`<html> <head> <title>.: Meu site :.</title> </head> <body> <h1> ${titulo} </h1> <hr/> <p> ${descricao} </p> </body> </html>`);