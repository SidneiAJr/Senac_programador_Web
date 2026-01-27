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
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE
});

const {DB_HOST,DB_DATABASE,DB_PORT,DB_USER,DB_PASSWORD} = process.env;

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







