import { useState } from 'react';
import { MapPin, Calendar, Award, CheckCircle } from 'lucide-react';

export default function Realisations() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    'Tous',
    'Contrôle Technique',
    'Station Lavage',
    'Atelier Mécanique',
    'Centre Formation'
  ];

  const projects = [
    {
      id: 1,
      title: 'Centre de Contrôle Technique - Alger',
      category: 'Contrôle Technique',
      client: 'AutoCheck Alger',
      location: 'Alger, Algérie',
      date: '2023',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200',
      description: 'Installation complète d\'un centre de contrôle technique moderne avec équipements MAHA dernière génération.',
      highlights: [
        'Banc de freinage à rouleaux',
        'Analyseur de gaz 4 composants',
        'Système de gestion informatique',
        'Formation complète du personnel'
      ]
    },
    {
      id: 2,
      title: 'Station Lavage Automatique - Oran',
      category: 'Station Lavage',
      client: 'WashPro Oran',
      location: 'Oran, Algérie',
      date: '2023',
      image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=1200',
      description: 'Portique de lavage automatique avec système de récupération d\'eau et technologie haute pression.',
      highlights: [
        'Portique lavage automatique Christ',
        'Système récupération d\'eau',
        'Station paiement automatique',
        'Maintenance préventive incluse'
      ]
    },
    {
      id: 3,
      title: 'Atelier Mécanique Premium - Constantine',
      category: 'Atelier Mécanique',
      client: 'Garage Elite Constantine',
      location: 'Constantine, Algérie',
      date: '2022',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200',
      description: 'Équipement complet d\'un atelier mécanique avec ponts élévateurs, compresseurs et outillage professionnel.',
      highlights: [
        '4 Ponts élévateurs OMCN',
        'Compresseur à vis Sullair',
        'Équipement diagnostic Texa',
        'Outillage Facom complet'
      ]
    },
    {
      id: 4,
      title: 'Centre de Formation TEG Academy - Alger',
      category: 'Centre Formation',
      client: 'TEG Academy',
      location: 'Alger, Algérie',
      date: '2022',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200',
      description: 'Centre de formation technique équipé pour la formation professionnelle en mécanique automobile.',
      highlights: [
        'Salles de formation théorique',
        'Atelier pratique équipé',
        'Équipements pédagogiques',
        'Certifications professionnelles'
      ]
    },
    {
      id: 5,
      title: 'Station Lavage Express - Annaba',
      category: 'Station Lavage',
      client: 'CleanCar Annaba',
      location: 'Annaba, Algérie',
      date: '2023',
      image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=1200',
      description: 'Installation d\'une station de lavage haute pression avec 4 postes de lavage manuel.',
      highlights: [
        '4 Postes haute pression Kärcher',
        'Système de traitement d\'eau',
        'Zone de séchage couverte',
        'Système de gestion clients'
      ]
    },
    {
      id: 6,
      title: 'Centre Contrôle Technique - Sétif',
      category: 'Contrôle Technique',
      client: 'TechControl Sétif',
      location: 'Sétif, Algérie',
      date: '2022',
      image: 'https://images.unsplash.com/photo-1632823469850-1b4942f83b8b?w=1200',
      description: 'Centre de contrôle technique homologué avec équipements conformes aux normes algériennes.',
      highlights: [
        'Ligne de contrôle complète MAHA',
        'Opacimètre et analyseur gaz',
        'Système informatique intégré',
        'Homologation et certification'
      ]
    },
    {
      id: 7,
      title: 'Atelier Poids Lourds - Ouargla',
      category: 'Atelier Mécanique',
      client: 'TruckService Ouargla',
      location: 'Ouargla, Algérie',
      date: '2023',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200',
      description: 'Atelier spécialisé poids lourds avec ponts grande capacité et équipements industriels.',
      highlights: [
        'Ponts 20 tonnes OMCN',
        'Compresseur industriel 1000L',
        'Équipement diagnostic poids lourds',
        'Outillage spécialisé'
      ]
    },
    {
      id: 8,
      title: 'Station Multiservices - Béjaïa',
      category: 'Station Lavage',
      client: 'AutoService Béjaïa',
      location: 'Béjaïa, Algérie',
      date: '2022',
      image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=1200',
      description: 'Station complète avec lavage, mécanique rapide et vidange express.',
      highlights: [
        'Station lavage automatique',
        'Pont élévateur 2 colonnes',
        'Équipement vidange Algi',
        'Zone d\'attente climatisée'
      ]
    }
  ];

  const filteredProjects = projects.filter(project =>
    selectedCategory === 'all' || project.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Nos Réalisations</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Découvrez nos projets réussis à travers toute l'Algérie
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category === 'Tous' ? 'all' : category)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedCategory === (category === 'Tous' ? 'all' : category)
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  {project.date}
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>

                <div className="flex items-center text-gray-600 mb-2">
                  <Award className="h-5 w-5 mr-2 text-blue-600" />
                  <span className="font-medium">{project.client}</span>
                </div>

                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-5 w-5 mr-2 text-orange-600" />
                  <span>{project.location}</span>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>

                <div className="border-t border-gray-200 pt-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                    Points Clés
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <span className="text-blue-600 mr-2 mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-500">Aucun projet trouvé dans cette catégorie</p>
          </div>
        )}

        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl shadow-2xl p-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Votre Projet est Notre Priorité
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Rejoignez nos nombreux clients satisfaits et concrétisez votre projet avec TEG
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/devis"
              className="inline-block bg-white text-blue-600 px-10 py-4 rounded-xl hover:bg-blue-50 transition-all font-semibold shadow-lg"
            >
              Demander un Devis
            </a>
            <a
              href="tel:+213123456789"
              className="inline-block border-2 border-white text-white px-10 py-4 rounded-xl hover:bg-white/10 transition-all font-semibold"
            >
              Nous Contacter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
