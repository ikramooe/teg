import { ArrowRight, Wrench, Car, Gauge, Zap, Wind, Droplets, Cog, Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from '../components/Logo';

export default function ProductCategories() {
  const categories = [
    {
      id: 'controle-technique',
      title: 'Contrôle Technique Automobile',
      description: 'Équipements complets pour centres de contrôle technique : bancs de freinage, analyseurs de gaz, contrôle d\'éclairage',
      icon: Car,
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=400&fit=crop',
      color: 'from-blue-500 to-blue-600',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      products: ['Bancs de freinage MAHA', 'Analyseurs de gaz', 'Contrôle d\'éclairage', 'Bancs de suspension'],
      count: 15
    },
    {
      id: 'ponts-elevateurs',
      title: 'Ponts Élévateurs',
      description: 'Ponts élévateurs 2 et 4 colonnes, ciseaux hydrauliques, équipements de levage professionnels',
      icon: Package,
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop',
      color: 'from-orange-500 to-orange-600',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
      products: ['Ponts 2 colonnes', 'Ponts 4 colonnes', 'Ponts ciseaux', 'Élévateurs mobiles'],
      count: 12
    },
    {
      id: 'technologie-mesure',
      title: 'Technologie de Mesure',
      description: 'Équipements de mesure et diagnostic : géométrie, équilibrage, parallélisme des roues',
      icon: Gauge,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      color: 'from-green-500 to-green-600',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      products: ['Bancs de géométrie', 'Équilibreuses', 'Démonte-pneus', 'Analyseurs de suspension'],
      count: 18
    },
    {
      id: 'connexion-sol',
      title: 'Connexion au Sol',
      description: 'Équipements pour pneumatiques : démonte-pneus, équilibreuses, gonflage automatique',
      icon: Cog,
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop',
      color: 'from-purple-500 to-purple-600',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      products: ['Démonte-pneus automatiques', 'Équilibreuses électroniques', 'Gonflage azote', 'Réparation pneus'],
      count: 10
    },
    {
      id: 'air-comprime',
      title: 'Air Comprimé',
      description: 'Compresseurs d\'air, réseaux pneumatiques, équipements de distribution d\'air comprimé',
      icon: Wind,
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop',
      color: 'from-cyan-500 to-cyan-600',
      iconBg: 'bg-cyan-100',
      iconColor: 'text-cyan-600',
      products: ['Compresseurs SULLAIR', 'Réseaux pneumatiques', 'Sécheurs d\'air', 'Enrouleurs pneumatiques'],
      count: 8
    },
    {
      id: 'lavage-automatique',
      title: 'Lavage Automatique',
      description: 'Systèmes de lavage haute pression, tunnels de lavage, équipements de nettoyage professionnel',
      icon: Droplets,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      color: 'from-teal-500 to-teal-600',
      iconBg: 'bg-teal-100',
      iconColor: 'text-teal-600',
      products: ['Tunnels de lavage CHRIST', 'Nettoyeurs haute pression', 'Systèmes de recyclage', 'Aspirateurs industriels'],
      count: 14
    },
    {
      id: 'diagnostic-climatisation',
      title: 'Diagnostic et Climatisation',
      description: 'Équipements de diagnostic automobile, stations de climatisation, analyseurs moteur',
      icon: Zap,
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=400&fit=crop',
      color: 'from-indigo-500 to-indigo-600',
      iconBg: 'bg-indigo-100',
      iconColor: 'text-indigo-600',
      products: ['Stations de clim TEXA', 'Valises de diagnostic', 'Analyseurs de gaz', 'Oscilloscopes'],
      count: 16
    },
    {
      id: 'outillage-professionnel',
      title: 'Outillage Professionnel',
      description: 'Outillage spécialisé automobile, coffrets d\'outils, équipements d\'atelier',
      icon: Wrench,
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop',
      color: 'from-amber-500 to-amber-600',
      iconBg: 'bg-amber-100',
      iconColor: 'text-amber-600',
      products: ['Coffrets HAZET', 'Outillage VIGOR', 'Clés dynamométriques', 'Extracteurs'],
      count: 25
    },
    {
      id: 'lubrification',
      title: 'Lubrification',
      description: 'Équipements de vidange, distribution d\'huiles et fluides, systèmes de lubrification',
      icon: Droplets,
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop',
      color: 'from-rose-500 to-rose-600',
      iconBg: 'bg-rose-100',
      iconColor: 'text-rose-600',
      products: ['Équipements ALGI', 'Fosses de vidange', 'Distributeurs d\'huile', 'Récupérateurs de fluides'],
      count: 11
    }
  ];

  const stats = [
    { value: '150+', label: 'Produits Disponibles' },
    { value: '9', label: 'Catégories' },
    { value: '15+', label: 'Marques Partenaires' },
    { value: '17', label: 'Années d\'Expérience' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Produits</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Découvrez notre gamme complète d'équipements automobiles et industriels des plus grandes marques internationales
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">{stat.value}</div>
                  <div className="text-blue-100 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Catégories de Produits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explorez nos différentes catégories d'équipements professionnels pour votre atelier
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div
                key={category.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-80`}></div>
                  <div className="absolute top-4 left-4">
                    <div className={`inline-block p-3 ${category.iconBg} rounded-xl`}>
                      <category.icon className={`h-6 w-6 ${category.iconColor}`} />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-gray-900">{category.count} produits</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {category.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Products Preview */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Produits phares :</h4>
                    <ul className="space-y-1">
                      {category.products.slice(0, 3).map((product, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                          {product}
                        </li>
                      ))}
                      {category.products.length > 3 && (
                        <li className="text-sm text-gray-500 italic">
                          +{category.products.length - 3} autres produits...
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Link
                    to={`/produits/${category.id}`}
                    className="inline-flex items-center gap-2 w-full justify-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all font-semibold shadow-lg group-hover:shadow-xl transform group-hover:scale-105"
                  >
                    Voir les Produits
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Marques Partenaires</h2>
            <p className="text-xl text-gray-600">
              Nous travaillons exclusivement avec les leaders mondiaux de l'équipement automobile
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-8">
            {[
              { name: 'MAHA', logo: 'https://teg-dz.com/wp-content/uploads/2021/08/maha-150x150.jpg' },
              { name: 'Hunter', logo: 'https://teg-dz.com/wp-content/uploads/2021/08/hunter-1-150x150.jpg' },
              { name: 'Sullair', logo: 'https://teg-dz.com/wp-content/uploads/2021/08/sullair-3-150x150.jpg' },
              { name: 'Christ', logo: 'https://teg-dz.com/wp-content/uploads/2021/08/christ-1-150x150.jpg' },
              { name: 'Texa', logo: 'https://teg-dz.com/wp-content/uploads/2021/08/texa-1-150x150.jpg' },
              { name: 'Hazet', logo: 'https://teg-dz.com/wp-content/uploads/2021/08/hazet-150x150.jpg' },
              { name: 'Vigor', logo: 'https://teg-dz.com/wp-content/uploads/2021/08/vigor-150x150.jpg' },
              { name: 'Algi', logo: 'https://teg-dz.com/wp-content/uploads/2021/08/algi-150x150.jpg' }
            ].map((brand, index) => (
              <div
                key={index}
                className="bg-gray-50 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 flex items-center justify-center transform hover:scale-110"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-16 h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Besoin d'Aide pour Choisir ?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Nos experts vous accompagnent dans le choix des équipements adaptés à vos besoins
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/devis"
              className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-3 rounded-xl hover:from-orange-600 hover:to-yellow-600 transition-all font-semibold shadow-lg"
            >
              Demander un Devis Gratuit
            </Link>
            <Link
              to="/a-propos"
              className="border-2 border-white text-white px-8 py-3 rounded-xl hover:bg-white hover:text-blue-900 transition-all font-semibold"
            >
              Contacter un Expert
            </Link>
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
