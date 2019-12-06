var express = require("express");
var server = express();
var cors = require("cors");
server.use(cors());
var lista = [
                {
                    "id":1,
                    "nome": "stefany", 
                    "email":"stefany@pedrosa.com", 
                    "nota": 10, 
                    "salario":5000
                }, 
                {
                    "id":2, 
                    "nome": "lucas", 
                    "email":"lucas@augusto.com", 
                    "nota": 9, 
                    "salario":5000
                },
                {
                    "id":3, 
                    "nome": "maria", 
                    "email":"maria@penha.com", 
                    "nota": 8, 
                    "salario":3000
                }, 
                {
                    "id":4, 
                    "nome": "ronaldo", 
                    "email":"ronaldo@pedrosa.com", 
                    "nota": 7, 
                    "salario":4000
                }
            ];
server.get("/lista", function(req, res){
    console.log("browser acessou o caminho /teste");
    res.json(lista);
});

server.get("/lista/:id", function(req, res){
    var id = req.params.id;
    if(id<1 || id>4){
        res.json({"resultado":"não encontrado"});
    }
    else{
        res.json(lista[id-1]);
    }
});

server.listen(3000, function(){
    console.log("Servidor rodando na porta 3000")
});