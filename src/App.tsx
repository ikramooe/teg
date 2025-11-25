import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
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
                <button className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>

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
