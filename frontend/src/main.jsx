import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import App from "./App";
import Login from "./components/Login";
import Funcionarios from "./components/restrito/funcionarios";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
   {
    path: "/funcionarios",
    element: <Funcionarios />
  }
   

  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <RouterProvider router={router} />
 
);