import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./Layouts/Navbar";
import Footer from "./Layouts/Footer";
import ButtonsTabs from "./Layouts/ButtonsTabs";
import Admin from "./Pages/Admin";
import Esportes from "./Pages/Esportes";
import Destaques from "./Pages/Destaques";
import UltimasNotícias from "./Pages/UltimasNotícias";
import Política from "./Pages/Política";
import Login from "./Pages/Login";
import Infraestrutura from "./Pages/Infraestrutura";
import Saúde from "./Pages/Saude";
import Cultura from "./Pages/Cultura";
import Educação from "./Pages/Educacao";

function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  
  // Esconde Navbar e Footer no Login
  const hideLayout = location.pathname === "/Login";
  
  // Esconde ButtonsTabs no Admin e no Login
  const hideTabs = location.pathname === "/admin" || hideLayout;

  return (
    <>
      {!hideLayout && <Navbar />}
      {!hideTabs && <ButtonsTabs />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* pagina de abas de administraçao */}
          <Route path="/Admin" element={<Admin />} />
          {/* pagina de login para editores e admins */}
          <Route path="/Login" element={<Login />} />
          {/* abas principais da pagina */}
          <Route path="/Destaques" element={<Destaques />} />
          <Route path="/UltimasNotícias" element={<UltimasNotícias />} />
          <Route path="/Política" element={<Política />} />
          <Route path="/Esportes" element={<Esportes />} />
          <Route path="/Infraestrutura" element={<Infraestrutura />} />
          <Route path="/Saúde" element={<Saúde />} />
          <Route path="/Cultura" element={<Cultura />} />=
          <Route path="/Educação" element={<Educação />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
