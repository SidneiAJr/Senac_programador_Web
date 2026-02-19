import jwt from 'jsonwebtoken'
import {AppError} from '../errors/error-handle.js'
import {JWT_Secret} from '../config/env-config.js'

export function authMiddleware(req,res,next){
   const authHeader = req.headers.authorization
   if(!authHeader){
    throw new AppError('Token Não Forncedido',401)
   }
   const [,token] = authHeader.split('')
   try{
     const decoded = jwt.verify(token,JWT_Secret)
     req.user = decoded
     next()
   }catch{
      throw new AppError('Token Expirado',401)
   }
}
