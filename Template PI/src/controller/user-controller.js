import { UsuarioRepository } from "../repositories/user-repository.js"
export class UserController{

    static async index(req,res){
       const usuarios = await UsuarioRepository.findAll();
       res.status(200).json(usuarios);
    }

    static async findID(res,req){
        const findbyID = parseInt(req.params.id);
        const usuario = await UsuarioRepository.findID(id);
        if(!usuario){
       res.status(404).send('Usuario não Encontrado Erro!!!')
       return;
    }
       res.status(200).json(usuarios);
    }

    
}
