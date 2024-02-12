import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/";
import { Home } from "./pages/Home/";
import { AuthProvider } from "./context/AuthContext";
import { Gestor } from "./pages/Gestor/";
import "./App.scss";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path={"/Gestor"}
            element={
              <ProtectedRoute component={Gestor} redirectTo={"/login"} />
            }
          />
          <Route
            path={"/"}
            element={<ProtectedRoute component={Home} redirectTo={"/login"} />}
          />
          <Route
            path={"/Login"}
            element={<PublicRoute component={Login} redirectTo={"/gestor"} />}
          />
          <Route
            path={"/cadastro"}
            element={
              <PublicRoute component={Cadastro} redirectTo={"/gestor"} />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

function ProtectedRoute({ component: Component, redirectTo }) {
  const localUser = JSON.parse(window.localStorage.getItem("user"));
  return localUser ? <Component /> : <Navigate to={redirectTo} />;
}

function PublicRoute({ component: Component, redirectTo }) {
  const localUser = JSON.parse(window.localStorage.getItem("user"));
  return !localUser ? <Component /> : <Navigate to={redirectTo} />;
}

export default App;
