// server.js
import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

// Instância única do Prisma com configurações otimizadas para v6.16.0
const prisma = new PrismaClient()
const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  credentials: true
}));

 app.use(express.json());



app.post('/server/salvarFunc', async (req,res)=>{
    const {nome,ender, tel, cargo, profissao, tipo_func,cod_acesso} = req.body
    //código prisma para inserir dados na bs
   
 const func = await prisma.funcionarios.create({
    data:{
        nome:nome,
        ender:ender,
        tel: tel,
        cargo:cargo,
        profissao:profissao,
        tipo_func:tipo_func,
        cod_acesso:cod_acesso,

    }

 })

    console.log(func )
    
})


app.listen(3000, () => {
  console.log("Servidor ouvindo na porta 3000 com Prisma 6.16.0");
});
