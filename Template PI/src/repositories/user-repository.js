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
        const [results] = await conn.query('Select * from user where id=?',[nome]);
        if(results.length===0)return null
        const usuario = results[0]
        return new usuario(usuario.id,usuario.nome,usuario.idade,usuario.telefone,usuario.email)
    }
    





}






