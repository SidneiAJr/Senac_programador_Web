const express = require('express')
const cors = require('cors')
const mysql = require('mysql2')

const app = express()

app.use(express.json())
app.use(cors())

const connection = mysql.createConnection({
   host: 'localhost',   // Onde está o banco (máquina local)
    port: 3306,          // Porta padrão do MySQL
    user: 'root',        // Usuário do banco
    password: 'root',    // Senha do banco
    database: 'pokedex' // Nome do banco
})

connection.connect()

app.post('/Inserir',(req,res)=>{
   const {nome_pokemon,tipo_pokemon,tem_evolucao} = req.body
   const comandoBanco = `INSERT INTO pokemons(nome_pokemon,tipo_pokemon,tem_evolucao)VALUES(?,?,?)`
   connection.query(comandoBanco,[nome_pokemon,tipo_pokemon,tem_evolucao],(erro)=>{
   if(erro){
    return res.status(500).send("Erro ao Adicionar Usuario ao Banco!")
   } return res.status(201).send("Sucesso ao Adicionar Usuario ao Banco!")
   })
})

app.delete('/Deletar',(req,res)=>{
   const {id} = req.params
   const comandoBanco = `delete from pokemons(id)VALUES(?)`
   connection.query(comandoBanco,[deletar,[id]],(erro)=>{
   if(erro){
    return res.status(500).send("Erro ao Deletar Pokemon ao Banco!")
   } return res.status(200).send("Sucesso ao Adicionar Pokemon ao Banco!")
   })
})

app.get('/Listar',(req,res)=>{
   const comandoBanco = `Select * from usuarios`
   connection.query(comandoBanco,(erro)=>{
   if(erro){
    return res.status(500).send("Erro ao Listar!")
   } return res.status(200).send("Listado com Sucesso!")
   })
})

app.get('/Listar/:id',(req,res)=>{
   const {id} = req.params
   const leitura = "Select * from usuarios where id =?"
   connection.query(leitura,[id],(erro,resultado)=>{
    if(erro){
         return res.status(500).send("Erro ao Listar!")
    }return res.status(200).send("Listado com Sucesso!")
   })
})



const port= 3000
app.listen(port,()=>{
    console.log(`Servidor Rodando em http://localhost:${port}`)
})


