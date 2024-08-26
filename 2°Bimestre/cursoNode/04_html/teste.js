//chamando o sequelize
const Sequelize = require('sequelize')
//parametro nome do banco, usuario, senha, dicionario com 2 parametros
const sequelize = new Sequelize('test', 'root', '', {
    //onde esta o banco
    host:'localhost', 
    //falar com qual sgbd
    dialect: 'mysql'
})

// sequelize.authenticate().then(function(){
//     console.log('conectado com o sucesso')
// }).catch(function(erro){
//     console.log('houve o seguinte erro:' + erro)
// })

//criando a tabela parametros: nome da tabela e campos
const Postagem = sequelize.define('postagens', {
    titulo:{
        type: Sequelize.STRING
    },
    conteudo:{
        type: Sequelize.TEXT
    }
})

const Usuario = sequelize.define('usuarios', {
    nome:{
        type: Sequelize.STRING
    },
    sobrenome:{
        type:Sequelize.STRING
    },
    idade:{
        type: Sequelize.INTEGER
    },
    email:{
        type: Sequelize.STRING
    }
})

//Postagem.sync(force = true)
//Usuario.sync(force = true)

// Postagem.create({
//     titulo:'Primeira postagem',
//     conteudo:'conteudo da primeira postagem ...'
// })

// Usuario.create({
//     nome:'Rappha',
//     sobrenome: 'Luvi',
//     idade: 16,
//     email: 'raphaluvi@gmail.com'
// })