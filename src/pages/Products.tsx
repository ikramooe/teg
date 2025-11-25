import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Wrench, Search, Filter } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  brand: string;
}

export default function Products() {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const categoryParam = searchParams.get('categorie');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  const categories = [
    'Tous',
    'Contrôle Technique',
    'Ponts Élévateurs',
    'Air Comprimé',
    'Lavage Automatique',
    'Diagnostic et Climatisation',
    'Outillage Professionnel',
    'Lubrification'
  ];

  const products: Product[] = [
    {
      id: '1',
      name: 'Pont Élévateur 4 Colonnes',
      category: 'Ponts Élévateurs',
      description: 'Pont élévateur 4 colonnes professionnel, capacité 5 tonnes',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800',
      brand: 'OMCN'
    },
    {
      id: '2',
      name: 'Pont Élévateur 2 Colonnes',
      category: 'Ponts Élévateurs',
      description: 'Pont élévateur 2 colonnes, idéal pour ateliers',
      image: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800',
      brand: 'OMCN'
    },
    {
      id: '3',
      name: 'Station Lavage Automatique',
      category: 'Lavage Automatique',
      description: 'Système complet de lavage automatique pour véhicules',
      image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800',
      brand: 'Kärcher'
    },
    {
      id: '4',
      name: 'Portique Lavage Haute Pression',
      category: 'Lavage Automatique',
      description: 'Portique de lavage professionnel haute performance',
      image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800',
      brand: 'Christ'
    },
    {
      id: '5',
      name: 'Valise Diagnostic Multimarque',
      category: 'Diagnostic et Climatisation',
      description: 'Scanner diagnostic professionnel compatible toutes marques',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800',
      brand: 'Bosch'
    },
    {
      id: '6',
      name: 'Station Climatisation',
      category: 'Diagnostic et Climatisation',
      description: 'Station de recharge et maintenance climatisation',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800',
      brand: 'Texa'
    },
    {
      id: '7',
      name: 'Compresseur 500L',
      category: 'Air Comprimé',
      description: 'Compresseur industriel 500L, 10 bars',
      image: 'https://images.unsplash.com/photo-1504253163759-c23fccaebb55?w=800',
      brand: 'Sullair'
    },
    {
      id: '8',
      name: 'Compresseur à Vis',
      category: 'Air Comprimé',
      description: 'Compresseur à vis rotatif haute efficacité',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800',
      brand: 'Atlas Copco'
    },
    {
      id: '9',
      name: 'Banc de Contrôle Freinage',
      category: 'Contrôle Technique',
      description: 'Banc de contrôle freinage homologué',
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800',
      brand: 'MAHA'
    },
    {
      id: '10',
      name: 'Analyseur de Gaz',
      category: 'Contrôle Technique',
      description: 'Analyseur de gaz d\'échappement professionnel',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800',
      brand: 'MAHA'
    },
    {
      id: '11',
      name: 'Coffre à Outils Professionnel',
      category: 'Outillage Professionnel',
      description: 'Servante d\'atelier 7 tiroirs équipée',
      image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800',
      brand: 'Facom'
    },
    {
      id: '12',
      name: 'Kit Outillage Complet',
      category: 'Outillage Professionnel',
      description: 'Kit d\'outillage professionnel 200 pièces',
      image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800',
      brand: 'Hazet'
    },
    {
      id: '13',
      name: 'Système Lubrification Centralisé',
      category: 'Lubrification',
      description: 'Système de lubrification automatique',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800',
      brand: 'Algi'
    },
    {
      id: '14',
      name: 'Enrouleur Huile',
      category: 'Lubrification',
      description: 'Enrouleur pneumatique pour huile moteur',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800',
      brand: 'Algi'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Nos Produits</h1>
          <p className="text-xl text-blue-100">
            Découvrez notre gamme complète d'équipements professionnels
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Rechercher un produit..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="relative">
            <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="pl-12 pr-8 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white min-w-[200px]"
            >
              <option value="all">Toutes Catégories</option>
              {categories.slice(1).map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <Link
              key={product.id}
              to={`/produit/${product.id}`}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {product.brand}
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-orange-600 font-semibold mb-2">{product.category}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center text-blue-600 font-semibold">
                  <span>Voir les détails</span>
                  <Wrench className="h-5 w-5 ml-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-500">Aucun produit trouvé</p>
          </div>
        )}
      </div>
    </div>
  );
}
