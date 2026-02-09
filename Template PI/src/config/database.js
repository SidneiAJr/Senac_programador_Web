import mysql from "mysql2/promise";
import ratelimit from "rate-limit";

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













