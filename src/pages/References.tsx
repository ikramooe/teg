import { Award, TrendingUp, Users, Target } from 'lucide-react';

export default function References() {
  const clients = [
    { name: 'Kia', logo: 'https://teg-dz.com/wp-content/uploads/2021/08/KIA-150x150.png' },
    { name: 'Peugeot', logo: 'https://teg-dz.com/wp-content/uploads/2021/08/PEUGEOT-150x150.png' },
    { name: 'Volkswagen', logo: 'https://teg-dz.com/wp-content/uploads/2021/08/volkswagen-service-150x150.png' },
    { name: 'Sovac', logo: 'https://teg-dz.com/wp-content/uploads/2021/08/sovac-150x150.png' },
    { name: 'Cevital', logo: 'https://teg-dz.com/wp-content/uploads/2021/08/cevital-logo-150x150.jpg' },
    { name: 'Renault', logo: 'https://teg-dz.com/wp-content/uploads/2021/08/RENAULT-150x150.png' },
    { name: 'Global Axis', logo: 'https://teg-dz.com/wp-content/uploads/2021/08/GLOBAL-AXIS-150x150.png' },
    { name: 'MPV', logo: 'https://teg-dz.com/wp-content/uploads/2021/08/mpv-maintenance-prestations-vehicules-150x150.png' },
    { name: 'Astaldi', logo: 'https://teg-dz.com/wp-content/uploads/2021/08/ASTALDI-150x150.png' },
    { name: 'Globale Réalisation', logo: 'https://teg-dz.com/wp-content/uploads/2021/08/Globale-realisation-150x150.png' },
    { name: 'Cevital MTP', logo: 'https://teg-dz.com/wp-content/uploads/2021/08/cevital-mtp-150x150.png' },
    { name: 'MA Prod', logo: 'https://teg-dz.com/wp-content/uploads/2021/08/Ma-prod-controle-technique-150x150.jpg' }
  ];

  const stats = [
    {
      icon: Users,
      value: '507+',
      label: 'Clients Satisfaits',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Award,
      value: '800+',
      label: 'Projets Réalisés',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: TrendingUp,
      value: '17 Ans',
      label: "D'Expérience",
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Target,
      value: '100%',
      label: 'Satisfaction Client',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const sectors = [
    {
      title: 'Automobile',
      description: 'Concessionnaires et centres de service automobile',
      clients: ['Kia', 'Peugeot', 'Volkswagen', 'Renault', 'Sovac']
    },
    {
      title: 'Industrie',
      description: 'Groupes industriels et entreprises de construction',
      clients: ['Cevital', 'Cevital MTP', 'Astaldi']
    },
    {
      title: 'Services',
      description: 'Centres de contrôle technique et maintenance',
      clients: ['MA Prod', 'MPV', 'Global Axis', 'Globale Réalisation']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Nos Références</h1>
            <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto">
              Forte de son expérience, TEG accompagne plus de dizaines de clients avec des solutions innovantes,
              pour répondre aux grands enjeux industriels des entreprises
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const StatIcon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl p-8 text-center transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`inline-block p-4 bg-gradient-to-br ${stat.color} rounded-full mb-4`}>
                  <StatIcon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ils Nous Font Confiance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des partenaires prestigieux qui témoignent de notre expertise et de la qualité de nos services
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-100"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full h-auto object-contain"
                  style={{ maxHeight: '80px' }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Secteurs d'Activité</h2>
            <p className="text-xl text-gray-600">Une expertise reconnue dans plusieurs domaines</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300"
              >
                <div className="inline-block p-3 bg-gradient-to-br from-blue-100 to-orange-100 rounded-xl mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{sector.title}</h3>
                <p className="text-gray-600 mb-6">{sector.description}</p>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex flex-wrap gap-2">
                    {sector.clients.map((client, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {client}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Pourquoi Nous Choisir?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Expertise Reconnue</h3>
                    <p className="text-blue-100">
                      17 ans d'expérience dans l'équipement industriel et automobile
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Partenaires de Confiance</h3>
                    <p className="text-blue-100">
                      Collaboration avec les plus grandes marques internationales
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Solutions Innovantes</h3>
                    <p className="text-blue-100">
                      Équipements de pointe adaptés aux besoins de chaque client
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Accompagnement Total</h3>
                    <p className="text-blue-100">
                      De la conception à la maintenance, un service complet et personnalisé
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative bg-gradient-to-br from-orange-500 to-orange-600 p-12 flex flex-col justify-center">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white mb-6">Rejoignez Nos Clients</h3>
                <p className="text-xl text-orange-100 mb-8">
                  Faites confiance à un leader du marché pour vos équipements professionnels
                </p>
                <div className="space-y-4">
                  <a
                    href="/devis"
                    className="block bg-white text-orange-600 px-8 py-4 rounded-xl hover:bg-orange-50 transition-all font-semibold shadow-lg"
                  >
                    Demander un Devis
                  </a>
                  <a
                    href="tel:+213123456789"
                    className="block border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white/10 transition-all font-semibold"
                  >
                    Contactez-nous
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
