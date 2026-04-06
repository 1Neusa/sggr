

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import ScrollRevealWrapper from '../ScrollRevealWrapper'
import { useEffect } from "react";

export default function Apresentacao(){

    useEffect(()=>{
        
        //efeito show e transição no slide
        document.querySelector("#slideContent_0").classList.add('show')
    }, [])
    return (
        
     <div className=' h-[805px] w-full'> 

       
       <div className="  link-efeito-girar z-20 ">
        <Swiper 
          onSlideChange={(swiper) => {
                    const slideContent_0 = document.querySelector("#slideContent_0")
                    const slideContent_1 = document.querySelector("#slideContent_1")
                    const slideContent_2 = document.querySelector("#slideContent_2")
                   
                if (swiper.activeIndex==0) {
                    //remover do 2 que último
                    slideContent_2.classList.remove('show')
                    //add no primeiro
                    slideContent_0.classList.add('show')
                   
                }

                else if (swiper.activeIndex==1){
                //remover do 0
                    slideContent_0.classList.remove('show')
                //add no 1 conteudo:
                    slideContent_1.classList.add('show')

                 }

                  else if (swiper.activeIndex==2){
                //remover do 1
                    slideContent_1.classList.remove('show')
                //add no 2 conteudo:
                    slideContent_2.classList.add('show')

                 }
                
                }}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        spaceBetween={40}
        centeredSlides={true}
        effect="cube"
        autoplay={{ delay: 9000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={false}
        className=' h-[805px]'  >
                
                           
                
            <SwiperSlide id="slide-1" >
               
                    <div className=" transicao lg:w-[70%] w-full text-left">
                        
                        
                        <div id="slideContent_0" className=" hide pb-4 flex px-6 md:pl-6 flex-wrap mb-9 gap-x-4 items-center mt-52 md:ml-20 justify-left">

                            
                            
                                        <div className="xl:w-[85%] lg:w-[88%] md:w-[89%]">
                                            
                                        <h1 className="transicao dm-sans-uniquifier xl:text-7xl  md:text-6xl text-4xl md:px-0 pr-14  text-gray-200 font-extrabold">BEM VINDO AO SGGR </h1>
                                         <h1 className=" transicao dm-sans-uniquifier xl:text-6xl lg:text-5xl md:text-6xl text-3xl md:px-0 pr-14 pb-7 font-extrabold text-pink-400">Sistema De Gestao para Gestantes Em Riscos </h1>
                            
                                        </div>
                                         
                             <p className=" w-[90%] lg:w-[80%] md:w-[90%] pb-7 dm-sans-uniquifier md:px-0 font-semibold text-md  md:text-2xl lg:text-2xl text-gray-300 transicao " >
                                Bem-vinda ao Sistema de Gestão para Gestantes em Risco. Aqui você acompanha sua saúde e seu bebê de forma segura e prática.
                             </p>
                            <div className=" transicao md:flex md:flex-nowrap gap-x-5 w-full md:items-center md:justify-left  ">
                                

                            <a href="/login" className="w-full md:w-auto">
                                <button className="cursor-pointer flex items-center justify-center w-full md:w-auto px-6 py-3 font-bold text-[1rem] md:text-[1.1rem] 
                                                border border-G-700 text-pink-300 bg-transparent backdrop-blur-lg 
                                                transition-all duration-300 hover:text-[1.25rem] hover:backdrop-blur-3xl rounded-md">
                                ENTRAR NO SISTEMA 
                                </button>
                                </a>
                            </div>
                            
                        </div>
                       
                
                </div>
            </SwiperSlide>

            <SwiperSlide id="slide-2">
                
                    <div className=" transicao lg:w-[70%] w-full text-left">
                        
                        
                        <div id="slideContent_1" className=" hide transicao pb-4 flex px-6 md:pl-6 flex-wrap mb-9 gap-x-4 items-center mt-52 md:ml-20 justify-left">

                            
                            
                                        <div className="xl:w-[85%] lg:w-[88%] md:w-[89%]">
                                            
                                        <h1 className=" transicaodm-sans-uniquifier xl:text-7xl  md:text-6xl text-4xl md:px-0 pr-14  text-gray-200 font-extrabold"> Cuidando da Vida Desde o Início </h1>
                                         <h1 className=" transicao dm-sans-uniquifier xl:text-6xl lg:text-5xl md:text-6xl text-3xl md:px-0 pr-14 pb-7 font-extrabold text-pink-400 ">para ter uma boa gestação </h1>
                            
                                        </div>
                                         
                             <p className=" transicao w-[90%] lg:w-[80%] md:w-[90%] pb-7 dm-sans-uniquifier md:px-0 font-semibold text-md  md:text-2xl lg:text-2xl text-gray-300  " >
                                    Nosso sistema acompanha gestantes em situação de risco, garantindo monitoramento contínuo da saúde materna e fetal. Cada detalhe,
                                     desde consultas até exames, é registrado para promover um acompanhamento seguro e eficaz,
                                      minimizando riscos e oferecendo suporte personalizado.
                             </p>
                            <div className=" transicao md:flex md:flex-nowrap gap-x-5 w-full md:items-center md:justify-left  ">
                                
                                                             
  <a href="/login" className="w-full md:w-auto">
    <button className="cursor-pointer flex items-center justify-center w-full md:w-auto px-6 py-3 font-bold text-[1rem] md:text-[1.1rem] 
                       border border-G-700 text-pink-300 bg-transparent backdrop-blur-lg 
                       transition-all duration-300 hover:text-[1.25rem] hover:backdrop-blur-3xl rounded-md">
      ENTRAR NO SISTEMA 
    </button>
    </a>


                            </div>
                            
                        </div>
                       
                
                </div>
            
            </SwiperSlide>

            <SwiperSlide id="slide-3">
                
                    <div className=" transicao  lg:w-[70%] w-full text-left">
                        
                        
                        <div id="slideContent_2" className=" hide  pb-4 flex px-6 md:pl-6 flex-wrap mb-9 gap-x-4 items-center mt-52 md:ml-20 justify-left">

                            
                            
                                        <div className="transicao xl:w-[85%] lg:w-[88%] md:w-[89%]">
                                            
                                        <h1 className="transicao dm-sans-uniquifier xl:text-7xl  md:text-6xl text-4xl md:px-0 pr-14 text-gray-200 font-extrabold">Segurança e Bem-Estar Materno-Fetal</h1>
                                         <h1 className="transicao dm-sans-uniquifier xl:text-6xl lg:text-5xl md:text-6xl text-3xl md:px-0 pr-14 pb-7 font-extrabold text-pink-400">Cuidado que Faz a Diferença</h1>
                            
                                        </div>
                                         
                             <p className="transicao w-[90%] lg:w-[80%] md:w-[90%] pb-7 dm-sans-uniquifier md:px-0 font-semibold text-md  md:text-2xl lg:text-2xl text-slate-300  " >
                                 Gestantes em risco merecem atenção especial. Nosso sistema centraliza consultas, exames e alertas, oferecendo um suporte contínuo para que cada decisão clínica seja rápida,
                                  precisa e segura, protegendo tanto a mãe quanto o bebê.
                             </p>
                            <div className=" md:flex md:flex-nowrap gap-x-5 w-full md:items-center md:justify-left  ">
                                
                                                            
  <a href="/login" className="w-full md:w-auto">
    <button className="cursor-pointer flex items-center justify-center w-full md:w-auto px-6 py-3 font-bold text-[1rem] md:text-[1.1rem] 
                       border border-G-700 bg-transparent backdrop-blur-lg 
                       transition-all duration-300 hover:text-[1.25rem] hover:backdrop-blur-3xl  rounded-md text-pink-300">
      ENTRAR NO SISTEMA 
    </button>
    </a>
                            </div>
                            
                        </div>
                       
                </div>
            </SwiperSlide>
    </Swiper>

        </div>                      
        </div>
    
       )
}








{/*export default function Home() {
     return(
        <div className="flex justify-center items-center mt-28 ">
           
                <div className=" p-6 rounded-xl shadow-xl w-96 h-auto border-3 border-pink-700">
       
        <h1 className="text-2xl font-bold text-pink-600 mb-2 text-center">
            Bem-vinda!
        </h1>
        <p className="text-center text-gray-300 mb-5 text-sm">
            Digite seu nome e senha para entrar
        </p>

       
        <form action="#" method="POST" class="space-y-4">
    
            <div>
                <label class="block text-gray-300 mb-1 text-sm" for="nome">Nome</label>
                <input type="text" id="nome" name="nome" placeholder="Seu nome"
                    className="w-full px-3 py-2 border border-pink-700 rounded-lg bg-black text-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm"/>
            </div>

           
            <div>
                <label class="block text-gray-300 mb-1 text-sm" for="senha">Senha</label>
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
    
}*/}