import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import usuarioRoutes from './routes/user-routes.js' 
import { erroMiddleware } from "./middlewares/error-middleware.js";

dotenv.config()

const app = express()
const port = process.env.port || 3000

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use(usuarioRoutes)
app.use(erroMiddleware)


app.listen(port,()=>{
    console.log(`Servidor Rodando: http://localhost:${port}`)
})












