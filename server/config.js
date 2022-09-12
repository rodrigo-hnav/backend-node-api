import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 5000;

export const HOST=process.env.HOST || 'localhost'

export const PORT_DB=process.env.PORT_DB || 3306

export const USER_DB=process.env.USER_DB || 'root'

export const PASSWORD_DB=process.env.PASSWORD_DB || 'root'

export const DATABASE= process.env.DATABASE || 'bsale_test'