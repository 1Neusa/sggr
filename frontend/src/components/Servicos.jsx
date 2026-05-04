
import React from "react";

export default function Servicos() {
  return (
    <div className="bg-pink-50 text-gray-800 p-8 rounded-lg shadow-lg space-y-12">
      <h1 className="text-4xl font-bold text-center text-pink-600">
        Nossos Serviços
      </h1>

      
      <p className="text-center text-gray-700 max-w-3xl mx-auto">
        Oferecemos uma gama de serviços para apoiar gestantes em todas
        as etapas da gravidez, garantindo cuidado, segurança e informação de qualidade.

      </p>

      
      <div className="grid md:grid-cols-3 gap-8 mt-8">
        {/* Serviço 1 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition duration-300">
          <div className="text-5xl text-pink-400 mb-4"></div>
          <h2 className="text-xl font-semibold mb-2">Acompanhamento Pré-Natal</h2>
          <p className="text-gray-600">
            Consultas regulares com profissionais de saúde, monitoramento do bem-estar
            da mãe e do bebê, e orientação sobre cuidados durante toda a gestação.
          </p>
        </div>

        {/* Serviço 2 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition duration-300">
          <div className="text-5xl text-pink-400 mb-4"></div>
          <h2 className="text-xl font-semibold mb-2">Exames e Diagnósticos</h2>
          <p className="text-gray-600">
            Acompanhamento de exames laboratoriais e de imagem, garantindo diagnósticos
            precisos e prevenção de complicações.
          </p>
        </div>

        {/* Serviço 3 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition duration-300">
          <div className="text-5xl text-pink-400 mb-4"></div>
          <h2 className="text-xl font-semibold mb-2">Relatórios e Monitoramento</h2>
          <p className="text-gray-600">
            Relatórios detalhados de evolução da gestante, alertas automáticos de risco,
           pressão e exames.
          </p>
        </div>

        {/* Serviço 4 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition duration-300">
          <div className="text-5xl text-pink-400 mb-4"></div>
          <h2 className="text-xl font-semibold mb-2">Educação e Orientação</h2>
          <p className="text-gray-600">
            Workshops, materiais educativos e acompanhamento de dúvidas para gestantes
            e familiares, promovendo informação segura e confiável.
          </p>
        </div>

        {/* Serviço 5 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition duration-300">
          <div className="text-5xl text-pink-400 mb-4"></div>
          <h2 className="text-xl font-semibold mb-2">Suporte e Atendimento</h2>
          <p className="text-gray-600">
            Canal de comunicação direta com profissionais de saúde, atendimento rápido
            e suporte em caso de dúvidas ou emergências.
          </p>
        </div>

        {/* Serviço 6 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition duration-300">
          <div className="text-5xl text-pink-400 mb-4"></div>
          <h2 className="text-xl font-semibold mb-2">Plataforma Online</h2>
          <p className="text-gray-600">
            Acesso seguro a histórico de consultas, exames e alertas, com interface
            intuitiva e responsiva.
          </p>
        </div>
      </div>
    </div>
  );
}