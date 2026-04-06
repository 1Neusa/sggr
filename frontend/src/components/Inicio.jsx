import Apresentacao from "./Apresentacao"
import Menubar from "./Menubar"
import {Link} from "react-router-dom";
<Link to="/login">Ir para Login</Link>
import "../App.css";




export default function Inicio(){
    return(
        <div>
          <Menubar/>  
          <Apresentacao/>  
        </div>
    )
}