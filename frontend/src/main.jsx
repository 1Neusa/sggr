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
import Principal from "./components/restrito/Principal";
import Gestantes from "./components/restrito/Gestantes";
import Exames from "./components/restrito/Exames";
import Consultas from "./components/restrito/Consultas";



const router = createBrowserRouter([

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
   },
  

  {
    path: "/login",
    element: <Login />,
  },
  {
   path: "/Principal",
    element: <Principal />
  },
   {
    path: "/funcionarios",
    element: <Funcionarios />
  },
  
  {
    path: "/gestantes",
    element: <Gestantes />,
  },
  {
    path: "/consultas",
    element: <Consultas />,
  },
  {
    path: "/exames",
    element: <Exames />,
  }

  

   

  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <RouterProvider router={router} />
 
);