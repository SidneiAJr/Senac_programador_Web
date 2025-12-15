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

const port= 3000
app.listen(port,()=>{
    console.log(`Servidor Rodando em http://localhost${port}`)
})
