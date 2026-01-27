// Imports de Libs | JS
const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')
const dot = require('dotenv')
const bodyParser = require('body-parser')

//Iniciando express
const app = express();

app.use(express.json());
app.use(cors());

dot.config();
const {DB_HOST,DB_DATABASE,DB_PORT,DB_USER,DB_PASSWORD} = process.env;

// Conexção Banco
const connection = mysql.createConnection({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE
});

connection.connect(error=>{
    if(error){
     console.error('Erro ao Conectar!'+error.stack);
    return;
    }
    console.log("Sucesso ao Conectar")
});

app.get('/users',(req,res)=>{
   const consulta = `select * from usuarios`;
   connection.query(consulta,(erro,resultados)=>{
   if(erro){
    return res.status(500).set("Erro ao Selecionar dados");
   }
   return res.status(200).json(resultados);
   })
})

app.get('/users/:id',(req,res)=>{
    const id_usuario = parseInt(req.params.id);
    const consulta_id = 'select * from usuarios where id_usuario = ?'
    connection.query(consulta_id,[id_usuario],(erro,resultado)=>{
        if(erro){
          return res.status(500).set("Erro ao Selecionar dados");  
        }
        return res.status(200).json(resultado[0]);
    })
})

app.get('/Lista',(req,res)=>{
   const consulta_lista = `select count (*) from usuarios`;
   connection.query(consulta_lista,(erro,resultados)=>{
    if(erro){
        return res.status(500).set("Erro ao listar usuarios");
    }
    return res.status(200).json(resultados);
   })
})

app.post('/Insert',(req,res)=>{
    const {nome_usuario,idade_usuario,email_usuario,senha} = req.body;
    const inserir_banco = `insert into usuarios(nome_usuario,idade_usuario,email_usuario,senha)values(?,?,?,?)`;
    connection.query(inserir_banco,[nome_usuario,idade_usuario,email_usuario,senha],(erro)=>{
        if(erro){
            return res.status(500).send("Erro ao Adicionar Usuario!");
        }
        return res.status(201).send("Sucesso ao Adicionar Usuario");
    })
})

app.delete('/deletar/:id',(req,res)=>{
    const id_usuario = parseInt(req.params.id);
    const deletar = `delete from usuarios where id_usuario =?`
    connection.query(deletar,[id_usuario],(erro)=>{
        if(erro){
            console.error('Erro ao deletar:', erro);  // Log do erro
            return res.status(500).send("Erro ao Apagar Usuario!");
        }
        return res.status(200).send("Sucesso ao Deletar Usuario!");
    })
})




const port = 3000;
app.listen(port,()=>{
    console.log(`Servidor Rodando em http://localhost:${port}`)
});






