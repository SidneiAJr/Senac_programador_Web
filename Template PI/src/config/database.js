import mysql from "mysql2/promise";
import rateLimit from "express-rate-limit";

import { DB_DATABASE } from "./env-config";
import { DB_PORT } from "./env-config";
import { DB_HOST } from "./env-config";
import { DB_USER } from "./env-config";
import { DB_Password } from "./env-config";

export const conn = mysql.createPool({
   host:DB_HOST,
   port: parseInt(DB_PORT|| '3306'),
   user: DB_USER,
   password: DB_Password,
   database:DB_DATABASE,
   waitForConnections:true,
   connectionLimit: 10
})

export const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // 100 requisições por IP
  message: "Muitas requisições, tenta de novo mais tarde"
});














