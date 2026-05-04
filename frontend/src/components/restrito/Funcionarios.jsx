import { use } from "react";
import { useState, useRef, useEffect } from "react"
import { jsx } from "react/jsx-runtime"



export default function Funcionarios(){



  let [Id,setId ]= useState("");
  let [nome,setNome ]= useState("");
  let [ender,setEnder ]= useState("");
  let [tel,setTel ]= useState("");
  let [cargo,setCargo ]= useState("");
  let [profissao,setProfissao ]= useState("");
  let [tipo_func,setTipo_func ]= useState("");
  let [cod_acesso,setCod_acesso ]= useState("");


  let [dadosFuncionarios, setDadosFuncionarios] = useState([]);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [opcaoAlterar, setOpcaoAlterar] = useState(false);
  
  const [mensagem, setMensagem] = useState("");
  const formRef = useRef();

  //Pegar Tabela de funcionarios:
  let tbody=document.querySelector("tbody")


//Chamar dados dos funcionários e meter na tabela:

useEffect(() => {
  pegarFuncionarios()
}, [])


async function cadastrarFunc(nome,ender,tel, cargo, profissao, tipo_func,cod_acesso){
  
    const response = await fetch("http://localhost:3000/server/funcionarios/inserir",{
      method:"POST",
      headers: ({"Content-type":"application/json"}),
      body: JSON.stringify({nome,ender,tel,cargo, profissao, tipo_func,cod_acesso})
    })
  }


async function pegarFuncionarios(){  
    let respostaAPI = await fetch("http://localhost:3000/server/funcionarios/pegarDados")
    let dadosFuncionarios = await respostaAPI.json()
    setDadosFuncionarios(dadosFuncionarios)
  
}


  function ExecutarCadastro(e) 
  {
    e.preventDefault();

    if (!nome || !tel) {
      setMensagem("Por favor, preencha os campos obrigatórios.");
      return;
    }
    cadastrarFunc(nome, ender, tel, cargo, profissao, tipo_func, cod_acesso).then(() => {
      pegarFuncionarios();
      setMensagem("Cadastro realizado com sucesso!");
    }).catch(err => {
      setMensagem("Erro ao cadastrar: " + err.message);
    });
  };
  
//Deletar Funcionario:
async function deletarFuncionario(id){
  if (window.confirm('Tem certeza que deseja deletar este funcionário?')) {
    const response = await fetch(`http://localhost:3000/server/funcionarios/deletar/${id}`, {
      method: "DELETE"
    });
    console.log(response.ok)
    if (response.ok) {
          pegarFuncionarios()
      
    }
    else {
      alert("Erro ao deletar funcionário "+ response.error);
    }
  }
}

//Selecionar linha da tabela para alterar dados do funcionario:
async function selecionarLinha(id){
  let respostaAPI = await fetch(`http://localhost:3000/server/funcionarios/pegarDados/${id}`)
  let dadosFuncionario = await respostaAPI.json()

  if(dadosFuncionario.length == 0){
    alert("Funcionário não encontrado")
    return;
  }
    setIsFormOpen(true)
    setOpcaoAlterar(true)

    setId(dadosFuncionario.id)
    setNome(dadosFuncionario.nome)
    setEnder(dadosFuncionario.ender)
    setTel(dadosFuncionario.tel)
    setCargo(dadosFuncionario.cargo)
    setProfissao(dadosFuncionario.profissao)
    setTipo_func(dadosFuncionario.tipo_func)
    setCod_acesso(dadosFuncionario.cod_acesso)

}

//Alterar dados do funcionario:
async function alterarFuncionario(id, nome, ender, tel, cargo, profissao, tipo_func, cod_acesso){
  const response = await fetch(`http://localhost:3000/server/funcionarios/alterar/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({ nome, ender, tel, cargo, profissao, tipo_func, cod_acesso })
  });

 if (response.ok) {
      setMensagem("Funcionário alterado com sucesso!");
      pegarFuncionarios();
      setOpcaoAlterar(false);
    } else {
      setMensagem("Erro ao alterar funcionário: " + response.statusText);
    }

}

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      {/* Menu Lateral Esquerdo */}
      <div className="w-full md:w-1/4 md:fixed md:h-screen bg-gradient-to-b from-violet-500 to-pink-500 text-white p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-8 text-center">Menu</h2>
        <ul className="space-y-4">
          <li>
            <a
              href="/gestantes"
              className="block py-3 px-4 rounded-lg hover:bg-white hover:text-violet-600 transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
            >
              GESTANTES
            </a>
          </li>
          <li>
            <a
              href="/consultas"
              className="block py-3 px-4 rounded-lg hover:bg-white hover:text-violet-600 transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
            >
              CONSULTAS
            </a>
          </li>
          <li>
            <a
              href="/exames"
              className="block py-3 px-4 rounded-lg hover:bg-white hover:text-violet-600 transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
            >
              EXAMES
            </a>
          </li>
          <li>
            <a
              href="/funcionarios"
              className="block py-3 px-4 rounded-lg hover:bg-white hover:text-violet-600 transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
            >
              FUNCIONÁRIOS
            </a>
          </li>
        </ul>
      </div>

      {/* Área Principal Direita */}
      <div className="w-full md:w-3/4 md:ml-[25%] bg-gray-50 p-4 md:p-8 overflow-auto">
        <div className="flex flex-col gap-6">
          {/* Formulário */}
          <div className="w-full bg-white rounded-xl shadow-lg p-6 border-2 border-violet-200">
            {!isFormOpen ? (
              <button
                onClick={() => setIsFormOpen(true)}
                className="w-full py-4 bg-gradient-to-r from-violet-500 to-pink-500 text-white font-bold text-lg rounded-lg hover:shadow-lg transition duration-300 transform hover:scale-105"
              >
                + Adicionar Funcionário
              </button>
            ) : (
              <>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-violet-600">Adicionar Funcionário</h3>
                  <button
                    onClick={() => setIsFormOpen(false)}
                    className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                  >
                    ✕
                  </button>
                </div>
                <form onSubmit={ExecutarCadastro} className="space-y-6">
                  <h2 className="text-2xl font-bold text-center text-indigo-600">
                    Formulário de Funcionários
                  </h2>
                  
                  
                  {/* Tipo */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Tipo</label>
                    <select
                      name="tipo_func"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      value={tipo_func}
                      onChange={(e) => setTipo_func(e.target.value)}
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
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      placeholder="Digite Nome"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                    />
                  </div>

                  {/* Endereco */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Endereço</label>
                    <input
                      type="text"
                      name="endereco"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      placeholder="Digite Endereço"
                      value={ender}
                      onChange={(e) => setEnder(e.target.value)}
                    />
                  </div>

                  {/* Cargo */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Cargo</label>
                    <input
                      type="text"
                      name="Cargo"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      placeholder="Digite o Cargo"
                      value={cargo}
                      onChange={(e) => setCargo(e.target.value)}
                    />
                  </div>

                  {/* Telefone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Telefone</label>
                    <input
                      type="tel"
                      name="telefone"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      placeholder="(+244) 9**-***-***"
                      value={tel}
                      onChange={(e) => setTel(e.target.value)}
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
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      placeholder="Profissão do funcionário"
                      value={profissao}
                      onChange={(e) => setProfissao(e.target.value)}
                    />
                  </div>

                  
                  {/* Código */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Código
                    </label>
                    <input
                      type="text"
                      name="Codigo"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      placeholder="Código para acesso"
                      value={cod_acesso}
                      onChange={(e) => setCod_acesso(e.target.value)}
                    />
                  </div>

{/* Botão Salvar */}
<button 
  id="btnSalvar"
  type="submit"
  className={`${opcaoAlterar ? "display-none" : "display-block"} w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200`}>
  Cadastrar
</button>

{/* Botão Alterar */}
<button
  id="btnAlterar"
  type="button"
   onClick={() => alterarFuncionario(Id, nome, ender, tel, cargo, profissao, tipo_func, cod_acesso)}
  className={`${!opcaoAlterar ? "display-none" : "display-block"} w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200`}>
  Alterar
</button>

{/* Botão Cancelar */}
<button
  onClick={() => setOpcaoAlterar(false)}
  id="btnCancelar"
  type="button"
  className={`${!opcaoAlterar ? "display-none" : "display-block"} w-full py-2 px-4 bg-white text-indigo-600 hover:text-white border-2 border-indigo-600 font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200`}>
  Cancelar
</button>

                  {/* Mensagem de feedback */}
                  {mensagem && (
                    <p className="text-center text-sm font-medium text-green-600 mt-4">
                      {mensagem}
                    </p>
                  )}
                </form>
              </>
            )}
          </div>



          {/* Tabela */}
          <div className="w-full bg-white rounded-xl shadow-lg p-6 border-2 border-pink-200 overflow-x-auto">
            <h3 className="text-2xl font-bold text-pink-600 mb-6">Lista de Funcionários</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-violet-500 to-pink-500 text-white">
                    <th className="px-4 py-3 text-left">ID</th>
                    <th className="px-4 py-3 text-left">Nome</th>
                    <th className="px-4 py-3 text-left">Endereço</th>
                    <th className="px-4 py-3 text-left">Telefone</th>
                    <th className="px-4 py-3 text-left">Cargo</th>
                    <th className="px-4 py-3 text-left">Profissão</th>
                    <th className="px-4 py-3 text-left">Tipo</th>
                    <th className="px-4 py-3 text-left">Código</th>
                    <th className="px-4 py-3 text-center">Ação</th>
                  </tr>
                </thead>
                <tbody>
                {
                  dadosFuncionarios.map(funcionarioActual => (
                    <tr key={funcionarioActual.id} onClick={() => selecionarLinha(funcionarioActual.id)} className=" hover:bg-gradient-to-r hover:cursor-pointer hover:from-violet-400 hover:to-pink-400 hover:text-white bg-white  hover:color-white transition">

                      <td className="px-4 py-3 font-semibold text-violet-600">{funcionarioActual.id}</td>
                      <td className="px-4 py-3">{funcionarioActual.nome}</td>
                      <td className="px-4 py-3">{funcionarioActual.ender}</td>
                      <td className="px-4 py-3">{funcionarioActual.tel}</td>
                      <td className="px-4 py-3">{funcionarioActual.cargo}</td>
                      <td className="px-4 py-3">{funcionarioActual.profissao}</td>
                      <td className="px-4 py-3">{funcionarioActual.tipo_func}</td>
                      <td className="px-4 py-3">{funcionarioActual.cod_acesso}</td>
                      <td className="px-4 py-3 text-center">
                        <button onClick={() => deletarFuncionario(funcionarioActual.id)}  
                          className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300 transform hover:scale-110"
                        >
                          Deletar
                        </button>
                      </td>
                    </tr>
                  ))
                }
                    
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

