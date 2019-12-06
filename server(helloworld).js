var express = require("express");
var server = express();
server.get("/hello", function(req, res){
    res.send("Hello world");
    req.send("browser acessou o caminho /hello")
    Response.send("hello")
})
server.listen(3000, function(){
    console.log("Servidor rodando na porta 3000")
});