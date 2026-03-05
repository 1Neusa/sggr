import  {useState}  from "react";
import Hamburger from 'hamburger-react';
import {Link} from "react-router-dom";

export default function Menubar( ){


const [isOpen, setOpen] = useState(false);

        return(
<div id="menubar" className="  pb-2  z-30 top-0 left-0 w-full fixed "> 

      <div className="flex justify-between transicao  md:pl-4   h-18 items-center">
           
            <div className="w-[20%] ml-5 mt-1 lg:ml-16 transicao " >
                  <Link to="/" onClick={() => window.scrollTo(0,0)}><img src="icons/logo.png" className="w-50 md:w-20"  /></Link>
            </div>
           
                   <nav className=" md:mr-20 md:w-[80%] gap-3 transicao left-0 justify-around  shadow-md items-center hidden md:flex md:static md:flex-row  md:space-x-6 md:bg-transparent md:shadow-none">
                        
                        <div className="w-[70%] ">
                              <ul className="mx-8 lg:ml-18 transicao text-xl lg:text-[120%] xl:text-[140%] text-blue-900 list-none px-5 gap-6 flex items-center  ">
                              <li><Link className="transicao link linkTop text-pink-400" to="/" onClick={() => window.scrollTo(0,0)}>Início</Link></li>
                              <li><a className="transicao link linkTop text-pink-400" href="/Servicos" >Serviços</a></li>
                              
                              
                              <li><Link className="transicao link linkTop text-pink-400 " to="/sobre" onClick={() => window.scrollTo(0,0)}>Sobre Nós</Link></li>
                              <li><a className="transicao link linkTop text-pink-400" href="Contacto">Contactos</a></li>
                              <li><a className="transicao link linkTop text-pink-400" href="/Restrito">Área Restrita</a></li>
                  
                              </ul>
                        </div>

                         <div className="   gap-x-8 justify-end items-center  w-[45%] transicao hidden lg:flex ">
                                    
                                    <div className="flex-col justify-between">
                                          <span className="flex justify-between whitespace-nowrap linkTop text-pink-300 hover:text-pink-400 text-sm "><img src="icons/whatsapp.png" className="w-5"></img><Link to="https://wa.me/244921999215?text=Olá,%20Gravidas%20quero%20mais%20informações%20Sobre%20" target="_blank" > +244 921 999 215 </Link></span>  
                                          <span className="flex justify-between whitespace-nowrap linkTop text-pink-300 hover:text-pink-400 text-sm gap-x-1 "><img src="icons/email.png" className=" bg-gray-400 w-4"></img>info@gravidas-lda.ao</span>  
                                    
                                    </div>
                                    
                                    
                                </div>

                  </nav>
                
                              
                  <div  className="md:hidden mr-4 flex static items-center ">
                        <Hamburger color="#005B93" toggled={isOpen} toggle={setOpen} />
                        {isOpen &&
                        <nav className="h-[645px] bg-white  absolute top-20 pt-10 right-0 pl-3 border-l-gray-400  text-gray-700  border-r-gray-400 border-b-gray-400 border-3 w-[300px] shadow-2xl flex-col space-y-6 py-4 md:shadow-none">
                              <div className="block">
                                    <ul className="transicao text-[110%]  list-none space-y-4 pl-1 "> 
                              <li onClick={()=>setOpen(false)} ><Link className="transicao link hover:text-sky-800" to="/" onClick={() => window.scrollTo(0,0)}>Início</Link></li>
                              <li onClick={()=>setOpen(false)} ><a className="transicao link hover:text-sky-800" href="/Servicos">Serviços</a></li>
                        
                  
                              <li onClick={()=>setOpen(false)} ><Link className="transicao link hover:text-sky-800" to="/sobre" onClick={() => window.scrollTo(0,0)}>Sobre Nós</Link></li>
                              <li onClick={()=>setOpen(false)} ><a className="transicao link hover:text-sky-800" href="Contacto">Contactos</a></li>
                              <li onClick={()=>setOpen(false)} ><a className="transicao link hover:text-sky-800" href="Restrito">Área Restrita</a></li>
                              
                              </ul>
                              </div>
                              
               </nav>}
                  </div>
                  
                 
      </div>

    
</div>
        )
}