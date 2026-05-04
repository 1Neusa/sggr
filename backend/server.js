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



app.post('/server/funcionarios/inserir', async (req,res)=>{
    const {nome,ender, tel, cargo, profissao, tipo_func,cod_acesso} = req.body
    //código prisma para inserir dados na bs
   
 try {
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

    console.log(func)
    res.status(201).json(func)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

//Buscar todos dados de funcionarios:
app.get('/server/funcionarios/pegarDados', async (req, res) => {
  try {
    const funcs = await prisma.funcionarios.findMany();
    res.json(funcs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Deletar funcionario por ID:


app.delete('/server/funcionarios/deletar/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.funcionarios.delete({
      where: { id: parseInt(id) }
    });
    res.json({ message: 'Funcionário deletado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//pegar funcionário por ID
app.get('/server/funcionarios/pegarDados/:id', async (req, res) => {
  try {
    const { id } = req.params; // pega o valor do :id
    const func = await prisma.funcionarios.findUnique({
      where: { id: parseInt(id) }
    });
    res.json(func);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


app.listen(3000, () => {
  console.log("Servidor ouvindo na porta 3000 com Prisma 6.16.0");
});


//Alterar dados do funcionário por ID
app.put('/server/funcionarios/alterar/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, ender, tel, cargo, profissao, tipo_func, cod_acesso } = req.body; 
    const func = await prisma.funcionarios.update({
      where: { id: parseInt(id) },
      data: {
        nome: nome,
        ender: ender,
        tel: tel,
        cargo: cargo,
        profissao: profissao,
        tipo_func: tipo_func,
        cod_acesso: cod_acesso
      }
    });
    res.json(func);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
