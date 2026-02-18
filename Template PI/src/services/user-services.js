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

    static async update(id,nome,idade ,telefone ,email, senha){
      if(isNaN(id)){
         throw new AppError('ID precisa ser um numero',400)
      }
      
      if(!nome && !email && !senha && !idade && !telefone){
          throw new AppError('É ncessario informar ao menos um campo para alteração',400)
      }

      const usuarioExist = await UsuarioRepository.findID(parseInt(id))

      if(!usuarioExist){
         throw new AppError('Usuario não encontrado',404)
      }

      if(email){
        const emailExist = await UsuarioRepository.findEmail(email) 
        if(emailExist){
           throw new AppError('Ja existe esse email veio!',409)
        }
      }

      nome = nome ?? usuarioExist.nome
      email = email ?? usuarioExist.email
      senha = senha ?? usuarioExist.senha

      const usuarioAtualizado = await UsuarioRepository.update(id,new Usuario(id,nome,email,senha))

      if(!usuarioAtualizado){
         throw new AppError('Erro ao Atualizar Usuario',500)
      }

      return usuarioAtualizado

     
    }

    



}
