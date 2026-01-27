// Imports de Libs | JS
const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')
const Body = require('body-parser')
const dot = require('dotenv')
const bodyParser = require('body-parser')

//Iniciando express
const app = express();
app.express(bodyParser.json());
app.use(cors());

// Conexção Banco
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'banco_trabalho'
});

dot.config();

connection.connect(error=>{
    if(error){
     console.error('Erro ao Conectar!'+error.stack);
    return;
    }
    console.log("Sucesso ao Conectar")
});

app.post({});
app.get({});
app.put({});
app.delete({});
app.get({});







