import React, { useState } from 'react'
import { Search, Package, Clock, CheckCircle, Truck, User, MapPin, Calendar } from 'lucide-react'
import { mockPackages, mockClients, mockDeliverers } from '../data/mockData'

const PackageTracking: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResult, setSearchResult] = useState<any>(null)
  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSearching(true)
    
    // Simulation d'une recherche
    setTimeout(() => {
      const packageNumber = parseInt(searchTerm)
      const foundPackage = mockPackages.find(p => p.numero === packageNumber)
      setSearchResult(foundPackage || null)
      setIsSearching(false)
    }, 500)
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'En attente':
        return <Clock className="h-5 w-5 text-yellow-500" />
      case 'En cours de livraison':
        return <Truck className="h-5 w-5 text-blue-500" />
      case 'Livré':
        return <CheckCircle className="h-5 w-5 text-green-500" />
      default:
        return <Package className="h-5 w-5 text-gray-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'En attente':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'En cours de livraison':
        return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'Livré':
        return 'bg-green-100 text-green-800 border-green-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getTrackingSteps = (status: string) => {
    const steps = [
      { name: 'Colis déposé', status: 'completed' },
      { name: 'En attente de prise en charge', status: status === 'En attente' ? 'current' : 'completed' },
      { name: 'En cours de livraison', status: status === 'En cours de livraison' ? 'current' : status === 'Livré' ? 'completed' : 'pending' },
      { name: 'Livré', status: status === 'Livré' ? 'completed' : 'pending' }
    ]
    return steps
  }

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex items-center space-x-3">
        <Search className="h-6 w-6 md:h-8 md:w-8 text-primary-600" />
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Suivi de Colis</h1>
      </div>

      <div className="card">
        <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">
          Rechercher un colis
        </h2>
        <form onSubmit={handleSearch} className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Entrez le numéro de colis..."
            className="input-field flex-1 text-base"
            required
          />
          <button
            type="submit"
            disabled={isSearching}
            className="btn-primary flex items-center justify-center space-x-2 py-3 md:py-2 md:px-4"
          >
            <Search className="h-4 w-4 md:h-5 md:w-5" />
            <span>{isSearching ? 'Recherche...' : 'Rechercher'}</span>
          </button>
        </form>
      </div>

      {searchTerm && !isSearching && (
        <div className="card">
          {searchResult ? (
            <div className="space-y-4 md:space-y-6">
              {/* En-tête du colis */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Package className="h-6 w-6 md:h-8 md:w-8 text-primary-600" />
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                      Colis #{searchResult.numero}
                    </h3>
                    <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full border ${getStatusColor(searchResult.statut)}`}>
                      {getStatusIcon(searchResult.statut)}
                      <span className="font-medium text-sm md:text-base">{searchResult.statut}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Informations du colis */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3 md:space-y-4">
                  <h4 className="text-base md:text-lg font-semibold text-gray-900">Informations</h4>
                  <div className="space-y-2 md:space-y-3">
                    <div className="flex items-center space-x-3">
                      <User className="h-4 w-4 md:h-5 md:w-5 text-gray-400 flex-shrink-0" />
                      <div>
                        <span className="text-xs md:text-sm text-gray-500">Expéditeur:</span>
                        <div className="font-medium text-sm md:text-base">
                          {mockClients.find(c => c.id === searchResult.expediteur)?.prenom} {mockClients.find(c => c.id === searchResult.expediteur)?.nom}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-4 w-4 md:h-5 md:w-5 text-gray-400 flex-shrink-0" />
                      <div>
                        <span className="text-xs md:text-sm text-gray-500">Destinataire:</span>
                        <div className="font-medium text-sm md:text-base">
                          {mockClients.find(c => c.id === searchResult.destinataire)?.prenom} {mockClients.find(c => c.id === searchResult.destinataire)?.nom}
                        </div>
                        <div className="text-xs md:text-sm text-gray-500">
                          {mockClients.find(c => c.id === searchResult.destinataire)?.adresse}
                        </div>
                      </div>
                    </div>
                    {searchResult.livreur && (
                      <div className="flex items-center space-x-3">
                        <Truck className="h-4 w-4 md:h-5 md:w-5 text-gray-400 flex-shrink-0" />
                        <div>
                          <span className="text-xs md:text-sm text-gray-500">Livreur:</span>
                          <div className="font-medium text-sm md:text-base">
                            {mockDeliverers.find(d => d.id === searchResult.livreur)?.prenom} {mockDeliverers.find(d => d.id === searchResult.livreur)?.nom}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-3 md:space-y-4">
                  <h4 className="text-base md:text-lg font-semibold text-gray-900">Détails</h4>
                  <div className="space-y-2 md:space-y-3">
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-4 w-4 md:h-5 md:w-5 text-gray-400 flex-shrink-0" />
                      <div>
                        <span className="text-xs md:text-sm text-gray-500">Expédition:</span>
                        <div className="font-medium text-sm md:text-base">{searchResult.expedition}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-4 w-4 md:h-5 md:w-5 text-gray-400 flex-shrink-0" />
                      <div>
                        <span className="text-xs md:text-sm text-gray-500">Livraison prévue:</span>
                        <div className="font-medium text-sm md:text-base">{searchResult.livraisonPrevue}</div>
                      </div>
                    </div>
                    {searchResult.livraisonEffective && (
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0" />
                        <div>
                          <span className="text-xs md:text-sm text-gray-500">Livraison effective:</span>
                          <div className="font-medium text-sm md:text-base">{searchResult.livraisonEffective}</div>
                        </div>
                      </div>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 text-xs md:text-sm">
                      <div>
                        <span className="text-gray-500">Masse:</span>
                        <div className="font-medium">{searchResult.masse} kg</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Taille:</span>
                        <div className="font-medium">{searchResult.longueur}×{searchResult.largeur}×{searchResult.hauteur} cm</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Suivi étapes */}
              <div className="space-y-3 md:space-y-4">
                <h4 className="text-base md:text-lg font-semibold text-gray-900">Suivi de livraison</h4>
                <div className="space-y-2 md:space-y-3">
                  {getTrackingSteps(searchResult.statut).map((step, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full border-2 ${
                        step.status === 'completed' 
                          ? 'bg-green-500 border-green-500' 
                          : step.status === 'current'
                          ? 'bg-blue-500 border-blue-500'
                          : 'bg-gray-200 border-gray-300'
                      }`} />
                      <span className={`text-sm md:text-base ${
                        step.status === 'completed' || step.status === 'current'
                          ? 'text-gray-900 font-medium'
                          : 'text-gray-500'
                      }`}>
                        {step.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <Package className="h-10 w-10 md:h-12 md:w-12 mx-auto mb-3 text-gray-300" />
              <h3 className="text-base md:text-lg font-medium text-gray-900 mb-2">
                Colis non trouvé
              </h3>
              <p className="text-sm md:text-base text-gray-500 px-4">
                Aucun colis trouvé avec le numéro "{searchTerm}". 
                Vérifiez le numéro et réessayez.
              </p>
            </div>
          )}
        </div>
      )}

      {/* Exemples de numéros */}
      <div className="card">
        <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3">
          Exemples de numéros de colis
        </h3>
        <p className="text-sm md:text-base text-gray-600 mb-3">
          Vous pouvez tester le suivi avec ces numéros d'exemple :
        </p>
        <div className="grid grid-cols-3 md:flex md:flex-wrap gap-2">
          {mockPackages.map((pkg) => (
            <button
              key={pkg.numero}
              onClick={() => setSearchTerm(pkg.numero.toString())}
              className="px-2 md:px-3 py-2 md:py-1 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 rounded-md text-xs md:text-sm font-mono transition-colors duration-200"
            >
              {pkg.numero}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PackageTracking