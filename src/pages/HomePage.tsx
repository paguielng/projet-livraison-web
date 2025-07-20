import React from 'react'
import { Link } from 'react-router-dom'
import { Package, Truck, Users, Search, Clock, Shield, Zap } from 'lucide-react'

const HomePage: React.FC = () => {
  const features = [
    {
      icon: Clock,
      title: 'Suivi en temps réel',
      description: 'Suivez vos colis en temps réel avec des mises à jour instantanées'
    },
    {
      icon: Shield,
      title: 'Sécurisé',
      description: 'Vos données sont protégées avec les dernières technologies de sécurité'
    },
    {
      icon: Zap,
      title: 'Rapide et efficace',
      description: 'Interface moderne et intuitive pour une gestion optimale'
    }
  ]

  const quickActions = [
    {
      title: 'Espace Client',
      description: 'Gérez vos envois et suivez vos colis',
      icon: Users,
      href: '/client',
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      title: 'Espace Livreur',
      description: 'Gérez vos livraisons et mettez à jour les statuts',
      icon: Truck,
      href: '/livreur',
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      title: 'Suivi de Colis',
      description: 'Recherchez et suivez un colis spécifique',
      icon: Search,
      href: '/suivi',
      color: 'bg-purple-500 hover:bg-purple-600'
    }
  ]

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <Package className="h-16 w-16 text-primary-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
          Système de Gestion de Livraisons
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Une solution complète pour gérer vos livraisons de colis avec une interface moderne 
          et intuitive pour les clients et les livreurs.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {quickActions.map((action) => {
          const Icon = action.icon
          return (
            <Link
              key={action.title}
              to={action.href}
              className={`${action.color} text-white rounded-xl p-6 transition-all duration-200 transform hover:scale-105 shadow-lg`}
            >
              <div className="flex items-center space-x-3 mb-3">
                <Icon className="h-8 w-8" />
                <h3 className="text-xl font-semibold">{action.title}</h3>
              </div>
              <p className="text-white/90">{action.description}</p>
            </Link>
          )
        })}
      </div>

      {/* Features */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
          Pourquoi choisir DeliveryManager ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div key={feature.title} className="text-center space-y-3">
                <div className="flex justify-center">
                  <div className="bg-primary-100 p-3 rounded-full">
                    <Icon className="h-6 w-6 text-primary-600" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Statistics */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl text-white p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold">1,250+</div>
            <div className="text-primary-100">Colis livrés</div>
          </div>
          <div>
            <div className="text-3xl font-bold">98%</div>
            <div className="text-primary-100">Taux de satisfaction</div>
          </div>
          <div>
            <div className="text-3xl font-bold">24h</div>
            <div className="text-primary-100">Délai moyen de livraison</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage