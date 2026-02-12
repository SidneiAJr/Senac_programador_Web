import { Usuario } from "../models/user.js";
import { UsuarioRepository } from "../repositories/user-repository.js";

export class UserService{
    static async exibirUsuarios(){
        const usuario =  UsuarioRepository.findAll()

        if(!usuario || usuario.length ===0 ){
           throw new Error('Nenhum Usuario Encontrado!');
        }
        return usuario
    }

    static async exibirUsuario(id){
        if(isNaN(id)){
           throw new Error('Precisa ser um Numero!')
        }
         const usuario = await UsuarioRepository.findID(id)
        if(!usuario || usuario.length){
            throw new Error ('Usuario não encontrado')
        }
    }

}
