import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home/Home";
import { InsertEntry } from "./pages/InsertEntry/InsertEntry";
import { InsertExit } from "./pages/InsertExit/InsertExit";
import { Gestor } from "./pages/Gestor/Gestor";
import "./App.scss";
import Footer from "./components/Footer";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/Gestor"} element={<Gestor />} />
          <Route path={"/"} element={<Home />} />
          <Route path={"/Entrada"} element={<InsertEntry />} />
          <Route path={"/Saída"} element={<InsertExit />} />
          <Route path={"/Login"} element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
