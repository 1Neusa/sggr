import React from 'react';

export default function Principal() {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-white">
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
      <div className="w-full md:w-3/4 md:ml-[25%] flex items-center justify-center bg-gray-50 p-4 md:p-0">
        <div className="text-center p-6 md:p-12 bg-white rounded-xl shadow-2xl border-4 border-violet-200 max-w-full">
          <h1 className="text-4xl md:text-6xl font-extrabold text-violet-600 mb-4 drop-shadow-lg">
            SGGR
          </h1>
          <h2 className="text-xl md:text-3xl font-semibold text-pink-500">
            Gestantes
          </h2>
        </div>
      </div>
    </div>
  );
};
