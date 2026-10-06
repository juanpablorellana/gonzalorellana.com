import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './styles.css';

import Home from './pages/Home'
import Navbar from './pages/Navbar'
import Biografia from './pages/Biografia'
import Contacto from './pages/Contacto'
import Clases from './pages/Clases'
import Galeria from './pages/Galeria'
import Footer from './pages/Footer'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="biografia" element={<Biografia />} />
            <Route path="contacto" element={<Contacto />} />
            <Route path="clases" element={<Clases />} />
            <Route path="galeria/:categoria/:tipos" element={<Galeria />} />
            <Route path="*" element={<Navigate to='/' replace />} />
          </Route>
        </Routes>
      </BrowserRouter>  
      <Footer />
    </>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
