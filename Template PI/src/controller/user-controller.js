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
       res.status(200).json(usuarios);
    }

    static async register(req,res){
        const {nome, idade, telefone, email} = req.body;

        if(!nome || ! idade || !telefone || !email){
            res.status(400).send("Falta Informação")
            return
        }
        const Usuario = new Usuario(null,nome,idade,telefone,email)
        const novoUsuario = await UsuarioRepository.insert(Usuario)
    }


    
}
