-- Cria Banco de dados
CREATE DATABASE informacao;

-- Usa o Banco de dados
USE informacao;

-- Cria Tabela de Usuari
CREATE TABLE usuarios(
    id_usuario int AUTO_INCREMENT not null primary key,
    NomeUsuario VARCHAR(45) NOT NULL,
    IdadeUsuario INT not null,
    informacao_usuario varchar(30) not null
);

-- Cria Tabela Estoque
CREATE TABLE estoque(
    Id_estoque int AUTO_INCREMENT not null primary key,
    QuantidadeProdutos int not null,
    Informacao_produto varchar(50)not null
);

CREATE TABLE produto(
    id_produto int AUTO_INCREMENT not null primary key,
    NomeProduto varchar(50) not null,
    preco decimal(7,2) not null
);

CREATE TABLE uso_estoque(
    id_produto int not null,
	Id_estoque int not null,
	id_usuario int not null,
    foreign key (id_produto)REFERENCES produto(id_produto),
    foreign key(Id_estoque)REFERENCES estoque(Id_estoque),
    foreign key(id_usuario)REFERENCES usuarios(id_usuario)
);
