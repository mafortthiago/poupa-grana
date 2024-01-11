import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home/Home";
import { InsertEntry } from "./pages/InsertEntry/InsertEntry";
import { InsertExit } from "./pages/InsertExit/InsertExit";
import "./App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/Gestor"} element={<Home />} />
          <Route path={"/Entrada"} element={<InsertEntry />} />
          <Route path={"/Saída"} element={<InsertExit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
