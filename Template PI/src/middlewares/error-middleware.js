export function erroMiddleware(err,req,res,next){
   const status = err.statusCode || 500
   const isOperation = err.isOperation || false
   res.status(status).json({mensagem: isOperation ? err.message : "Erro Inesperado. Teste Novamente mais Tarde"})
}
