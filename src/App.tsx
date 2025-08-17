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
import Sports from "./Pages/Sports";
import Highlights from "./Pages/Highlights";
import LatestNews from "./Pages/LatestNews";
import Policy from "./Pages/Policy";
import Login from "./Pages/Login";
import Infrastructure from "./Pages/Infrastructure";
import Health from "./Pages/Health";
import Culture from "./Pages/Culture";
import Education from "./Pages/Education";
import NewsLayout from "./Layouts/LayoutNews/NewsLayout";
import NewsDetail from "./Layouts/LayoutNews/NewsDetail"; // Você precisará criar este componente

function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  // Esconde Navbar e Footer no Login
  const hideLayout = location.pathname === "/Login";

  // Esconde ButtonsTabs no Admin, Login e Notícia
  const hideTabs = 
    location.pathname === "/admin" || 
    hideLayout ||
    location.pathname.startsWith("/noticia/");

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
      <Routes>
        {/* Login fora do Layout */}
        <Route path="/Login" element={<Login />} />

        {/* Página de notícia com layout especial */}
        <Route path="/noticia/:id" element={
          <NewsLayout>
            <NewsDetail />
          </NewsLayout>
        } />

        {/* Todas as outras páginas usam o Layout padrão */}
        <Route
          path="*"
          element={
            <Layout>
              <Routes>
                <Route path="/Admin" element={<Admin />} />
                <Route path="/Destaques" element={<Highlights />} />
                <Route path="/UltimasNoticias" element={<LatestNews />} />
                <Route path="/Politica" element={<Policy />} />
                <Route path="/Esportes" element={<Sports />} />
                <Route path="/Infraestrutura" element={<Infrastructure />} />
                <Route path="/Saude" element={<Health />} />
                <Route path="/Cultura" element={<Culture />} />
                <Route path="/Educacao" element={<Education />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;