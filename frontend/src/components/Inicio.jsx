import Apresentacao from "./Apresentaçao"
import Menubar from "./Menubar"
import {Link} from "react-router-dom";
<Link to="/login">Ir para Login</Link>




export default function Inicio(){
    return(
        <div>
          <Menubar/>  
          <Apresentacao/>  
        </div>
    )
}