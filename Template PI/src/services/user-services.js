import { AppError } from "../errors/error-handle.js";
import { Usuario } from "../models/user.js";
import { UsuarioRepository } from "../repositories/user-repository.js";

export class UserService{
    static async exibirUsuarios(){
        const usuario =  UsuarioRepository.findAll()

        if(usuario.length ===0){
             throw new AppError('Nenhum Usuario Encontrado',404);
        }
        return usuario
    }

    static async exibirUsuario(id){
        if(isNaN(id)){
           throw new AppError('Precisa ser um Numero!',400)
        }
         const usuario = await UsuarioRepository.findID(id)
        if(!usuario){
           throw new AppError('Erro ao Buscar Dados!',404);
        }
    }

}
