import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Taberna_Terron from './Taberna_Terron';
import Carta_Bohemia from './pages/Carta';
import Reservas from './pages/Reservas';
import Sobre_Nosotros from './pages/Sobre_Nosotros';
import AvisoLegal from './pages/AvisoLegal';
import Privacidad from './pages/Privacidad';
import Cookies from './pages/Cookies';
import tabernaTerronlogo from './assets/tabernaTerronlogo.png'; // Asegúrate de que la ruta sea correcta

const App: React.FC = () => {

  return (
    <BrowserRouter>
      {/* 4. CLASES DINÁMICAS: Añadimos dark:bg-gray-900 y dark:text-white al fondo principal */}
      <div className="flex flex-col min-h-screen bg-[#170d0b] text-white transition-colors duration-300 ">

        <header className="w-full bg-[#170d0b] border-b border-zinc-700/80 py-4 px-4 sm:px-8 flex flex-wrap gap-4 justify-between items-center font-CormorantGaramond">
          <Link to="/" aria-label="Taberna Terron - Inicio">
            <img
              src={tabernaTerronlogo}
              alt="Taberna Terron - Logo"
              className="h-27 w-27 object-contain"
            />
          </Link>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 sm:gap-x-8">
            <Link
              to="/"
              className="text-sm uppercase tracking-widest text-[#f3ead7] hover:text-[#e8e2d5] transition-colors font-CormorantGaramond"
            >
              Inicio
            </Link>
            <Link
              to="/carta"
              className="text-sm uppercase tracking-widest text-[#f3ead7] hover:text-[#e8e2d5] transition-colors font-CormorantGaramond"
            >
              Carta
            </Link>
            <Link
              to="/sobre-nosotros"
              className="text-sm uppercase tracking-widest text-[#f3ead7] hover:text-[#e8e2d5] transition-colors font-CormorantGaramond"
            >
              Sobre nosotros
            </Link>
            <Link
              to="/reservas"
              className="px-5 py-2.5 rounded-lg text-sm font-semibold uppercase tracking-widest bg-[#e8e2d5] text-[#14161c] hover:bg-white transition-colors font-CormorantGaramond"
            >
              Reservas
            </Link>
          </nav>
        </header>

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Taberna_Terron />} />
            <Route path="/carta" element={<Carta_Bohemia />} />
            <Route path="/sobre-nosotros" element={<Sobre_Nosotros />} />
            <Route path="/reservas" element={<Reservas />} />
            <Route path="/aviso-legal" element={<AvisoLegal />} />
            <Route path="/privacidad" element={<Privacidad />} />
            <Route path="/cookies" element={<Cookies />} />
          </Routes>
        </div>

        <footer className="w-full bg-[#170d0b] border-t border-[#0c3a37] py-8 px-8">
          {/* ... tu footer sigue igual ... */}
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-4 px-4">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
              <Link to="/" className="hover:text-[#f3ead7] text-sm text-center text-[#f3ead7] transition-colors">Taberna Terron</Link>
              <Link to="/aviso-legal" className="hover:text-[#f3ead7] text-sm text-center text-[#f3ead7] transition-colors">Aviso Legal</Link>
              <Link to="/privacidad" className="hover:text-[#f3ead7] text-sm text-center text-[#f3ead7] transition-colors">Política de Privacidad</Link>
              <Link to="/cookies" className="hover:text-[#f3ead7] text-sm text-center text-[#f3ead7] transition-colors">Política de Cookies</Link>
            </div>
            <p className="mt-2 f3ead7 text-sm text-center text-[#f3ead7]">
              © {new Date().getFullYear()} Taberna Terron. Todos los derechos reservados.
            </p>
          </div>
        </footer>

      </div>
    </BrowserRouter>
  );
};

export default App;