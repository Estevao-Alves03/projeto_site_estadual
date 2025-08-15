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

function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const hideLayout = location.pathname === "/Login";

  return (
    <>
      {!hideLayout && <Navbar />}
      {!hideLayout && <ButtonsTabs />}
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
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Login" element={<Login />} />
          {/* <Route path='/Esportes' element={<Esportes/>}/>
          <Route path='/Destaques' element={<Destaques/>}/>
          <Route path='/UltimasNotícias' element={<UltimasNotícias/>}/>
          <Route path='/Política' element={<Política/>}/> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
