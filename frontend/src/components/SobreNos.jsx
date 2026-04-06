import React from "react";
import Menubar from "./Menubar";

export default function SobreNos() {
  return (
    <div>
    <Menubar/>  
    <div className=" mt-16 bg-pink-100 p-8 rounded-lg shadow-md space-y-8">
      

      {/* Missão */}
      <section className="bg-white p-6 rounded shadow-sm">
        <h2 className="text-2xl font-semibold text-pink-400 mb-2">Nossa Missão</h2>
        <p className="text-gray-800">
          Nosso objetivo é oferecer um acompanhamento completo e seguro para gestantes em situação de risco, centralizando informações médicas e administrativas, garantindo cuidado personalizado e eficiente. Buscamos tornar cada experiência da gestante mais tranquila e confiante, com atenção e carinho em cada detalhe.
        </p>
      </section>

      {/* Visão */}
      <section className="bg-white p-6 rounded shadow-sm">
        <h2 className="text-2xl font-semibold text-purple-400 mb-2">Nossa Visão</h2>
        <p className="text-gray-800">
          Ser referência em sistemas de gestão de saúde materna, promovendo tecnologia que facilita o trabalho de profissionais de saúde e proporciona tranquilidade e segurança às gestantes. Queremos inovar continuamente, criando soluções inteligentes, acessíveis e eficazes.
        </p>
      </section>

      {/* Valores */}
      <section className="bg-white p-6 rounded shadow-sm">
        <h2 className="text-2xl font-semibold text-pink-400 mb-2">Nossos Valores</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-800">
          <li> Humanização no cuidado materno</li>
          <li> Segurança e confidencialidade dos dados</li>
          <li> Inovação e tecnologia</li>
          <li> Trabalho em equipe e colaboração</li>
          <li> Empatia e respeito às gestantes</li>
          <li> Compromisso com qualidade e excelência</li>
        </ul>
      </section>

      {/* Objetivos */}
      <section className="bg-white p-6 rounded shadow-sm">
        <h2 className="text-2xl font-semibold text-purple-400 mb-2">Objetivos</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-800">
          <li> Centralizar informações médicas e administrativas das gestantes</li>
          <li> Facilitar o acompanhamento de consultas, exames e alertas</li>
          <li> Melhorar a comunicação entre profissionais de saúde e gestantes</li>
          <li> Garantir segurança e confidencialidade dos dados</li>
          <li> Fornecer relatórios e estatísticas precisas para tomada de decisão</li>
        </ul>
      </section>

      {/* Finalidade */}
      <section className="bg-white p-6 rounded shadow-sm">
        <h2 className="text-2xl font-semibold text-pink-400 mb-2">Finalidade</h2>
        <p className="text-gray-800">
          A finalidade do nosso sistema é proporcionar um acompanhamento integral para gestantes em risco, permitindo que profissionais de saúde atuem de forma rápida e eficiente, minimizando riscos e melhorando a qualidade do cuidado oferecido.
        </p>
      </section>

      {/* Equipe */}
      <section className="bg-white p-6 rounded shadow-sm">
        <h2 className="text-2xl font-semibold text-purple-400 mb-2">Nossa Equipe</h2>
        <p className="text-gray-800">
          Contamos com profissionais altamente qualificados: médicos, enfermeiros e administradores dedicados a oferecer o melhor acompanhamento às gestantes, garantindo precisão nos registros e cuidado humanizado. Cada membro da equipe trabalha com empatia, dedicação e experiência para apoiar cada gestante em sua jornada.
        </p>
      </section>

      {/* Encerramento / Call to Action */}
      <section className="text-center">
        <p className="text-lg font-medium text-gray-800">
          Estamos aqui para apoiar cada gestante em sua jornada, cuidando com amor e atenção. 
        </p>
      </section>
    </div>
     </div>
  );
}