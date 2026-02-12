import { Usuario } from "../models/user.js";
import { UsuarioRepository } from "../repositories/user-repository.js"
export class UserController{

    static async index(req,res){
       const usuarios = await UsuarioRepository.findAll();
       res.status(200).json(usuarios);
    }

    static async findID(res,req){
        const ID = parseInt(req.params.id);
        const usuario = await UsuarioRepository.findID(ID);
        if(!usuario){
       res.status(404).send('Usuario não Encontrado Erro!!!')
       return;
    }
       res.status(200).json(usuario);
    }

    static async register(req,res){
        const {nome, idade, telefone, email} = req.body;

        if(!nome || ! idade || !telefone || !email){
            res.status(400).send("Falta Informação")
            return
        }
        const usuario = new Usuario(null,nome,idade,telefone,email)
        const novoUsuario = await UsuarioRepository.insert(usuario)

        res.status(201).json(novoUsuario)
    }

  static async delete(req, res) {
    const ID = parseInt(req.params.id);

    const usuario = await UsuarioRepository.deleteById(ID);

    if (!usuario) {
        return res.status(404).send('Usuário não encontrado');
    }

    await UsuarioRepository.deleteById(ID);

    return res.status(200).send("Usuario Deletado com Sucesso!"); // 204 = No Content (padrão para delete)
}
static async update(req, res) {
    const ID = parseInt(req.params.id);
    const dados = req.body;

    const usuario = await UsuarioRepository.update(ID,dados);

    if (!usuario) {
        return res.status(404).send('Usuário não encontrado');
    }

    await UsuarioRepository.update(ID, dados);

    const usuarioAtualizado = await UsuarioRepository.findID(ID);

    return res.status(200).json(usuarioAtualizado);
}

}
    
