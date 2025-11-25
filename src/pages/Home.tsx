import { Menu, X, Phone, Mail, MapPin, Clock, ChevronRight, Wrench, GraduationCap, Headphones, Package, Award, Shield, Zap, Users } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../components/Logo';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      icon: Headphones,
      title: 'Contrôle Technique',
      slug: 'controle-technique',
      description: 'Solutions complètes pour centres de contrôle technique automobile',
      color: 'from-blue-500 to-blue-600',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: Wrench,
      title: 'Équipement Lavage',
      slug: 'equipement-lavage',
      description: 'Systèmes de lavage professionnels pour véhicules',
      color: 'from-orange-500 to-orange-600',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600'
    },
    {
      icon: GraduationCap,
      title: 'Formation',
      slug: 'formation',
      description: 'Programmes de formation pour professionnels de l\'automobile',
      color: 'from-green-500 to-green-600',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      icon: Package,
      title: 'Maintenance & SAV',
      slug: 'maintenance',
      description: 'Service après-vente et maintenance de vos équipements',
      color: 'from-amber-500 to-amber-600',
      iconBg: 'bg-amber-100',
      iconColor: 'text-amber-600'
    }
  ];

  const stats = [
    { value: '507+', label: 'Clients', icon: Users },
    { value: '800+', label: 'Projets', icon: Award },
    { value: '3000+', label: 'Heures de Formation', icon: GraduationCap },
    { value: '17', label: 'Années d\'Expérience', icon: Shield }
  ];

  const products = [
    { name: 'Contrôle Technique Automobile', color: 'blue' },
    { name: 'Ponts Élévateurs', color: 'orange' },
    { name: 'Technologie de Mesure', color: 'green' },
    { name: 'Connexion au Sol', color: 'blue' },
    { name: 'Air Comprimé', color: 'orange' },
    { name: 'Lavage Automatique', color: 'green' },
    { name: 'Diagnostic et Climatisation', color: 'blue' },
    { name: 'Outillage Professionnel', color: 'orange' },
    { name: 'Lubrification', color: 'green' }
  ];

  const brands = [
    { name: 'Maha', logo: 'https://teg-dz.com/wp-content/uploads/2021/08/maha-150x150.jpg' },
    { name: 'Hunter', logo: 'https://teg-dz.com/wp-content/uploads/2021/08/hunter-1-150x150.jpg' },
    { name: 'Sullair', logo: 'https://teg-dz.com/wp-content/uploads/2021/08/sullair-3-150x150.jpg' },
    { name: 'Christ', logo: 'https://teg-dz.com/wp-content/uploads/2021/08/christ-1-150x150.jpg' },
    { name: 'Texa', logo: 'https://teg-dz.com/wp-content/uploads/2021/08/texa-1-150x150.jpg' },
    { name: 'Hazet', logo: 'https://teg-dz.com/wp-content/uploads/2021/08/hazet-150x150.jpg' },
    { name: 'Vigor', logo: 'https://teg-dz.com/wp-content/uploads/2021/08/vigor-150x150.jpg' },
    { name: 'Algi', logo: 'https://teg-dz.com/wp-content/uploads/2021/08/algi-150x150.jpg' }
  ];

  const clients = ['Kia', 'Peugeot', 'Volkswagen', 'Sovac', 'Cevital', 'Renault'];

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Expertise Reconnue',
      description: '17 ans d\'expérience dans l\'équipement industriel',
      color: 'text-blue-600'
    },
    {
      icon: Shield,
      title: 'Qualité Garantie',
      description: 'Partenaires des plus grandes marques internationales',
      color: 'text-orange-600'
    },
    {
      icon: Zap,
      title: 'Service Rapide',
      description: 'Support technique réactif et efficace',
      color: 'text-green-600'
    },
    {
      icon: Users,
      title: 'Accompagnement',
      description: 'Formation et conseil personnalisés',
      color: 'text-amber-600'
    }
  ];

  const getProductColorClass = (color: string) => {
    const colors: Record<string, string> = {
      blue: 'border-l-blue-500 hover:bg-blue-50',
      orange: 'border-l-orange-500 hover:bg-orange-50',
      green: 'border-l-green-500 hover:bg-green-50'
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/98 backdrop-blur-md shadow-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Logo className="text-blue-600" variant="dark" />
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#accueil" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Accueil</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Services</a>
              <a href="#produits" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Produits</a>
              <a href="#apropos" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">À Propos</a>
              <a href="#contact" className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg shadow-blue-600/30 font-medium">
                Contact
              </a>
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
              <a href="#accueil" className="block text-gray-700 hover:text-blue-600 py-2 font-medium">Accueil</a>
              <a href="#services" className="block text-gray-700 hover:text-blue-600 py-2 font-medium">Services</a>
              <a href="#produits" className="block text-gray-700 hover:text-blue-600 py-2 font-medium">Produits</a>
              <a href="#apropos" className="block text-gray-700 hover:text-blue-600 py-2 font-medium">À Propos</a>
              <a href="#contact" className="block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-lg text-center font-medium">
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://teg-dz.com/wp-content/themes/teg/assets/img/TEG_Fond%20blue.jpg"
            alt="TEG Background"
            className="w-full h-full object-cover opacity-95"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/75 to-slate-900/80"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                Depuis 2006 - Leader en Algérie
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
              Technique Équipements <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Garage</span>
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 mb-8 font-medium drop-shadow-lg">
              Spécialiste en équipements automobiles et industriels
            </p>
            <p className="text-lg text-blue-50 mb-10 max-w-3xl mx-auto drop-shadow-md">
              Solutions complètes pour votre atelier : équipements de pointe, formation professionnelle, conseil expert et maintenance garantie
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-10 py-4 rounded-xl hover:from-orange-600 hover:to-yellow-600 transition-all text-lg font-semibold shadow-xl shadow-orange-500/40 hover:shadow-2xl hover:shadow-orange-500/50 transform hover:scale-105">
                Demander un Devis Gratuit
              </a>
              <a href="#services" className="border-2 border-white text-white px-10 py-4 rounded-xl hover:bg-white hover:text-blue-900 transition-all text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 backdrop-blur-sm">
                Découvrir nos Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="apropos" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://teg-dz.com/wp-content/themes/teg/assets/img/hero-bg.jpg"
            alt="TEG Workshop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/90 to-slate-900/95"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block mb-6">
                <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                  À Propos de Nous
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
                Votre Partenaire de <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Confiance</span> depuis 2006
              </h2>
              <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                TEG (Technique Équipements Garage) est le leader algérien en équipements automobiles et industriels. Depuis plus de 17 ans, nous accompagnons les professionnels avec des solutions complètes et innovantes.
              </p>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                Notre expertise couvre l'ensemble des besoins de votre atelier : du contrôle technique automobile aux équipements de lavage, en passant par les systèmes de diagnostic et l'outillage professionnel. Nous sommes fiers d'être les partenaires exclusifs des plus grandes marques internationales.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">500+</div>
                  <div className="text-blue-100 font-medium">Clients Satisfaits</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">17 Ans</div>
                  <div className="text-blue-100 font-medium">D'Excellence</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {whyChooseUs.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="inline-block p-3 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl mb-4">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-blue-100 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Nos Services</h2>
            <p className="text-xl text-gray-600">Un accompagnement complet pour votre activité</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={`/service/${service.slug}`}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden transform hover:-translate-y-2"
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color}`}></div>
                <div className={`inline-block p-4 ${service.iconBg} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`h-10 w-10 ${service.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                <span className="text-blue-600 font-semibold text-sm group-hover:underline">En savoir plus →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produits" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Nos Produits</h2>
            <p className="text-xl text-gray-600">Équipements de pointe pour professionnels</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Link
                key={index}
                to={`/produits?categorie=${encodeURIComponent(product.name)}`}
                className={`bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center space-x-4 border-l-4 ${getProductColorClass(product.color)} transform hover:scale-105 cursor-pointer`}
              >
                <div className="flex-shrink-0">
                  <ChevronRight className="h-6 w-6 text-gray-400" />
                </div>
                <span className="text-gray-800 font-semibold">{product.name}</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/produits"
              className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all font-semibold shadow-lg"
            >
              Voir Tous les Produits
            </Link>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Nos Partenaires</h2>
            <p className="text-xl text-gray-600">Marques de confiance internationales</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center border border-gray-100 transform hover:scale-110"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-32 h-32 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="apropos" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Ils Nous Font Confiance</h2>
            <p className="text-xl text-gray-600">Références clients prestigieuses</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center border border-gray-100 transform hover:scale-110"
              >
                <span className="text-xl font-bold text-gray-700">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-slate-900 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Contactez-Nous</h2>
            <p className="text-xl text-blue-200">Notre équipe est à votre disposition</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="inline-block p-4 bg-orange-500 rounded-2xl mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold mb-3 text-lg">Adresse</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                05, Avenue de L'ALN<br />
                Hussein-dey Caroubier<br />
                Alger, Algérie
              </p>
            </div>
            <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="inline-block p-4 bg-blue-500 rounded-2xl mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold mb-3 text-lg">Téléphone</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                +213 (0) 560 020 163<br />
                +213 (0) 560 020 714
              </p>
            </div>
            <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="inline-block p-4 bg-green-500 rounded-2xl mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold mb-3 text-lg">Email</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                commercial@teg-dz.com
              </p>
            </div>
            <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="inline-block p-4 bg-amber-500 rounded-2xl mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold mb-3 text-lg">Horaires</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                9:00h - 17:00h<br />
                Dimanche - Vendredi
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-6">
            <Logo className="text-white" variant="light" />
          </div>
          <div className="text-center space-y-3">
            <p className="text-sm">
              © {new Date().getFullYear()} SARL TEG - Technique Équipements Garage. Tous droits réservés.
            </p>
            <p className="text-sm text-gray-500">
              Fondée en 2006 | 17 ans d'excellence en équipements automobiles et industriels
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
