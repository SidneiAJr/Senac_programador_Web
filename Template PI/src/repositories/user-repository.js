import { conn } from "../config/database.js";
import { Usuario } from "../models/user.js";

class UsuarioRepository{
    async findAll(){
        const [results] = await conn.query('Select * from user');
        return results.map(u => new Usuario (u.id,u.nome,u.idade,u.telefone,u.email));
    }
    async findID(id){
        const [results] = await conn.query('Select * from user where id=?',[id]);
        if(results.length===0)return null
        const usuario = results[0]
        return new usuario(usuario.id,usuario.nome,usuario.idade,usuario.telefone,usuario.email)
    }
    async findName(nome){
        const [results] = await conn.query('Select * from user where nome=?',[nome]);
        if(results.length===0)return null
        const usuario = results[0]
        return new usuario(usuario.id,usuario.nome,usuario.idade,usuario.telefone,usuario.email)
    }
    async update(id, usuario) {
    const { nome, idade, telefone, email } = usuario;

    const [result] = await conn.query(
        `UPDATE user 
         SET nome = ?, idade = ?, telefone = ?, email = ?
         WHERE id = ?`,
        [nome, idade, telefone, email, id]
    );
    return result.affectedRows > 0;
}

async InsertUser(usuario){
     const {nome,email,senha}=usuario
     const [result] = await conn.query('Insert into user (nome,idade,usuario,telefone,email)values(?,?,?,?,?)' ,[nome, idade, telefone, email, senha])
     return new Usuario(result.insertId,result.nome,result.idade,result.telefone,result.email,result.senha);
}

async deletID(id){
    const [results] = await conn.query('delete from user where id=?',[id]);
    return results.affectedRows > 0;
}
}






