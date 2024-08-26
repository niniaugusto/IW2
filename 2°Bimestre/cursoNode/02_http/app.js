// arquivo principal (app.js)
//solicitar um modulo interno no NODE chamado http
var http = require('http')

//abrindo um servidor http
http.createServer(function(req,res){
    res.end("Hello ETEC MCM E O TI HAHA E O TI HAHAHA")
}).listen(8081)

console.log('servidor rodando...')