import { AppError } from "../errors/error-handle.js";
import { Usuario } from "../models/user.js";
import { UsuarioRepository } from "../repositories/user-repository.js";
import bcrypt, { genSalt } from "bcryptjs";

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
    static async RegistrarUsuario(nome,idade ,telefone ,email, senha){
         const emailExiste = await UsuarioRepository.findEmail(email);

         if(!nome || ! idade || !telefone || !email || !senha){
            throw new AppError("Todos os Campos são Obrigatorios",400)
        }
         if(emailExiste){
            throw new AppError("Email Existe | Favor Usar Outro!",409)
         }
         
        const senhaHash = await bcrypt.hash(senha,10);

        const usuario = new Usuario(null,nome,idade,telefone,email,senhaHash)

        const novousuario = await UsuarioRepository.insert(usuario)

        return novousuario;
         
    }

    static async login(email,senha){
       if(!email || !senha){
        throw new AppError('Email & Senha são Obrigatorios',400)
       }
       const usuario = await UsuarioRepository.findEmail(email);
       if(!usuario){
        throw new AppError('Credenciais Invalidas !',401);
       }

       const Senhachecar = await bcrypt.compare(senha,usuario.senha);

       if(!Senhachecar){
        throw new AppError('Credencias Invalidas',401)
       }
       return Senhachecar
    }

    



}
