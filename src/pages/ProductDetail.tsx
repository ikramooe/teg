import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Package, Shield, Clock, Phone } from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams();

  const products: Record<string, any> = {
    '1': {
      name: 'Pont Élévateur 4 Colonnes',
      category: 'Ponts Élévateurs',
      brand: 'OMCN',
      description: 'Pont élévateur 4 colonnes professionnel de haute qualité, conçu pour les ateliers exigeants.',
      longDescription: 'Ce pont élévateur 4 colonnes représente le summum de la technologie italienne. Conçu pour une utilisation intensive en atelier professionnel, il offre une capacité de levage de 5 tonnes avec une sécurité maximale. Les colonnes sont équipées de systèmes de verrouillage automatique et de sécurités anti-chute conformes aux normes européennes les plus strictes.',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800',
      features: [
        'Capacité de levage: 5 tonnes',
        'Hauteur de levage: 1850 mm',
        'Alimentation électrique: 380V triphasé',
        'Système de verrouillage automatique',
        'Conformité CE',
        'Garantie 2 ans pièces et main d\'œuvre',
        'Installation et formation incluses'
      ],
      specifications: {
        'Capacité': '5000 kg',
        'Hauteur maximale': '1850 mm',
        'Hauteur minimale': '100 mm',
        'Temps de levage': '60 secondes',
        'Alimentation': '380V 50Hz',
        'Puissance moteur': '3 kW',
        'Poids': '1200 kg'
      }
    },
    '2': {
      name: 'Station Lavage Haute Pression',
      category: 'Équipement Lavage',
      brand: 'Kärcher',
      description: 'Système complet de lavage haute pression pour véhicules professionnels.',
      longDescription: 'Station de lavage professionnelle équipée de la technologie haute pression Kärcher. Idéale pour les centres de lavage et ateliers automobiles, elle garantit un nettoyage efficace tout en économisant l\'eau et l\'énergie.',
      image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800',
      features: [
        'Pression réglable jusqu\'à 150 bars',
        'Débit d\'eau: 15 L/min',
        'Système de récupération d\'eau',
        'Lance avec buse rotative',
        'Réservoir détergent intégré',
        'Garantie constructeur 3 ans',
        'Maintenance annuelle incluse la première année'
      ],
      specifications: {
        'Pression maximale': '150 bars',
        'Débit': '15 L/min',
        'Alimentation': '230V monophasé',
        'Puissance': '2.8 kW',
        'Longueur flexible': '10 mètres',
        'Capacité réservoir': '25 litres',
        'Niveau sonore': '78 dB(A)'
      }
    },
    '3': {
      name: 'Valise Diagnostic Multimarque',
      category: 'Diagnostic',
      brand: 'Bosch',
      description: 'Scanner diagnostic professionnel compatible toutes marques de véhicules.',
      longDescription: 'Outil de diagnostic de pointe compatible avec plus de 150 marques de véhicules. Interface intuitive avec écran tactile 10 pouces, mise à jour en ligne et assistance technique incluse.',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800',
      features: [
        'Compatible 150+ marques',
        'Diagnostic moteur, ABS, airbag, climatisation',
        'Écran tactile 10 pouces HD',
        'Mises à jour gratuites 2 ans',
        'Base de données technique intégrée',
        'Connexion WiFi et Bluetooth',
        'Garantie 3 ans'
      ],
      specifications: {
        'Écran': '10 pouces tactile HD',
        'Processeur': 'Quad-core 1.5 GHz',
        'Mémoire': '32 GB',
        'Connectivité': 'WiFi, Bluetooth, USB',
        'Batterie': '6000 mAh',
        'Poids': '1.2 kg',
        'Système': 'Android 10'
      }
    }
  };

  const product = products[id || '1'] || products['1'];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/produits"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 font-medium"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Retour aux produits
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
              {product.category}
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
            <div className="text-xl text-blue-600 font-semibold mb-6">{product.brand}</div>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {product.longDescription}
            </p>

            <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                Caractéristiques Principales
              </h3>
              <ul className="space-y-3">
                {product.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/devis"
                className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all text-center font-semibold shadow-lg"
              >
                Demander un Devis
              </Link>
              <a
                href="tel:+213123456789"
                className="flex-1 border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all text-center font-semibold flex items-center justify-center"
              >
                <Phone className="h-5 w-5 mr-2" />
                Nous Appeler
              </a>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
              <Package className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Livraison Rapide</h3>
            <p className="text-gray-600">Installation sous 2 semaines</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
              <Shield className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Garantie Étendue</h3>
            <p className="text-gray-600">2 à 3 ans selon produits</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="inline-block p-4 bg-orange-100 rounded-full mb-4">
              <Clock className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Support 24/7</h3>
            <p className="text-gray-600">Assistance technique disponible</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Spécifications Techniques</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="flex justify-between border-b border-gray-200 pb-3">
                <span className="font-semibold text-gray-700">{key}</span>
                <span className="text-gray-600">{value as string}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
