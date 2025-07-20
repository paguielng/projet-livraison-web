import React from 'react'
import { Link } from 'react-router-dom'
import { Package, Truck, Users, Search, Clock, Shield, Zap } from 'lucide-react'

const HomePage: React.FC = () => {
  const features = [
    {
      icon: Clock,
      title: 'Suivi temps réel',
      description: 'Mises à jour instantanées de vos livraisons'
    },
    {
      icon: Shield,
      title: 'Sécurisé',
      description: 'Protection maximale de vos données'
    },
    {
      icon: Zap,
      title: 'Rapide',
      description: 'Interface optimisée pour mobile'
    }
  ]

  const quickActions = [
    {
      title: 'Espace Client',
      description: 'Gérez vos envois',
      icon: Users,
      href: '/client',
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      title: 'Espace Livreur',
      description: 'Gérez vos livraisons',
      icon: Truck,
      href: '/livreur',
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      title: 'Suivi de Colis',
      description: 'Suivez vos colis',
      icon: Search,
      href: '/suivi',
      color: 'bg-purple-500 hover:bg-purple-600'
    }
  ]

  return (
    <div className="space-y-8 md:space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-4 md:space-y-6">
        <div className="flex justify-center">
          <Package className="h-12 w-12 md:h-16 md:w-16 text-primary-600" />
        </div>
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 px-4">
          Système de Gestion de Livraisons
        </h1>
        <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
          Gérez vos livraisons facilement avec notre interface mobile optimisée.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {quickActions.map((action) => {
          const Icon = action.icon
          return (
            <Link
              key={action.title}
              to={action.href}
              className={`${action.color} text-white rounded-xl p-4 md:p-6 transition-all duration-200 transform active:scale-95 md:hover:scale-105 shadow-lg`}
            >
              <div className="flex items-center space-x-3 mb-2 md:mb-3">
                <Icon className="h-6 w-6 md:h-8 md:w-8" />
                <h3 className="text-lg md:text-xl font-semibold">{action.title}</h3>
              </div>
              <p className="text-sm md:text-base text-white/90">{action.description}</p>
            </Link>
          )
        })}
      </div>

      {/* Features */}
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 text-center mb-6 md:mb-8">
          Pourquoi choisir DeliveryManager ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div key={feature.title} className="text-center space-y-2 md:space-y-3">
                <div className="flex justify-center">
                  <div className="bg-primary-100 p-2 md:p-3 rounded-full">
                    <Icon className="h-5 w-5 md:h-6 md:w-6 text-primary-600" />
                  </div>
                </div>
                <h3 className="text-base md:text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Statistics */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl text-white p-6 md:p-8">
        <div className="grid grid-cols-3 gap-4 md:gap-8 text-center">
          <div>
            <div className="text-xl md:text-3xl font-bold">1,250+</div>
            <div className="text-xs md:text-base text-primary-100">Colis livrés</div>
          </div>
          <div>
            <div className="text-xl md:text-3xl font-bold">98%</div>
            <div className="text-xs md:text-base text-primary-100">Satisfaction</div>
          </div>
          <div>
            <div className="text-xl md:text-3xl font-bold">24h</div>
            <div className="text-xs md:text-base text-primary-100">Délai moyen</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage