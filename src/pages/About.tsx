import { Award, Shield, Users, Zap, Target, Eye, Heart, TrendingUp } from 'lucide-react';

export default function About() {
  const stats = [
    { value: '2006', label: 'Année de Création', icon: TrendingUp },
    { value: '507+', label: 'Clients Satisfaits', icon: Users },
    { value: '800+', label: 'Projets Réalisés', icon: Award },
    { value: '3000+', label: 'Heures de Formation', icon: Zap }
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Nous visons toujours la perfection dans chaque projet et service que nous offrons à nos clients.'
    },
    {
      icon: Shield,
      title: 'Fiabilité',
      description: 'Des équipements de qualité premium et un service après-vente réactif pour votre tranquillité d\'esprit.'
    },
    {
      icon: Heart,
      title: 'Engagement',
      description: 'Votre réussite est notre priorité. Nous nous engageons à vos côtés sur le long terme.'
    },
    {
      icon: Users,
      title: 'Expertise',
      description: '17 ans d\'expérience et une équipe de professionnels qualifiés à votre service.'
    }
  ];

  const team = [
    {
      role: 'Direction Générale',
      description: 'Leadership stratégique et vision à long terme',
      icon: Target
    },
    {
      role: 'Département Commercial',
      description: 'Conseil personnalisé et accompagnement client',
      icon: Users
    },
    {
      role: 'Service Technique',
      description: 'Installation, maintenance et support 24/7',
      icon: Zap
    },
    {
      role: 'Formation',
      description: 'Programmes de formation certifiés',
      icon: Award
    }
  ];

  const milestones = [
    {
      year: '2006',
      title: 'Création de TEG',
      description: 'Début de l\'aventure avec une vision claire : devenir le leader algérien en équipements automobiles'
    },
    {
      year: '2010',
      title: 'Expansion Nationale',
      description: 'Ouverture de nouveaux points de service à travers l\'Algérie'
    },
    {
      year: '2015',
      title: 'Partenariats Internationaux',
      description: 'Signature d\'accords exclusifs avec les plus grandes marques européennes'
    },
    {
      year: '2020',
      title: 'Centre de Formation',
      description: 'Lancement de TEG Academy pour la formation professionnelle'
    },
    {
      year: '2023',
      title: 'Innovation Continue',
      description: 'Plus de 500 clients et 800 projets réalisés avec succès'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div
        className="relative bg-cover bg-center py-24"
        style={{
          backgroundImage: 'url(https://teg-dz.com/wp-content/themes/teg/assets/img/hero-bg.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/90 to-slate-900/95"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">À Propos de TEG</h1>
            <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto">
              Leader algérien en équipements automobiles et industriels depuis 2006
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
                <div className="inline-block p-4 bg-gradient-to-br from-blue-100 to-orange-100 rounded-full mb-4">
                  <StatIcon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="inline-block mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                Notre Histoire
              </span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              17 Ans d'Excellence et d'Innovation
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Fondée en 2006, <strong>TEG (Technique Équipements Garage)</strong> est devenue la référence incontournable
              en matière d'équipements automobiles et industriels en Algérie. Notre parcours est marqué par un engagement
              constant envers la qualité et l'innovation.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Nous proposons une gamme complète de solutions : du contrôle technique automobile aux équipements de lavage,
              en passant par les systèmes de diagnostic et l'outillage professionnel. Notre force réside dans notre capacité
              à offrir des solutions clés en main, adaptées aux besoins spécifiques de chaque client.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Avec plus de <strong>507 clients satisfaits</strong> et <strong>800 projets réalisés</strong>, TEG continue
              d'innover et de se développer pour rester votre partenaire de confiance dans la réussite de vos projets.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200"
              alt="TEG Workshop"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-blue-600 to-orange-500 text-white p-8 rounded-2xl shadow-xl">
              <div className="text-3xl font-bold mb-2">+17 Ans</div>
              <div className="text-blue-100">d'Expérience</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl shadow-2xl p-12 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Notre Mission & Vision</h2>
            <p className="text-xl text-blue-100">Ce qui nous guide au quotidien</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="inline-block p-4 bg-white/20 rounded-xl mb-4">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Notre Mission</h3>
              <p className="text-blue-100 leading-relaxed">
                Fournir des équipements de pointe et des services d'excellence pour accompagner nos clients dans leur
                développement. Nous nous engageons à offrir des solutions innovantes, fiables et adaptées aux besoins
                spécifiques de chaque professionnel de l'automobile et de l'industrie.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="inline-block p-4 bg-white/20 rounded-xl mb-4">
                <Eye className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Notre Vision</h3>
              <p className="text-blue-100 leading-relaxed">
                Devenir le partenaire incontournable de référence en Afrique du Nord pour tous les professionnels
                recherchant des équipements de qualité supérieure et un service client exemplaire. Nous aspirons à
                continuer d'innover et d'élargir notre offre pour répondre aux défis de demain.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Valeurs</h2>
            <p className="text-xl text-gray-600">Les principes qui guident notre action</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const ValueIcon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="inline-block p-4 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full mb-6">
                    <ValueIcon className="h-10 w-10 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Notre Équipe</h2>
            <p className="text-xl text-gray-600">Des professionnels dévoués à votre service</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => {
              const MemberIcon = member.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="inline-block p-3 bg-blue-100 rounded-xl mb-4">
                    <MemberIcon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{member.role}</h3>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Notre Parcours</h2>
            <p className="text-xl text-gray-600">Les étapes clés de notre développement</p>
          </div>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex items-start space-x-6 p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-orange-50 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-orange-500 text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-lg">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
