import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import { Logo } from './components/Logo';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductCategories from './pages/ProductCategories';
import ProductDetail from './pages/ProductDetail';
import ServiceDetail from './pages/ServiceDetail';
import Quote from './pages/Quote';
import About from './pages/About';
import Realisations from './pages/Realisations';
import References from './pages/References';
import Blog from './pages/Blog';
import Article from './pages/Article';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <nav className="fixed top-0 w-full bg-white shadow-sm border-b border-gray-200 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link to="/" className="flex items-center">
                <Logo className="text-blue-600" variant="dark" />
              </Link>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2 transition-colors">
                  Accueil
                </Link>
                <Link to="/produits" className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2 transition-colors">
                  Produits
                </Link>
                <Link to="/blog" className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2 transition-colors">
                  Blog
                </Link>
                <Link to="/realisations" className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2 transition-colors">
                  Réalisations
                </Link>
                <Link to="/references" className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2 transition-colors">
                  Références
                </Link>
                <Link to="/a-propos" className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2 transition-colors">
                  À Propos
                </Link>
               
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button 
                  onClick={toggleMobileMenu}
                  className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Sidebar */}
        <div className={`fixed inset-0 z-40 md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={closeMobileMenu}
          ></div>
          
          {/* Sidebar */}
          <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <Logo className="text-blue-600" variant="dark" />
              <button 
                onClick={closeMobileMenu}
                className="text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <nav className="mt-4">
              <div className="px-4 space-y-2">
                <Link 
                  to="/" 
                  className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium px-3 py-3 rounded-lg transition-colors"
                  onClick={closeMobileMenu}
                >
                  Accueil
                </Link>
                <Link 
                  to="/produits" 
                  className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium px-3 py-3 rounded-lg transition-colors"
                  onClick={closeMobileMenu}
                >
                  Produits
                </Link>
                <Link 
                  to="/blog" 
                  className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium px-3 py-3 rounded-lg transition-colors"
                  onClick={closeMobileMenu}
                >
                  Blog
                </Link>
                <Link 
                  to="/realisations" 
                  className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium px-3 py-3 rounded-lg transition-colors"
                  onClick={closeMobileMenu}
                >
                  Réalisations
                </Link>
                <Link 
                  to="/references" 
                  className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium px-3 py-3 rounded-lg transition-colors"
                  onClick={closeMobileMenu}
                >
                  Références
                </Link>
                <Link 
                  to="/a-propos" 
                  className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium px-3 py-3 rounded-lg transition-colors"
                  onClick={closeMobileMenu}
                >
                  À Propos
                </Link>
              </div>
            </nav>
          </div>
        </div>

        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produits" element={<ProductCategories />} />
            <Route path="/produits/:category" element={<Products />} />
            <Route path="/produit/:id" element={<ProductDetail />} />
            <Route path="/service/:id" element={<ServiceDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<Article />} />
            <Route path="/devis" element={<Quote />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/realisations" element={<Realisations />} />
            <Route path="/references" element={<References />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
