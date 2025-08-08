import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Layouts/Navbar'
import Footer from './Layouts/Footer';
import ButtonsTabs from './Layouts/ButtonsTabs';
import Admin from './Pages/Admin';
import Esportes from './Pages/Esportes';
import Destaques from './Pages/Destaques';
import UltimasNotícias from './Pages/UltimasNotícias';
import Política from './Pages/Política';

function App() {
  return (
    <Router>
      <Navbar/>
      <ButtonsTabs/>
      <Routes>
        <Route path='/Admin' element={<Admin/>}/>
        {/* <Route path='/Esportes' element={<Esportes/>}/>
        <Route path='/Destaques' element={<Destaques/>}/>
        <Route path='/UltimasNotícias' element={<UltimasNotícias/>}/>
        <Route path='/Política' element={<Política/>}/> */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
