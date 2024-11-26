import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Chatcita from './components/Chatcita';
import Perfil from './components/Perfil';
import Informacion from './components/Informacion';
import Cardiologia from './components/Cardiologia';
import TermsAndConditions from './components/TermsAndConditions';
import ContactUs from './components/ContactUs';
import Creadores from './components/Creadores';


function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} /> {/* Redirige a login */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/chatcita" element={<Chatcita />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/informacion" element={<Informacion />} />
        <Route path="/cardiologia" element={<Cardiologia />} />
        <Route path="/terminos" element={<TermsAndConditions />} />
        <Route path="/contacto" element={<ContactUs />} />
        <Route path="/creadores" element={<Creadores />} />
      </Routes>
    </Router>
  )
}

export default App
