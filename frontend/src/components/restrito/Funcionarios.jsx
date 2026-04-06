import { useState } from "react"
import { jsx } from "react/jsx-runtime"

export default function Funcionarios(){

  const [nome, setNome] = useState()
  const [ender, setEnder] = useState()
  const [tel, setTel] = useState()
  const [cargo, setCargo] = useState()
  const [prof, setProf] = useState()
  const [tipo_func, setTipoFunc] = useState()
  const [codigo, setCodigo] = useState()
  
  const [mensagem, setMensagem] = useState("");

async function cadastrarFunc(nome,ender,tel, cargo, profissao, tipo_func,cod_acesso){
    const response = await fetch("http://localhost:3000/server/salvarFunc",{
      method:"POST",
      headers: ({"Content-type":"application/json"}),
      body: JSON.stringify({nome,ender,tel,cargo, profissao, tipo_func,cod_acesso})
    })
  }


   function ExecutarCadastro() {
    
    if (!nome || !tel) {
      setMensagem("Por favor, preencha os campos obrigatórios.");
      return;
    }
    else{
   /* setMensagem("Cadastro realizado com sucesso!");*/
      cadastrarFunc(nome,ender,tel,cargo, prof, tipo_func,codigo)
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-300">
      <form
        onSubmit={ExecutarCadastro}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-indigo-600">
          Formulário de Funcionários
        </h2>
        
        
        {/* Tipo */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Tipo</label>
          <select
            name="tipo_func"
            value={tipo_func}
            onChange={(e)=>setTipoFunc(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="">Selecione</option>
            <option value="Admin">Administrador</option>
            <option value="Doctor">Doctor</option>
            <option value="Enfermeiro">Enfermeiro</option>
          </select>
        </div>
        
        {/* Nome */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Nome</label>
          <input
            type="text"
            name="nome"
            value={nome}
            onChange={(e)=>setNome(e.target.value) }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Digite Nome"
          />
        </div>

        {/* Endereco */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Endereço</label>
          <input
            type="text"
            name="endereco"
            value={ender}
            onChange={(e)=>setEnder(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Digite Endereço"
          />
        </div>

        {/* Senha */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Cargo</label>
          <input
            type="text"
            name="Cargo"
            value={cargo}
            onChange={(e)=>setCargo(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Digite o Cargo"
          />
        </div>

        {/* Telefone */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Telefone</label>
          <input
            type="tel"
            name="telefone"
            value={tel}
            onChange={(e)=>setTel(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="(+244) 9**-***-***"
          />
        </div>

        {/* Profissão */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Profissão
          </label>
          <input
            type="text"
            name="Profissao"
            value={prof}
            onChange={(e)=>setProf(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Profissão do funcionário"
          
          />
        </div>

        
        {/* Profissão */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Código
          </label>
          <input
            type="text"
            name="Codigo"
            value={codigo}
            onChange={(e)=>setCodigo(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Código para acesso"

          />
        </div>

        {/* Botão */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
        >
          Cadastrar
        </button>

        {/* Mensagem de feedback */}
        {mensagem && (
          <p className="text-center text-sm font-medium text-green-600 mt-4">
            {mensagem}
          </p>
        )}
      </form>
    </div>
  
    )

}

