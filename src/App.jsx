import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Landing from './Pages/Landing'
import { Routes,Route,BrowserRouter } from 'react-router-dom'
import Login from './Pages/login';
import InscriForm from './Pages/Inscription.jsx';
import Payer from './Pages/payer.jsx';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Landing/>}/>
        <Route path="/login" element={<Login />} /> 
        <Route path="/Inscription" element={<InscriForm />} /> 
        <Route path="/payer" element={<Payer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
