import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Landing from './Pages/Landing'
import { Routes,Route,BrowserRouter } from 'react-router-dom'
import Login from './Pages/login';
import InscriForm from './Pages/Inscription.jsx';
import Payer from './Pages/payer.jsx';
import { Accueil } from './Pages/Etudiants/Accueil/Accueil.jsx';
import  Langue  from './Pages/Etudiants/Langue/Langue.jsx';
import TestNiveau from './Pages/Etudiants/TestNiveau/TestNiveau.jsx';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Landing/>}/>
        <Route path="/login" element={<Login />} /> 
        <Route path="/Inscription" element={<InscriForm />} /> 
        <Route path="/payer" element={<Payer />} />
        <Route path="/lang/:langue" element={<TestNiveau />} />
        <Route path='/langue' element={<Langue />} />
        <Route path='/home' element={<Accueil/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
