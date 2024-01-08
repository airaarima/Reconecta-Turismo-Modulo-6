import NavBar from "./components/NavBar";
import Destinos from "./pages/Destinos";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Global.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contato from "./pages/Contato";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinos" element={<Destinos />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/contato" element={<Contato/>}/>
          <Route path="/cadastro" element={<Cadastro/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
