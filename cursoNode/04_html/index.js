const express = require('express')
//instanciar uma variavel teste**
//const pq n pode mudar dps
const app = express()

// '/' rota principal, cria funcao de call back
app.get('/',function(req, res){
    res.sendFile(__dirname + '/paginas/index.html')
})

//criou outras rotas
app.get('/blog',function(req, res){
    res.send('PÁGINA BLOG RAPHINHA')
})

app.get('/sobre',function(req, res){
    res.sendFile(__dirname + '/paginas/sobre.html')
})

//rotas dinamicas, recebem parametros 
app.get('/cadastro/:nome/:cargo',function(req, res){
    res.send('Nome: ' + req.params.nome + '\nO cargo: ' + req.params.cargo)//pegando o valor do campo nome
})

//cria o servidor e vai ficar de olho na porta
app.listen(8081, function(){ //no listen n passa req e res
    console.log('Servidor rodando em http://localhost:8081')
}) //tem q ser o ultimo pq prmeio ele le