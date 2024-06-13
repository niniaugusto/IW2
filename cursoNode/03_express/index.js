const express = require('express')
//instanciar uma variavel
//const pq n pode mudar dps
const app = express()

// '/' rota principal, cria funcao de call back
app.get('/',function(req, res){
    res.send('SEJA BEM-VINDO!! AULAS COM A CHICA MOEDAS')
})

//criou outras rotas
app.get('/blog',function(req, res){
    res.send('PÁGINA BLOG RAPHINHA E DJOLIZ')
})

app.get('/sobre',function(req, res){
    res.send('PÁGINA SOBRE RAPHINHA E DJOLIZ')
})

//rotas dinamicas, recebem parametros 
app.get('/cadastro/:nome/:curso',function(req, res){
    res.send('CADASTRO CONTATOS DA CHICA MOEDAS: ' + req.params.nome + '\nO CURSO DO SER: ' + req.params.curso)//pegando o valor do campo nome
})

//cria o servidor e vai ficar de olho na porta
app.listen(8081, function(){ //no listen n passa req e res
    console.log('Servidor rodando em http://localhost:8081')
}) //tem q ser o ultimo pq prmeio ele le