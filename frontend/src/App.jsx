import NavBar from "./components/NavBar";
import Destinos from "./pages/Destinos";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Global.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinos" element={<Destinos />} />
        </Routes>
      </BrowserRouter>
      {/* <Destinos/> */}
    </div>
  );
}

export default App;
