import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import Login from "./components/Login";
import Funcionarios from "./components/restrito/funcionarios";
import SobreNos from "./components/SobreNos";
import Contacto from "./components/Contacto";
import Inicio from "./components/Inicio";
import Servicos from "./components/Servicos";



const router = createBrowserRouter([

  {
    path: "/login",
    element: <Login />,
  },
   {
    path: "/funcionarios",
    element: <Funcionarios />
  },
  {
    path: "/SobreNos",
    element:<SobreNos/>
  },
  {
    path: "/Contacto",
    element:<Contacto/>
  },
  {
    path: "/",
    element: <Inicio/>
  },
   {
    path: "/Servicos",
    element: <Servicos/>
   }
  

   

  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <RouterProvider router={router} />
 
);