import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home/Home";

import { Gestor } from "./pages/Gestor/Gestor";
import "./App.scss";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/Gestor"} element={<Gestor />} />
          <Route path={"/"} element={<Home />} />
          <Route path={"/Login"} element={<Login />} />
          <Route path={"/cadastro"} element={<Cadastro />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
