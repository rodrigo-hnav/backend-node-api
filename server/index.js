import express from 'express'
import  {PORT}  from "./config.js";
import router from './routes/index.routes.js';
import cors  from "cors";

const app = express()
app.use(cors())
app.use(express.json())
app.use(router)
app.listen(PORT)
console.log('server on port' , PORT)