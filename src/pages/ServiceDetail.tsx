import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Clock, Users, Award, Wrench } from 'lucide-react';

export default function ServiceDetail() {
  const { id } = useParams();

  const services: Record<string, any> = {
    'controle-technique': {
      title: 'Contrôle Technique Automobile',
      icon: CheckCircle,
      description: 'Solutions complètes pour centres de contrôle technique',
      longDescription: 'TEG vous accompagne dans la création et l\'équipement de votre centre de contrôle technique automobile. Nous proposons une gamme complète d\'équipements homologués et conformes aux normes algériennes et internationales.',
      image: 'https://images.unsplash.com/photo-1632823469850-1b4942f83b8b?w=1200',
      benefits: [
        'Équipements homologués et certifiés',
        'Installation clé en main',
        'Formation complète du personnel',
        'Support technique permanent',
        'Maintenance préventive',
        'Mise à jour réglementaire',
        'Pièces de rechange disponibles'
      ],
      process: [
        {
          title: 'Étude de votre projet',
          description: 'Analyse de vos besoins et dimensionnement du centre'
        },
        {
          title: 'Proposition technique',
          description: 'Sélection des équipements adaptés à votre activité'
        },
        {
          title: 'Installation',
          description: 'Mise en place et configuration de tous les équipements'
        },
        {
          title: 'Formation',
          description: 'Formation approfondie de vos équipes'
        },
        {
          title: 'Suivi',
          description: 'Accompagnement continu et maintenance'
        }
      ],
      equipment: [
        'Banc de freinage à rouleaux',
        'Banc de suspension',
        'Analyseur de gaz',
        'Opacimètre',
        'Appareil de contrôle phares',
        'Système de gestion informatique',
        'Équipement de sécurité'
      ]
    },
    'equipement-lavage': {
      title: 'Équipement de Lavage',
      icon: Wrench,
      description: 'Systèmes de lavage professionnels pour véhicules',
      longDescription: 'Nous équipons votre station de lavage avec les meilleures technologies du marché. Que vous souhaitiez créer un centre de lavage automatique ou manuel, nous avons la solution adaptée à votre projet et votre budget.',
      image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=1200',
      benefits: [
        'Systèmes haute performance',
        'Économie d\'eau et d\'énergie',
        'Installation professionnelle',
        'Formation du personnel',
        'Garantie étendue',
        'Maintenance régulière',
        'Produits de lavage fournis'
      ],
      process: [
        {
          title: 'Diagnostic',
          description: 'Évaluation de votre espace et de vos besoins'
        },
        {
          title: 'Conception',
          description: 'Plan d\'implantation et choix des équipements'
        },
        {
          title: 'Installation',
          description: 'Mise en place complète du système de lavage'
        },
        {
          title: 'Tests',
          description: 'Vérification et optimisation des performances'
        },
        {
          title: 'Lancement',
          description: 'Démarrage et accompagnement opérationnel'
        }
      ],
      equipment: [
        'Portique de lavage automatique',
        'Système haute pression',
        'Station de prélavage',
        'Séchage par air pulsé',
        'Système de récupération d\'eau',
        'Pompe doseuse détergent',
        'Système de paiement automatique'
      ]
    },
    'formation': {
      title: 'Formation Professionnelle',
      icon: Users,
      description: 'Programmes de formation pour professionnels de l\'automobile',
      longDescription: 'TEG Academy propose des formations techniques de haut niveau pour les professionnels de l\'automobile. Nos formateurs certifiés transmettent leur expertise sur l\'utilisation des équipements et les dernières technologies automobiles.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200',
      benefits: [
        'Formateurs certifiés et expérimentés',
        'Formations théoriques et pratiques',
        'Centre de formation équipé',
        'Certification à l\'issue',
        'Support pédagogique fourni',
        'Suivi post-formation',
        'Formations sur mesure'
      ],
      process: [
        {
          title: 'Identification',
          description: 'Analyse de vos besoins en formation'
        },
        {
          title: 'Programme',
          description: 'Élaboration du programme adapté'
        },
        {
          title: 'Planification',
          description: 'Organisation des sessions de formation'
        },
        {
          title: 'Formation',
          description: 'Dispense de la formation théorique et pratique'
        },
        {
          title: 'Évaluation',
          description: 'Certification et suivi des compétences'
        }
      ],
      equipment: [
        'Diagnostic automobile',
        'Utilisation des ponts élévateurs',
        'Systèmes de climatisation',
        'Équipements de lavage',
        'Maintenance préventive',
        'Pneumatiques et géométrie',
        'Normes et réglementations'
      ]
    },
    'maintenance': {
      title: 'Maintenance et SAV',
      icon: Award,
      description: 'Service après-vente et maintenance de vos équipements',
      longDescription: 'Notre service après-vente vous garantit la continuité de votre activité. Avec une équipe de techniciens qualifiés et un stock de pièces détachées, nous intervenons rapidement pour maintenir vos équipements en parfait état de fonctionnement.',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200',
      benefits: [
        'Intervention rapide 24/7',
        'Techniciens qualifiés',
        'Stock de pièces détachées',
        'Contrats de maintenance',
        'Diagnostic à distance',
        'Pièces d\'origine garanties',
        'Traçabilité des interventions'
      ],
      process: [
        {
          title: 'Demande',
          description: 'Contact par téléphone ou formulaire en ligne'
        },
        {
          title: 'Diagnostic',
          description: 'Identification du problème à distance ou sur site'
        },
        {
          title: 'Intervention',
          description: 'Réparation par nos techniciens certifiés'
        },
        {
          title: 'Test',
          description: 'Vérification complète du bon fonctionnement'
        },
        {
          title: 'Rapport',
          description: 'Documentation de l\'intervention effectuée'
        }
      ],
      equipment: [
        'Maintenance préventive programmée',
        'Dépannage urgent',
        'Révision annuelle',
        'Remplacement de pièces',
        'Mise à jour logicielle',
        'Formation continue',
        'Support technique à distance'
      ]
    }
  };

  const service = services[id || 'controle-technique'] || services['controle-technique'];
  const ServiceIcon = service.icon;

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div
        className="relative bg-cover bg-center py-20"
        style={{
          backgroundImage: `url(${service.image})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-blue-800/90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            to="/#services"
            className="inline-flex items-center text-white hover:text-blue-200 mb-6 font-medium"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Retour aux services
          </Link>
          <div className="inline-block p-4 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
            <ServiceIcon className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{service.title}</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            {service.longDescription}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
                Nos Avantages
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {service.benefits.map((benefit: string, index: number) => (
                  <div key={index} className="flex items-start p-4 bg-gradient-to-br from-blue-50 to-orange-50 rounded-xl">
                    <span className="text-blue-600 mr-3 mt-1 text-xl">✓</span>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Clock className="h-8 w-8 text-blue-600 mr-3" />
                Notre Processus
              </h2>
              <div className="space-y-6">
                {service.process.map((step: any, index: number) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Demander un Devis</h3>
              <p className="mb-6 text-blue-100">
                Intéressé par ce service ? Contactez-nous pour recevoir une offre personnalisée.
              </p>
              <Link
                to="/devis"
                className="block w-full bg-white text-blue-600 px-6 py-4 rounded-xl hover:bg-blue-50 transition-all text-center font-semibold shadow-lg"
              >
                Demander un Devis Gratuit
              </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Équipements Inclus</h3>
              <ul className="space-y-3">
                {service.equipment.map((item: string, index: number) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl shadow-lg p-8 border-2 border-orange-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Besoin d'Aide ?</h3>
              <p className="text-gray-700 mb-4">
                Notre équipe est à votre disposition pour répondre à toutes vos questions.
              </p>
              <a
                href="tel:+213123456789"
                className="block w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-3 rounded-xl hover:from-orange-600 hover:to-yellow-600 transition-all text-center font-semibold"
              >
                Appelez-nous
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
