import { Usuario } from "../models/user.js";
import { UsuarioRepository } from "../repositories/user-repository.js"
import { UserService } from "../services/user-services.js";
export class UserController{

    static async index(req,res){
         const usuarios = await UserService.exibirUsuarios();
         res.status(200).json(usuarios)
    }

    static async findID(res,req){
        const id = parseInt(req.params.id_usuario);
        const usuario = await UserService.exibirUsuario(id);
        res.status(200).json(usuario)
    }

    static async register(req,res){
        const {nome, idade, telefone, email,senha} = req.body;
        const novoUsuario = await UserService.RegistrarUsuario(nome,idade ,telefone ,email, senha)
        res.status(201).json(novoUsuario)
    }

  static async delete(req, res) {
    const ID = parseInt(req.params.id);

    const usuario = await UsuarioRepository.deleteById(ID);

    if (!usuario) {
        return res.status(error.statusCode).send('Usuário não encontrado');
    }

    await UsuarioRepository.deleteById(ID);

    return res.status(200).send("Usuario Deletado com Sucesso!"); // 204 = No Content (padrão para delete)
}
static async update(req, res) {
    const ID = parseInt(req.params.id);
    const dados = req.body;

    const usuario = await UsuarioRepository.update(ID,dados);

    if (!usuario) {
        return res.status(error.statusCode).send('Usuário não encontrado');
    }

    await UsuarioRepository.update(ID, dados);

    const usuarioAtualizado = await UsuarioRepository.findID(ID);

    return res.status(200).json(usuarioAtualizado);
}

static async login(req,res){
    const {email,senha} = req.body
    usuarioLogado = await UserService.login(email,senha);
    res.status(200).json({message: "Usuario Logado com sucesso"})
}




}
    
