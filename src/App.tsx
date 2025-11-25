import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Logo } from './components/Logo';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import ServiceDetail from './pages/ServiceDetail';
import Quote from './pages/Quote';
import About from './pages/About';
import Realisations from './pages/Realisations';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <nav className="fixed w-full bg-white/98 backdrop-blur-md shadow-md z-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <Link to="/" className="flex items-center">
                <Logo className="text-blue-600" variant="dark" />
              </Link>

              <div className="hidden md:flex items-center space-x-8">
                <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Accueil</Link>
                <Link to="/produits" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Produits</Link>
                <Link to="/realisations" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Réalisations</Link>
                <Link to="/a-propos" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">À Propos</Link>
                <Link
                  to="/devis"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg shadow-blue-600/30 font-medium"
                >
                  Demander un Devis
                </Link>
              </div>

              <button
                className="md:hidden text-gray-700"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-100">
              <div className="px-4 py-4 space-y-3">
                <Link to="/" className="block text-gray-700 hover:text-blue-600 py-2 font-medium">Accueil</Link>
                <Link to="/produits" className="block text-gray-700 hover:text-blue-600 py-2 font-medium">Produits</Link>
                <Link to="/realisations" className="block text-gray-700 hover:text-blue-600 py-2 font-medium">Réalisations</Link>
                <Link to="/a-propos" className="block text-gray-700 hover:text-blue-600 py-2 font-medium">À Propos</Link>
                <Link
                  to="/devis"
                  className="block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-lg text-center font-medium"
                >
                  Demander un Devis
                </Link>
              </div>
            </div>
          )}
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produits" element={<Products />} />
          <Route path="/produit/:id" element={<ProductDetail />} />
          <Route path="/service/:id" element={<ServiceDetail />} />
          <Route path="/devis" element={<Quote />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/realisations" element={<Realisations />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
