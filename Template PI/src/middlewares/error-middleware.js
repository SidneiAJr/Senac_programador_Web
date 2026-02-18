export function erroMiddleware(err,req,res,next){
   const status = err.StatusCode || 500
   res.status(status).json({error:err.message || "Algo deu errado. Tente Novamente mais Tarde!"})
}
