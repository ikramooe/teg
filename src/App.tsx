import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { Logo } from './components/Logo';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import ServiceDetail from './pages/ServiceDetail';
import Quote from './pages/Quote';
import About from './pages/About';
import Realisations from './pages/Realisations';
import References from './pages/References';

function App() {
  return (
    <BrowserRouter>
      <div style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
        <Navbar expand="lg" fixed="top" bg="white" className="shadow-sm border-bottom">
          <Container>
            <Navbar.Brand as={Link} to="/">
              <Logo className="text-primary" variant="dark" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto align-items-center">
                <Nav.Link as={Link} to="/" className="fw-medium px-3">Accueil</Nav.Link>
                <Nav.Link as={Link} to="/produits" className="fw-medium px-3">Produits</Nav.Link>
                <Nav.Link as={Link} to="/realisations" className="fw-medium px-3">Réalisations</Nav.Link>
                <Nav.Link as={Link} to="/references" className="fw-medium px-3">Références</Nav.Link>
                <Nav.Link as={Link} to="/a-propos" className="fw-medium px-3">À Propos</Nav.Link>
                <Nav.Link as={Link} to="/devis" className="ms-lg-2">
                  <Button variant="primary" className="fw-medium">
                    Demander un Devis
                  </Button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produits" element={<Products />} />
          <Route path="/produit/:id" element={<ProductDetail />} />
          <Route path="/service/:id" element={<ServiceDetail />} />
          <Route path="/devis" element={<Quote />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/references" element={<References />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
