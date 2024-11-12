import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Landing from './Pages/Landing'
import { Routes,Route,BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Landing/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
