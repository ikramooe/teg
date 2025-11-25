import { Calendar, User, Clock, Tag, ArrowLeft, Share2, BookOpen, ChevronRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Logo } from '../components/Logo';

export default function Article() {
  const { id } = useParams();
  
  // Sample article data - in a real app, this would come from an API or database
  const articles = [
    {
      id: '1',
      title: 'Les Nouvelles Technologies dans le Contrôle Technique Automobile',
      excerpt: 'Découvrez comment les innovations technologiques révolutionnent le secteur du contrôle technique et améliorent la sécurité routière.',
      content: `
        <p>Le secteur du contrôle technique automobile connaît une transformation majeure grâce aux nouvelles technologies. Cette évolution s'inscrit dans une démarche d'amélioration continue de la sécurité routière et de l'efficacité des contrôles.</p>

        <h2>L'Intelligence Artificielle au Service du Diagnostic</h2>
        <p>L'intégration de l'intelligence artificielle dans les équipements de contrôle technique permet désormais une analyse plus précise et plus rapide des défauts. Les systèmes d'IA peuvent détecter des anomalies subtiles qui échapperaient parfois à l'œil humain, garantissant ainsi un niveau de sécurité optimal.</p>

        <h2>Digitalisation des Processus</h2>
        <p>La digitalisation complète des processus de contrôle technique offre de nombreux avantages :</p>
        <ul>
          <li>Traçabilité complète des interventions</li>
          <li>Réduction des erreurs humaines</li>
          <li>Amélioration de l'efficacité opérationnelle</li>
          <li>Facilitation des démarches administratives</li>
        </ul>

        <h2>Équipements de Nouvelle Génération</h2>
        <p>Les équipements modernes intègrent des capteurs ultra-précis et des systèmes de mesure avancés. Ces innovations permettent des contrôles plus fiables et plus complets, couvrant l'ensemble des aspects sécuritaires du véhicule.</p>

        <h2>Impact sur la Sécurité Routière</h2>
        <p>Ces avancées technologiques contribuent significativement à l'amélioration de la sécurité routière en Algérie. Un contrôle technique plus rigoureux et plus précis permet d'identifier et de corriger les défauts potentiellement dangereux avant qu'ils ne causent des accidents.</p>

        <h2>Formation et Accompagnement</h2>
        <p>Chez TEG, nous accompagnons nos clients dans cette transition technologique en proposant des formations complètes sur l'utilisation de ces nouveaux équipements. Notre expertise technique garantit une mise en œuvre optimale de ces innovations.</p>
      `,
      author: 'Équipe TEG',
      date: '2024-11-20',
      readTime: '5 min',
      category: 'Technologie',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&h=600&fit=crop',
      tags: ['Contrôle Technique', 'Innovation', 'Automobile', 'IA', 'Sécurité']
    },
    {
      id: '2',
      title: 'Guide d\'Achat : Choisir le Bon Équipement de Lavage Automobile',
      excerpt: 'Conseils d\'experts pour sélectionner l\'équipement de lavage adapté à votre activité et à votre budget.',
      content: `
        <p>Le choix d'un équipement de lavage automobile est crucial pour la rentabilité et l'efficacité de votre activité. Ce guide vous accompagne dans cette décision importante.</p>

        <h2>Analyse de vos Besoins</h2>
        <p>Avant tout investissement, il est essentiel d'analyser précisément vos besoins :</p>
        <ul>
          <li>Volume de véhicules à traiter quotidiennement</li>
          <li>Types de véhicules (légers, utilitaires, poids lourds)</li>
          <li>Espace disponible dans votre installation</li>
          <li>Budget d'investissement et de fonctionnement</li>
        </ul>

        <h2>Types d'Équipements Disponibles</h2>
        <p>Le marché propose différents types d'équipements de lavage, chacun adapté à des besoins spécifiques :</p>

        <h3>Systèmes de Lavage Haute Pression</h3>
        <p>Idéaux pour un lavage rapide et efficace, ces systèmes offrent une excellente qualité de nettoyage avec une consommation d'eau optimisée.</p>

        <h3>Tunnels de Lavage Automatiques</h3>
        <p>Solution haut de gamme pour les centres de lavage à fort volume, garantissant un service rapide et une qualité constante.</p>

        <h2>Critères de Sélection</h2>
        <p>Plusieurs critères doivent guider votre choix :</p>
        <ul>
          <li>Qualité et fiabilité de l'équipement</li>
          <li>Consommation d'eau et d'énergie</li>
          <li>Facilité d'utilisation et de maintenance</li>
          <li>Service après-vente et disponibilité des pièces</li>
          <li>Respect des normes environnementales</li>
        </ul>

        <h2>Retour sur Investissement</h2>
        <p>Un équipement de qualité, bien choisi et correctement utilisé, génère rapidement un retour sur investissement positif grâce à l'amélioration de la productivité et de la satisfaction client.</p>
      `,
      author: 'Équipe TEG',
      date: '2024-11-15',
      readTime: '7 min',
      category: 'Guide',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop',
      tags: ['Lavage', 'Équipement', 'Guide d\'achat', 'Investissement']
    }
  ];

  const article = articles.find(a => a.id === id) || articles[0];

  const relatedArticles = articles.filter(a => a.id !== article.id).slice(0, 3);

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
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="bg-gray-50 py-4 border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600 transition-colors">Accueil</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900 font-medium">{article.title}</span>
          </div>
        </div>
      </nav>

      {/* Article Header */}
      <header className="py-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour au blog
          </Link>

          <div className="mb-6">
            <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${getCategoryColor(article.category)}`}>
              {article.category}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <User className="h-5 w-5" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>{new Date(article.date).toLocaleDateString('fr-FR', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>{article.readTime} de lecture</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              <span>Article</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors font-medium">
              <Share2 className="h-4 w-4" />
              Partager
            </button>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span key={tag} className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                  <Tag className="h-3 w-3" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="relative">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      {/* Article Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-blue max-w-none">
            <div className="text-xl text-gray-600 mb-8 font-medium leading-relaxed">
              {article.excerpt}
            </div>
            
            <div 
              className="article-content"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </div>
      </article>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Besoin de Conseils ?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Notre équipe d'experts est à votre disposition pour vous accompagner dans vos projets
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/devis"
              className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-3 rounded-xl hover:from-orange-600 hover:to-yellow-600 transition-all font-semibold shadow-lg"
            >
              Demander un Devis
            </Link>
            <Link
              to="/a-propos"
              className="border-2 border-white text-white px-8 py-3 rounded-xl hover:bg-white hover:text-blue-900 transition-all font-semibold"
            >
              En Savoir Plus
            </Link>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Articles Connexes</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {relatedArticles.map((relatedArticle) => (
              <article key={relatedArticle.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={relatedArticle.image}
                    alt={relatedArticle.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(relatedArticle.category)}`}>
                      {relatedArticle.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-gray-500 text-sm mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(relatedArticle.date).toLocaleDateString('fr-FR')}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{relatedArticle.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {relatedArticle.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {relatedArticle.excerpt}
                  </p>
                  
                  <Link
                    to={`/blog/${relatedArticle.id}`}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                  >
                    Lire l'article
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
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
