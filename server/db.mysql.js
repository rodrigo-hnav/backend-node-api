import { createPool } from "mysql2/promise";
import { HOST,
    PORT_DB,
    USER_DB,
    PASSWORD_DB,
    DATABASE,
 } from "./config.js";

export const pool = new createPool({
    host: HOST,
    port: PORT_DB, 
    user: USER_DB,
    password: PASSWORD_DB,
    database: DATABASE,
});


