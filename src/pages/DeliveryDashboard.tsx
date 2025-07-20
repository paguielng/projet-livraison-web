import React, { useState } from 'react'
import { Truck, Package, Clock, CheckCircle, User, MapPin } from 'lucide-react'
import { mockDeliverers, mockPackages, mockClients } from '../data/mockData'

const DeliveryDashboard: React.FC = () => {
  const [selectedDeliverer, setSelectedDeliverer] = useState<number | null>(null)

  const deliverer = selectedDeliverer ? mockDeliverers.find(d => d.id === selectedDeliverer) : null
  const assignedPackages = selectedDeliverer ? mockPackages.filter(p => p.livreur === selectedDeliverer) : []
  const availablePackages = mockPackages.filter(p => !p.livreur && p.statut === 'En attente')

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'En attente':
        return <Clock className="h-4 w-4 text-yellow-500" />
      case 'En cours de livraison':
        return <Truck className="h-4 w-4 text-blue-500" />
      case 'Livré':
        return <CheckCircle className="h-4 w-4 text-green-500" />
      default:
        return <Package className="h-4 w-4 text-gray-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'En attente':
        return 'bg-yellow-100 text-yellow-800'
      case 'En cours de livraison':
        return 'bg-blue-100 text-blue-800'
      case 'Livré':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const handleStatusChange = (packageId: number, newStatus: string) => {
    // Ici, vous ajouteriez la logique pour mettre à jour le statut dans le backend
    console.log(`Changement de statut pour le colis ${packageId}: ${newStatus}`)
  }

  const handleTakePackage = (packageId: number) => {
    // Ici, vous ajouteriez la logique pour assigner le colis au livreur
    console.log(`Prise en charge du colis ${packageId} par le livreur ${selectedDeliverer}`)
  }

  if (!selectedDeliverer) {
    return (
      <div className="space-y-6">
        <div className="flex items-center space-x-3">
          <Truck className="h-8 w-8 text-primary-600" />
          <h1 className="text-3xl font-bold text-gray-900">Espace Livreur</h1>
        </div>

        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Sélectionnez votre profil livreur
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockDeliverers.map((deliverer) => (
              <button
                key={deliverer.id}
                onClick={() => setSelectedDeliverer(deliverer.id)}
                className="p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors duration-200 text-left"
              >
                <div className="font-medium text-gray-900">
                  {deliverer.prenom} {deliverer.nom}
                </div>
                <div className="text-sm text-gray-500">{deliverer.email}</div>
                <div className="text-sm text-gray-500 flex items-center space-x-1">
                  <Truck className="h-3 w-3" />
                  <span>{deliverer.vehicule}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Truck className="h-8 w-8 text-primary-600" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Bonjour, {deliverer?.prenom} {deliverer?.nom}
            </h1>
            <p className="text-gray-600 flex items-center space-x-2">
              <span>{deliverer?.email}</span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <Truck className="h-4 w-4" />
                <span>{deliverer?.vehicule}</span>
              </span>
            </p>
          </div>
        </div>
        <button
          onClick={() => setSelectedDeliverer(null)}
          className="btn-secondary"
        >
          Changer de livreur
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Mes livraisons */}
          <div className="card">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Mes Livraisons</h2>
            {assignedPackages.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <Package className="h-12 w-12 mx-auto mb-3 text-gray-300" />
                <p>Aucune livraison assignée</p>
              </div>
            ) : (
              <div className="space-y-3">
                {assignedPackages.map((pkg) => {
                  const expediteur = mockClients.find(c => c.id === pkg.expediteur)
                  const destinataire = mockClients.find(c => c.id === pkg.destinataire)
                  
                  return (
                    <div key={pkg.numero} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          <Package className="h-5 w-5 text-gray-400" />
                          <span className="font-medium">Colis #{pkg.numero}</span>
                        </div>
                        <div className={`px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${getStatusColor(pkg.statut)}`}>
                          {getStatusIcon(pkg.statut)}
                          <span>{pkg.statut}</span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4" />
                          <span>De: {expediteur?.prenom} {expediteur?.nom}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4" />
                          <span>Vers: {destinataire?.prenom} {destinataire?.nom}</span>
                        </div>
                        <div>
                          <span className="font-medium">Expédition:</span> {pkg.expedition}
                        </div>
                        <div>
                          <span className="font-medium">Livraison prévue:</span> {pkg.livraisonPrevue}
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <label className="text-sm font-medium text-gray-700">Statut:</label>
                        <select
                          value={pkg.statut}
                          onChange={(e) => handleStatusChange(pkg.numero, e.target.value)}
                          className="text-sm border border-gray-300 rounded px-2 py-1"
                        >
                          <option value="En attente">En attente</option>
                          <option value="En cours de livraison">En cours de livraison</option>
                          <option value="Livré">Livré</option>
                        </select>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>

          {/* Colis disponibles */}
          <div className="card">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Colis Disponibles</h2>
            {availablePackages.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <Package className="h-12 w-12 mx-auto mb-3 text-gray-300" />
                <p>Aucun colis disponible</p>
              </div>
            ) : (
              <div className="space-y-3">
                {availablePackages.map((pkg) => {
                  const expediteur = mockClients.find(c => c.id === pkg.expediteur)
                  const destinataire = mockClients.find(c => c.id === pkg.destinataire)
                  
                  return (
                    <div key={pkg.numero} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          <Package className="h-5 w-5 text-gray-400" />
                          <span className="font-medium">Colis #{pkg.numero}</span>
                        </div>
                        <button
                          onClick={() => handleTakePackage(pkg.numero)}
                          className="btn-primary text-sm"
                        >
                          Prendre en charge
                        </button>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4" />
                          <span>De: {expediteur?.prenom} {expediteur?.nom}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4" />
                          <span>Vers: {destinataire?.prenom} {destinataire?.nom}</span>
                        </div>
                        <div>
                          <span className="font-medium">Masse:</span> {pkg.masse}kg
                        </div>
                        <div>
                          <span className="font-medium">Dimensions:</span> {pkg.longueur}×{pkg.largeur}×{pkg.hauteur}cm
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Statistiques</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Colis assignés</span>
                <span className="font-medium">{assignedPackages.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">En cours</span>
                <span className="font-medium">{assignedPackages.filter(p => p.statut === 'En cours de livraison').length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Livrés</span>
                <span className="font-medium">{assignedPackages.filter(p => p.statut === 'Livré').length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Disponibles</span>
                <span className="font-medium">{availablePackages.length}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeliveryDashboard