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
    database: 'meu_banco' // Nome Banco
})

// Conecta usando as informações que passamos acima
connection.connect()


