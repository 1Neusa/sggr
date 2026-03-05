export default function Login() {
     return(
        <div className="flex justify-center items-center mt-28 ">
           
                <div className=" p-6 rounded-xl shadow-xl w-96 h-auto border-3 border-pink-700">
       
        <h1 className="text-2xl font-bold text-pink-600 mb-2 text-center">
            Bem-vinda!
        </h1>
        <p className="text-center text-gray-300 mb-5 text-sm">
            Digite seu nome e senha para entrar
        </p>

       
        <form action="#" method="POST" className="space-y-4">
    
            <div>
                <label className="block text-gray-300 mb-1 text-sm" for="nome">Nome</label>
                <input type="text" id="nome" name="nome" placeholder="Seu nome"
                    className="w-full px-3 py-2 border border-pink-700 rounded-lg bg-black text-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm"/>
            </div>

           
            <div>
                <label className="block text-gray-300 mb-1 text-sm" for="senha">Senha</label>
                <input type="password" id="senha" name="senha" placeholder="Sua senha"
                    className="w-full px-3 py-2 border border-pink-700 rounded-lg bg-black text-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm"/>
            </div>    
            
            <button type="submit"
                className="cursor-pointer w-full bg-pink-700 text-black py-2 rounded-lg hover:bg-pink-700 hover:italic transition text-sm font-medium">
                Entrar
            </button>
        </form>

    
        <p class="text-center text-gray-400 mt-4 text-xs">
            Não tem conta? <a href="#" class="text-gold hover:underline">Cadastre-se</a>
        </p>
    </div>

        </div>

    )
    
}