import React, { useState } from 'react'
import { Package, Plus, Clock, CheckCircle, Truck, User } from 'lucide-react'
import { mockClients, mockPackages } from '../data/mockData'

const ClientDashboard: React.FC = () => {
  const [selectedClient, setSelectedClient] = useState<number | null>(null)
  const [showNewPackageForm, setShowNewPackageForm] = useState(false)
  const [newPackage, setNewPackage] = useState({
    destinataire: '',
    masse: '',
    longueur: '',
    largeur: '',
    hauteur: ''
  })

  const client = selectedClient ? mockClients.find(c => c.id === selectedClient) : null
  const clientPackages = selectedClient ? mockPackages.filter(p => p.expediteur === selectedClient) : []

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

  const handleSubmitPackage = (e: React.FormEvent) => {
    e.preventDefault()
    // Ici, vous ajouteriez la logique pour envoyer les données au backend
    console.log('Nouveau colis:', newPackage)
    setShowNewPackageForm(false)
    setNewPackage({
      destinataire: '',
      masse: '',
      longueur: '',
      largeur: '',
      hauteur: ''
    })
  }

  if (!selectedClient) {
    return (
      <div className="space-y-4 md:space-y-6">
        <div className="flex items-center space-x-3">
          <User className="h-6 w-6 md:h-8 md:w-8 text-primary-600" />
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Espace Client</h1>
        </div>

        <div className="card">
          <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">
            Sélectionnez votre profil client
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {mockClients.map((client) => (
              <button
                key={client.id}
                onClick={() => setSelectedClient(client.id)}
                className="p-3 md:p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 active:bg-primary-100 transition-colors duration-200 text-left"
              >
                <div className="font-medium text-gray-900 text-sm md:text-base">
                  {client.prenom} {client.nom}
                </div>
                <div className="text-xs md:text-sm text-gray-500">{client.email}</div>
                <div className="text-xs md:text-sm text-gray-500 truncate">{client.adresse}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <User className="h-6 w-6 md:h-8 md:w-8 text-primary-600" />
          <div>
            <h1 className="text-xl md:text-3xl font-bold text-gray-900">
              Bonjour, {client?.prenom} {client?.nom}
            </h1>
            <p className="text-sm md:text-base text-gray-600">{client?.email}</p>
          </div>
        </div>
        <button
          onClick={() => setSelectedClient(null)}
          className="btn-secondary text-sm md:text-base px-3 py-2 md:px-4"
        >
          Changer de client
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4 md:space-y-6">
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg md:text-xl font-semibold text-gray-900">Mes Colis</h2>
              <button
                onClick={() => setShowNewPackageForm(true)}
                className="btn-primary flex items-center space-x-1 md:space-x-2 text-sm md:text-base px-3 py-2 md:px-4"
              >
                <Plus className="h-4 w-4 md:h-5 md:w-5" />
                <span>Nouveau colis</span>
              </button>
            </div>

            {clientPackages.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <Package className="h-10 w-10 md:h-12 md:w-12 mx-auto mb-3 text-gray-300" />
                <p>Aucun colis trouvé</p>
              </div>
            ) : (
              <div className="space-y-2 md:space-y-3">
                {clientPackages.map((pkg) => (
                  <div key={pkg.numero} className="border border-gray-200 rounded-lg p-3 md:p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Package className="h-4 w-4 md:h-5 md:w-5 text-gray-400" />
                        <span className="font-medium text-sm md:text-base">Colis #{pkg.numero}</span>
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${getStatusColor(pkg.statut)}`}>
                        {getStatusIcon(pkg.statut)}
                        <span>{pkg.statut}</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 text-xs md:text-sm text-gray-600">
                      <div>
                        <span className="font-medium">Destinataire:</span> {mockClients.find(c => c.id === pkg.destinataire)?.nom}
                      </div>
                      <div>
                        <span className="font-medium">Expédition:</span> {pkg.expedition}
                      </div>
                      <div>
                        <span className="font-medium">Livraison prévue:</span> {pkg.livraisonPrevue}
                      </div>
                      <div>
                        <span className="font-medium">Taille:</span> {pkg.longueur}×{pkg.largeur}×{pkg.hauteur}cm
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="space-y-4 md:space-y-6">
          <div className="card">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3">Statistiques</h3>
            <div className="space-y-2 md:space-y-3">
              <div className="flex justify-between">
                <span className="text-sm md:text-base text-gray-600">Total colis</span>
                <span className="font-medium">{clientPackages.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm md:text-base text-gray-600">En attente</span>
                <span className="font-medium">{clientPackages.filter(p => p.statut === 'En attente').length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm md:text-base text-gray-600">En cours</span>
                <span className="font-medium">{clientPackages.filter(p => p.statut === 'En cours de livraison').length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm md:text-base text-gray-600">Livrés</span>
                <span className="font-medium">{clientPackages.filter(p => p.statut === 'Livré').length}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal pour nouveau colis */}
      {showNewPackageForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end md:items-center justify-center p-0 md:p-4 z-50">
          <div className="bg-white rounded-t-xl md:rounded-xl w-full md:max-w-md md:w-full p-4 md:p-6 max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Nouveau Colis</h3>
            <form onSubmit={handleSubmitPackage} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Destinataire
                </label>
                <select
                  value={newPackage.destinataire}
                  onChange={(e) => setNewPackage({...newPackage, destinataire: e.target.value})}
                  className="select-field"
                  required
                >
                  <option value="">Sélectionner un destinataire</option>
                  {mockClients.filter(c => c.id !== selectedClient).map(client => (
                    <option key={client.id} value={client.id}>
                      {client.prenom} {client.nom}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Masse (kg)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={newPackage.masse}
                    onChange={(e) => setNewPackage({...newPackage, masse: e.target.value})}
                    className="input-field"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Longueur (cm)
                  </label>
                  <input
                    type="number"
                    value={newPackage.longueur}
                    onChange={(e) => setNewPackage({...newPackage, longueur: e.target.value})}
                    className="input-field"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Largeur (cm)
                  </label>
                  <input
                    type="number"
                    value={newPackage.largeur}
                    onChange={(e) => setNewPackage({...newPackage, largeur: e.target.value})}
                    className="input-field"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Hauteur (cm)
                  </label>
                  <input
                    type="number"
                    value={newPackage.hauteur}
                    onChange={(e) => setNewPackage({...newPackage, hauteur: e.target.value})}
                    className="input-field"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 pt-4">
                <button type="submit" className="btn-primary flex-1 py-3 md:py-2">
                  Créer le colis
                </button>
                <button
                  type="button"
                  onClick={() => setShowNewPackageForm(false)}
                  className="btn-secondary flex-1 py-3 md:py-2"
                >
                  Annuler
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default ClientDashboard