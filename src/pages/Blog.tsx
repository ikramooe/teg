import { Calendar, User, ArrowRight, Tag, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from '../components/Logo';

export default function Blog() {
  const articles = [
    {
      id: '1',
      title: 'Les Nouvelles Technologies dans le Contrôle Technique Automobile',
      excerpt: 'Découvrez comment les innovations technologiques révolutionnent le secteur du contrôle technique et améliorent la sécurité routière.',
      content: 'Le secteur du contrôle technique automobile connaît une transformation majeure grâce aux nouvelles technologies...',
      author: 'Équipe TEG',
      date: '2024-11-20',
      readTime: '5 min',
      category: 'Technologie',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=400&fit=crop',
      tags: ['Contrôle Technique', 'Innovation', 'Automobile']
    },
    {
      id: '2',
      title: 'Guide d\'Achat : Choisir le Bon Équipement de Lavage Automobile',
      excerpt: 'Conseils d\'experts pour sélectionner l\'équipement de lavage adapté à votre activité et à votre budget.',
      content: 'Le choix d\'un équipement de lavage automobile est crucial pour la rentabilité de votre activité...',
      author: 'Équipe TEG',
      date: '2024-11-15',
      readTime: '7 min',
      category: 'Guide',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop',
      tags: ['Lavage', 'Équipement', 'Guide d\'achat']
    },
    {
      id: '3',
      title: 'Maintenance Préventive : Prolonger la Durée de Vie de vos Équipements',
      excerpt: 'Les bonnes pratiques de maintenance pour optimiser la performance et la longévité de vos investissements.',
      content: 'Une maintenance préventive bien planifiée peut considérablement prolonger la durée de vie de vos équipements...',
      author: 'Équipe TEG',
      date: '2024-11-10',
      readTime: '6 min',
      category: 'Maintenance',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=400&fit=crop',
      tags: ['Maintenance', 'Prévention', 'Équipement']
    },
    {
      id: '4',
      title: 'Formation Professionnelle : Investir dans vos Équipes',
      excerpt: 'L\'importance de la formation continue pour maximiser l\'efficacité de vos équipements et services.',
      content: 'La formation de vos équipes est un investissement stratégique qui impacte directement la qualité de vos services...',
      author: 'Équipe TEG',
      date: '2024-11-05',
      readTime: '4 min',
      category: 'Formation',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop',
      tags: ['Formation', 'Équipe', 'Développement']
    },
    {
      id: '5',
      title: 'Tendances 2024 : L\'Évolution du Secteur Automobile en Algérie',
      excerpt: 'Analyse des tendances et opportunités dans le secteur automobile algérien pour l\'année 2024.',
      content: 'Le marché automobile algérien évolue rapidement avec de nouvelles opportunités et défis...',
      author: 'Équipe TEG',
      date: '2024-10-28',
      readTime: '8 min',
      category: 'Analyse',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=400&fit=crop',
      tags: ['Tendances', 'Marché', 'Algérie']
    },
    {
      id: '6',
      title: 'Sécurité et Conformité : Respecter les Normes en Vigueur',
      excerpt: 'Guide complet sur les normes de sécurité et de conformité dans l\'industrie automobile.',
      content: 'Le respect des normes de sécurité est primordial dans l\'industrie automobile...',
      author: 'Équipe TEG',
      date: '2024-10-20',
      readTime: '6 min',
      category: 'Réglementation',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop',
      tags: ['Sécurité', 'Normes', 'Conformité']
    }
  ];

  const categories = ['Tous', 'Technologie', 'Guide', 'Maintenance', 'Formation', 'Analyse', 'Réglementation'];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Technologie': 'bg-blue-100 text-blue-800',
      'Guide': 'bg-green-100 text-green-800',
      'Maintenance': 'bg-orange-100 text-orange-800',
      'Formation': 'bg-purple-100 text-purple-800',
      'Analyse': 'bg-indigo-100 text-indigo-800',
      'Réglementation': 'bg-red-100 text-red-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Blog <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">TEG</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Actualités, conseils d'experts et tendances du secteur automobile et industriel
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 font-medium"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Article à la Une</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-orange-500"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={articles[0].image}
                alt={articles[0].title}
                className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(articles[0].category)}`}>
                  {articles[0].category}
                </span>
              </div>
            </div>
            
            <div>
              <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(articles[0].date).toLocaleDateString('fr-FR')}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{articles[0].readTime}</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>{articles[0].author}</span>
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                {articles[0].title}
              </h3>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {articles[0].excerpt}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {articles[0].tags.map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    <Tag className="h-3 w-3" />
                    {tag}
                  </span>
                ))}
              </div>
              
              <Link
                to={`/blog/${articles[0].id}`}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Lire l'article
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Derniers Articles</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-orange-500"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article) => (
              <article key={article.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(article.category)}`}>
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-gray-500 text-sm mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(article.date).toLocaleDateString('fr-FR')}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                        <Tag className="h-3 w-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    to={`/blog/${article.id}`}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors group-hover:gap-3"
                  >
                    Lire la suite
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Restez Informé</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Recevez nos derniers articles et actualités directement dans votre boîte mail
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-6 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-3 rounded-xl hover:from-orange-600 hover:to-yellow-600 transition-all font-semibold shadow-lg">
              S'abonner
            </button>
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
