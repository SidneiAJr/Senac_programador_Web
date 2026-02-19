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
    const id = parseInt(req.params.id);

    await UserService.delete(id)
    res.status(204).send("Usuario Não Encontrado | Favor Verificar!")
}

static async update(req, res) {
    const id = parseInt(req.params.id);
    const {nome,idade ,telefone ,email, senha} = req.body;
    const usuarioAtualizado = await UserService.update(id,nome,idade ,telefone ,email, senha)

    return res.status(200).json(usuarioAtualizado);
}

static async login(req,res){
    const {email,senha} = req.body
    const {token} = await UserService.login(email,senha)
    res.status(200).json({token})

}




}
    
