// Importação das bibliotecas necessárias
const express = require('express'); // Framework para criar o servidor
const mysql = require('mysql2'); // Biblioteca para se conectar ao MySQL
const cors = require('cors'); // Middleware para permitir requisições de origens diferentes
const dot = require('dotenv'); // Biblioteca para ler variáveis de ambiente
const bodyParser = require('body-parser'); // Middleware para ler o corpo da requisição

// Iniciando o Express (servidor web)
const app = express();

// Usando middleware para ler o corpo da requisição no formato JSON
app.use(express.json());
// Usando CORS para permitir requisições de diferentes origens
app.use(cors());

// Carregar as variáveis de ambiente do arquivo .env
dot.config();
// Desestruturando as variáveis de ambiente do arquivo .env
const { DB_HOST, DB_DATABASE, DB_PORT, DB_USER, DB_PASSWORD } = process.env;

// Configuração de conexão com o banco de dados MySQL
const connection = mysql.createConnection({
    host: DB_HOST,  // Host do banco de dados
    port: DB_PORT,  // Porta do banco de dados
    user: DB_USER,  // Usuário para conectar ao banco
    password: DB_PASSWORD,  // Senha do usuário do banco
    database: DB_DATABASE  // Banco de dados a ser utilizado
});

// Tentando conectar ao banco de dados MySQL
connection.connect(error => {
    if (error) {
        // Caso haja erro na conexão, loga o erro no console
        console.error('Erro ao Conectar! ' + error.stack);
        return;
    }
    // Caso a conexão seja bem-sucedida
    console.log("Sucesso ao Conectar ao Banco de Dados!");
});

// Rota para pegar todos os usuários
app.get('/users', (req, res) => {
    const consulta = `SELECT * FROM usuarios`;  // Query SQL para selecionar todos os usuários
    connection.query(consulta, (erro, resultados) => {  // Executando a query
        if (erro) {
            // Caso haja erro, responde com código 500 e a mensagem de erro
            return res.status(500).send("Erro ao Selecionar dados");
        }
        // Caso não haja erro, retorna os resultados (todos os usuários) no formato JSON
        return res.status(200).json(resultados);
    });
});

// Rota para pegar um usuário específico pelo ID
app.get('/users/:id', (req, res) => {
    const id_usuario = parseInt(req.params.id);  // Pegando o ID do usuário da URL
    const consulta_id = 'SELECT * FROM usuarios WHERE id_usuario = ?';  // Query para pegar um usuário específico
    connection.query(consulta_id, [id_usuario], (erro, resultado) => {  // Executando a query
        if (erro) {
            // Caso haja erro, responde com código 500 e a mensagem de erro
            return res.status(500).send("Erro ao Selecionar dados");
        }
        // Caso encontre o usuário, retorna o primeiro resultado
        return res.status(200).json(resultado[0]);
    });
});

// Rota para pegar a quantidade total de usuários
app.get('/Lista', (req, res) => {
    const consulta_lista = `SELECT COUNT(*) FROM usuarios`;  // Query para contar o número de usuários
    connection.query(consulta_lista, (erro, resultados) => {  // Executando a query
        if (erro) {
            // Caso haja erro, responde com código 500 e a mensagem de erro
            return res.status(500).send("Erro ao listar usuarios");
        }
        // Retorna o número total de usuários
        return res.status(200).json(resultados);
    });
});

// Rota para adicionar um novo usuário ao banco
app.post('/Insert', (req, res) => {
    // Desestruturando os dados do corpo da requisição
    const { nome_usuario, idade_usuario, email_usuario, senha } = req.body;
    // Query para inserir um novo usuário
    const inserir_banco = `INSERT INTO usuarios (nome_usuario, idade_usuario, email_usuario, senha) VALUES (?, ?, ?, ?)`;
    connection.query(inserir_banco, [nome_usuario, idade_usuario, email_usuario, senha], (erro) => {  // Executando a query
        if (erro) {
            // Caso haja erro, responde com código 500 e a mensagem de erro
            return res.status(500).send("Erro ao Adicionar Usuario!");
        }
        // Caso a inserção seja bem-sucedida, retorna código 201 e a mensagem de sucesso
        return res.status(201).send("Sucesso ao Adicionar Usuario");
    });
});

// Rota para deletar um usuário específico pelo ID
app.delete('/deletar/:id', (req, res) => {
    const id_usuario = parseInt(req.params.id);  // Pegando o ID do usuário da URL
    const deletar = `DELETE FROM usuarios WHERE id_usuario = ?`;  // Query para deletar o usuário
    connection.query(deletar, [id_usuario], (erro) => {  // Executando a query
        if (erro) {
            // Caso haja erro, loga o erro e responde com código 500
            console.error('Erro ao deletar:', erro);
            return res.status(500).send("Erro ao Apagar Usuario!");
        }
        // Caso o usuário seja deletado com sucesso
        return res.status(200).send("Sucesso ao Deletar Usuario!");
    });
});

// Rota para atualizar um usuário existente
app.post('/update/:id', (req, res) => {
    const id_usuario = parseInt(req.params.id);  // Pegando o ID do usuário da URL
    // Desestruturando os dados do corpo da requisição
    const { nome_usuario, idade_usuario, email_usuario, senha } = req.body;

    // Verificando se todos os dados necessários foram fornecidos
    if (!nome_usuario || !idade_usuario || !email_usuario || !senha) {
        return res.status(400).send("Todos os campos são obrigatórios!");
    }

    // Preparando os dados para a query
    const dadosParaAtualizar = [nome_usuario, idade_usuario, email_usuario, senha, id_usuario];

    // Query para atualizar um usuário específico
    const update_id = `UPDATE usuarios SET nome_usuario = ?, idade_usuario = ?, email_usuario = ?, senha = ? WHERE id_usuario = ?`;

    connection.query(update_id, dadosParaAtualizar, (erro, resultados) => {  // Executando a query
        if (erro) {
            // Caso haja erro, loga o erro e responde com código 500
            console.error('Erro ao atualizar:', erro);
            return res.status(500).send("Erro ao Atualizar Usuário!");
        }

        // Verificando se nenhum usuário foi afetado (caso o ID não exista)
        if (resultados.affectedRows === 0) {
            return res.status(404).send("Usuário não encontrado!");
        }

        // Caso o usuário seja atualizado com sucesso
        return res.status(200).send("Usuário Atualizado com Sucesso!");
    });
});

// Configuração do servidor para rodar na porta 3000
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor Rodando em http://localhost:${port}`);  // Logando a URL onde o servidor está rodando
});
