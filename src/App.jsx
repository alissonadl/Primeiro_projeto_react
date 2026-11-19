import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home"; //Importando a FUNÇÃO Home do arquivo "home.jsx" (Não precisa colocar a extensão do arquivo)
//O "Import Home" acima não está dizendo "pegue uma função chamada Home de dentro de home.jsx". Ela está dizendo: "pegue o export default de ./pages/home e dê a ele o nome de Home aqui dentro do App.jsx".
//Ou seja, você pode usar: import QUALQUER_NOME from "./pages/home" e sempre se referir a esse item como QUALQUER_NOME neste módulo aqui.
import Login from "./pages/login"; //As funções precisam iniciar com a primeira letra maiúscula. É uma pecuiaridade do próprio react.

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
