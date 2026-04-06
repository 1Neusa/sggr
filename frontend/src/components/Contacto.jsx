import React from "react";
import Menubar from "./Menubar";

export default function Contato() {
  return (
  <div>
    <Menubar/>
    <div className="mt-16 min-h-screen bg-pink-50 p-6">

      

      {/* Conteúdo principal */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Informações de contato */}
        <div className="bg-white p-6 rounded shadow-md space-y-4">
          <h2 className="text-xl font-semibold text-purple-600 mb-2">Informações</h2>
          <p><strong>Telefone:</strong> +244 921 999 215</p>
          <p><strong>Email:</strong> contato@sistema.com</p>
          <p><strong>Endereço:</strong> Materno Infantil, Benfica,Luanda, Angola</p>
          <p><strong>Horário de atendimento:</strong></p>
          <ul className="list-disc list-inside">
            <li>Segunda a sexta: 08h00 - 17h00</li>
            <li>Sábado: 08h00 - 12h00</li>
            <li>Domingo: Fechado</li>
          </ul>
        </div>

        {/* Botões de contato direto */}
        <div className="bg-white p-6 rounded shadow-md flex flex-col justify-center items-center space-y-4">
          <h2 className="text-xl font-semibold text-purple-600 mb-2">Entre em contato</h2>
          <a
            href="tel:+244912345678"
            className="w-full text-center bg-pink-400 text-white px-4 py-3 rounded hover:bg-pink-500 transition-colors"
          >
            Ligar
          </a>
          <a
            href="mailto:contato@sistema.com"
            className="w-full text-center bg-pink-400 text-white px-4 py-3 rounded hover:bg-pink-500 transition-colors"
          >
            Enviar Email
          </a>
          <a
            href="https://wa.me/244912345678"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center bg-pink-400 text-white px-4 py-3 rounded hover:bg-pink-500 transition-colors"
          >
            WhatsApp
          </a>
        </div>

      </div>

      {/* final */}
      <div className="mt-8 -mx-6">
  <div className="bg-gradient-to-r from-pink-200 via-purple-200 to-pink-100 p-8 shadow-md text-center space-y-4">

    <h2 className="text-2xl font-semibold text-purple-700">
       Obrigada por entrar em contacto connosco
    </h2>

    <p className="text-gray-700 leading-relaxed">
      A nossa equipa está sempre disponível para apoiar, orientar e cuidar de si
      durante toda a sua jornada.
    </p>

    <p className="text-gray-700 leading-relaxed">
      A saúde da mãe e do bebé é a nossa prioridade.  
      Responderemos o mais breve possível através dos meios indicados.
    </p>

    <div className="mt-4 text-pink-700 text-lg">
       Estamos consigo em cada etapa deste momento especial.
    </div>

  </div>
</div>
 </div>
    </div>
  );
}