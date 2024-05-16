//SOLICIATAR UM MÓDULO INTERNO DO NODE CHAMADO http
var http = require('http')

//Abrindo um servidor http
http.createServer().listen(8081)

console.log('Servidor rodando...')