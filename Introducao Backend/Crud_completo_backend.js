/*
E o script do nosso servidor
Nele vamos disctutir as rotas e o que cada uma delas faz
nos tambem vamo nos conectar com nosso banco de dados
*/

const express = require('express')

// Importando a biblioteca do mysql2 que tem funções para se conctar a interagir com meu banco dados
const mysql = require('mysql2')

const app = express()

// Nosso servidor vai nos conectar
app.use(express.json())

const connection = mysql.createConnection({
    host: 'localhost', // Host
    port: 3306, // Porta
    user : 'root', // usuario
    password : 'root', // senha
    database: 'banco_teste' // Nome Banco
})

// Conecta usando as informações que passamos acima
connection.connect()

/*
==================================
============ROTAS=================
// Rotas para criar um usuario
*/
//Inserção de Informação
app.post('/criar',(req,res)=>{
    const {nome,email,senha}=req.body
    const comandobanco = "INSERT INTO usuarios (nome,email,senha) values(?,?,?)"
    // FUnção que me permite executar um comando de banco de dados
    connection.query(comandobanco,[nome,email,senha],(erro)=>{
         if(erro){
          return res.status(500).send("Erro ao adicionar usuario!")
         }
         return res.status(201).send("Usuario Adicionado com sucesso!")
    })
})
// Seleciona tudo do banco
app.get('/ler',(req,res)=>{
    const leitura = "SELECT * FROM banco_teste.usuarios";
     connection.query(leitura,(erro,resultado)=>{
         if(erro){
          return res.status(500).send("Erro | Leitura nâo Realizada")
         }
         res.status(200).json(resultado)

    })
})

// Selecionando Pelo ID & Retorna de um usuario especifico
app.get('/ler/:id',(req,res)=>{
    // Pegue atravez do parametro da requesição
    const {id}= req.params
    const leitura = "SELECT * from usuarios where id = ?";
     connection.query(leitura,[id],(erro,resultado)=>{
         if(erro){
          return res.status(500).send("Erro | Leitura nâo Realizada")
         }
         res.status(200).json(resultado)
    })
})


// Atualiza as informações de usuario:
app.put('/at/:id',(req,res)=>{
    const {id} = req.params
    const {nome,email} = req.body
    const atualizao = "Update usuarios set nome = ?,email = ? where id = ?";
     connection.query(atualizao,[nome,email,id],(erro,resultado)=>{
         if(erro){
          return res.status(500).send("Erro | ao tentar atualizar o usuario")
         }
         res.status(200).send("Usuario Atualizado com sucesso!!!")
    })
})

//rota para deletar
app.delete('/deletar/:id',(req,res)=>{
    const {id} = req.params
    const atualizao = "delete from usuarios where id = ?";
     connection.query(atualizao,[id],(erro,resultado)=>{
         if(erro){
          return res.status(500).send("Erro | ao tentar atualizar o usuario")
         }
         res.status(200).send("Usuario Atualizado com sucesso!!!")
    })
})

const port = 3000
app.listen(port,()=>{
    console.log(`Servidor Rodando localhost:${port}`)
})

