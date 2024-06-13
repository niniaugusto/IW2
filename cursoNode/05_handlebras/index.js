const express = require('express')

const app = express()


app.get('/',function(req, res){
    res.sendFile(__dirname + '/paginas/index.html')
})

app.get('/blog',function(req, res){
    res.send('PÁGINA BLOG RAPHINHA')
})

app.get('/sobre',function(req, res){
    res.sendFile(__dirname + '/paginas/sobre.html')
})


app.get('/cadastro/:nome/:cargo',function(req, res){
    res.send('Nome: ' + req.params.nome + '\nO cargo: ' + req.params.cargo)
})


app.listen(8081, function(){ 
    console.log('Servidor rodando em http://localhost:8081')
})

app.listen(8180)