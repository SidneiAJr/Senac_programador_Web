import { Usuario } from "../models/user.js";
import { UsuarioRepository } from "../repositories/user-repository.js"
import { UserService } from "../services/user-services.js";
export class UserController{

    static async index(req,res){
        try{
         const usuarios = await UserService.exibirUsuarios();
         res.status(200).json(usuarios)
        }catch(error){
         res.status(404).json({message: error.message})
        }
    }

    static async findID(res,req){
        const id = parseInt(req.params.id);
       
        try{
            const usuario = await UserService.exibirUsuario(id);
            res.status(200).json(usuario)
        }catch(error){
            let status = 400;
            if(error.message.includes('Usuario Não Encontrado')){
              status = 404
            }
            res.status(status).send(error.message)
        }
    }

    static async register(req,res){
        const {nome, idade, telefone, email,senha} = req.body;

        if(!nome || ! idade || !telefone || !email || !senha){
            res.status(400).send("Falta Informação")
            return
        }
        const usuario = new Usuario(null,nome,idade,telefone,email,senha)
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
    
