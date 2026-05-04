import React, { useState } from 'react';

export default function Gestantes() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    nascimento: '',
    endereco: '',
    estado_civil: '',
    num_tel: '',
    num_proximo: '',
    ultima_mestr: '',
    num_gravidez: '',
    tipos_partos: '',
    data_provavel_parto: '',
    doencas_ant: '',
    doencas_pre: '',
    func_Id: '',
    doctor_Id: '',
  });

  const [gestantes, setGestantes] = useState([
    {
      id: 1,
      nome: 'Maria Silva',
      nascimento: '1990-05-15',
      endereco: 'Rua Principal, 123',
      estado_civil: 'Casada',
      num_tel: '912345678',
      num_proximo: '913456789',
      ultima_mestr: '2024-12-20',
      num_gravidez: 2,
      tipos_partos: 'Normal, Cesariana',
      data_provavel_parto: '2026-05-15',
      doencas_ant: 'Hipertensão',
      doencas_pre: 'Nenhuma',
      func_Id: 1,
      doctor_Id: 1,
    },
  ]);

  const [funcionarios] = useState([
    { id: 1, nome: 'João Silva' },
    { id: 2, nome: 'Ana Costa' },
  ]);

  const [doctors] = useState([
    { id: 1, nome: 'Dr. Carlos' },
    { id: 2, nome: 'Dra. Paula' },
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGestante = {
      id: gestantes.length + 1,
      ...formData,
      num_gravidez: parseInt(formData.num_gravidez) || 0,
      func_Id: parseInt(formData.func_Id) || 0,
      doctor_Id: parseInt(formData.doctor_Id) || 0,
    };
    setGestantes([...gestantes, newGestante]);
    setFormData({
      nome: '',
      nascimento: '',
      endereco: '',
      estado_civil: '',
      num_tel: '',
      num_proximo: '',
      ultima_mestr: '',
      num_gravidez: '',
      tipos_partos: '',
      data_provavel_parto: '',
      doencas_ant: '',
      doencas_pre: '',
      func_Id: '',
      doctor_Id: '',
    });
    setIsFormOpen(false);
  };

  const handleDelete = (id) => {
    if (confirm('Tem certeza que deseja deletar esta gestante?')) {
      setGestantes(gestantes.filter(g => g.id !== id));
    }
  };

  const getFuncName = (id) => funcionarios.find(f => f.id == id)?.nome || '-';
  const getDoctorName = (id) => doctors.find(d => d.id == id)?.nome || '-';

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      {/* Menu Lateral Esquerdo */}
      <div className="w-full md:w-1/4 md:fixed md:h-screen bg-gradient-to-b from-violet-500 to-pink-500 text-white p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-8 text-center">Menu</h2>
        <ul className="space-y-4">
          <li>
            <a
              href="#gestantes"
              className="block py-3 px-4 rounded-lg hover:bg-white hover:text-violet-600 transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
            >
              GESTANTES
            </a>
          </li>
          <li>
            <a
              href="#consultas"
              className="block py-3 px-4 rounded-lg hover:bg-white hover:text-violet-600 transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
            >
              CONSULTAS
            </a>
          </li>
          <li>
            <a
              href="#exames"
              className="block py-3 px-4 rounded-lg hover:bg-white hover:text-violet-600 transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
            >
              EXAMES
            </a>
          </li>
          <li>
            <a
              href="#funcionarios"
              className="block py-3 px-4 rounded-lg hover:bg-white hover:text-violet-600 transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
            >
              FUNCIONÁRIOS
            </a>
          </li>
        </ul>
      </div>

      {/* Área Principal Direita */}
      <div id="gestantes" className="w-full md:w-3/4 md:ml-[25%] bg-gray-50 p-4 md:p-8 overflow-auto">
        <div className="flex flex-col gap-6">
          {/* Formulário */}
          <div className="w-full bg-white rounded-xl shadow-lg p-6 border-2 border-violet-200">
            {!isFormOpen ? (
              <button
                onClick={() => setIsFormOpen(true)}
                className="w-full py-4 bg-gradient-to-r from-violet-500 to-pink-500 text-white font-bold text-lg rounded-lg hover:shadow-lg transition duration-300 transform hover:scale-105"
              >
                + Adicionar Gestante
              </button>
            ) : (
              <>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-violet-600">Adicionar Gestante</h3>
                  <button
                    onClick={() => setIsFormOpen(false)}
                    className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                  >
                    ✕
                  </button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
              {/* Nome */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Nome *</label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-violet-500"
                  placeholder="Nome completo"
                />
              </div>

              {/* Data de Nascimento */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Nascimento *</label>
                <input
                  type="date"
                  name="nascimento"
                  value={formData.nascimento}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-violet-500"
                />
              </div>

              {/* Endereço */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Endereço</label>
                <input
                  type="text"
                  name="endereco"
                  value={formData.endereco}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-violet-500"
                  placeholder="Endereço de residência"
                />
              </div>

              {/* Estado Civil */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Estado Civil</label>
                <select
                  name="estado_civil"
                  value={formData.estado_civil}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-violet-500"
                >
                  <option value="">Selecione</option>
                  <option value="Solteira">Solteira</option>
                  <option value="Casada">Casada</option>
                  <option value="Divorciada">Divorciada</option>
                  <option value="Viúva">Viúva</option>
                  <option value="União de Facto">União de Facto</option>
                </select>
              </div>

              {/* Telefone */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Telefone *</label>
                <input
                  type="tel"
                  name="num_tel"
                  value={formData.num_tel}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-violet-500"
                  placeholder="Número de telefone"
                />
              </div>

              {/* Telefone Próximo */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Telefone (Próximo)</label>
                <input
                  type="tel"
                  name="num_proximo"
                  value={formData.num_proximo}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-violet-500"
                  placeholder="Telefone de emergência"
                />
              </div>

              {/* Última Menstruação */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Última Menstruação *</label>
                <input
                  type="date"
                  name="ultima_mestr"
                  value={formData.ultima_mestr}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-violet-500"
                />
              </div>

              {/* Número de Gravidezes */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Nº de Gravidezes</label>
                <input
                  type="number"
                  name="num_gravidez"
                  value={formData.num_gravidez}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-violet-500"
                  placeholder="0"
                />
              </div>

              {/* Tipos de Partos */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Tipos de Partos</label>
                <input
                  type="text"
                  name="tipos_partos"
                  value={formData.tipos_partos}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-violet-500"
                  placeholder="Normal, Cesariana, etc"
                />
              </div>

              {/* Data Provável do Parto */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Data Provável do Parto *</label>
                <input
                  type="date"
                  name="data_provavel_parto"
                  value={formData.data_provavel_parto}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-violet-500"
                />
              </div>

              {/* Doenças Anteriores */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Doenças Anteriores</label>
                <input
                  type="text"
                  name="doencas_ant"
                  value={formData.doencas_ant}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-violet-500"
                  placeholder="Doenças anteriores"
                />
              </div>

              {/* Doenças Presentes */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Doenças Presentes</label>
                <input
                  type="text"
                  name="doencas_pre"
                  value={formData.doencas_pre}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-violet-500"
                  placeholder="Doenças presentes"
                />
              </div>

              {/* Funcionário */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Funcionário *</label>
                <select
                  name="func_Id"
                  value={formData.func_Id}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-violet-500"
                >
                  <option value="">Selecione um funcionário</option>
                  {funcionarios.map(func => (
                    <option key={func.id} value={func.id}>{func.nome}</option>
                  ))}
                </select>
              </div>

              {/* Médico */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Médico *</label>
                <select
                  name="doctor_Id"
                  value={formData.doctor_Id}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-violet-500"
                >
                  <option value="">Selecione um médico</option>
                  {doctors.map(doctor => (
                    <option key={doctor.id} value={doctor.id}>{doctor.nome}</option>
                  ))}
                </select>
              </div>

              {/* Botão Enviar */}
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 py-3 bg-gradient-to-r from-violet-500 to-pink-500 text-white font-bold rounded-lg hover:shadow-lg transition duration-300 transform hover:scale-105"
                >
                  Guardar Gestante
                </button>
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="flex-1 py-3 bg-gray-400 text-white font-bold rounded-lg hover:bg-gray-500 transition duration-300"
                >
                  Cancelar
                </button>
              </div>
                </form>
              </>
            )}
          </div>

          {/* Tabela */}
          <div className="w-full bg-white rounded-xl shadow-lg p-6 border-2 border-pink-200 overflow-x-auto">
            <h3 className="text-2xl font-bold text-pink-600 mb-6">Lista de Gestantes</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-violet-500 to-pink-500 text-white">
                    <th className="px-4 py-3 text-left">ID</th>
                    <th className="px-4 py-3 text-left">Nome</th>
                    <th className="px-4 py-3 text-left">Nascimento</th>
                    <th className="px-4 py-3 text-left">Telefone</th>
                    <th className="px-4 py-3 text-left">Data Parto</th>
                    <th className="px-4 py-3 text-left">Funcionário</th>
                    <th className="px-4 py-3 text-left">Médico</th>
                    <th className="px-4 py-3 text-center">Ação</th>
                  </tr>
                </thead>
                <tbody>
                  {gestantes.map((gestante, idx) => (
                    <tr
                      key={gestante.id}
                      className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white hover:bg-violet-50 transition'}
                    >
                      <td className="px-4 py-3 font-semibold text-violet-600">{gestante.id}</td>
                      <td className="px-4 py-3 font-semibold">{gestante.nome}</td>
                      <td className="px-4 py-3">{new Date(gestante.nascimento).toLocaleDateString('pt-PT')}</td>
                      <td className="px-4 py-3">{gestante.num_tel}</td>
                      <td className="px-4 py-3">{new Date(gestante.data_provavel_parto).toLocaleDateString('pt-PT')}</td>
                      <td className="px-4 py-3">{getFuncName(gestante.func_Id)}</td>
                      <td className="px-4 py-3">{getDoctorName(gestante.doctor_Id)}</td>
                      <td className="px-4 py-3 text-center">
                        <button
                          onClick={() => handleDelete(gestante.id)}
                          className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300 transform hover:scale-110"
                        >
                          Deletar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
