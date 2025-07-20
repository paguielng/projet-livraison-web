// Données de test pour simuler une base de données

export interface Client {
  id: number
  nom: string
  prenom: string
  adresse: string
  telephone: string
  email: string
}

export interface Livreur {
  id: number
  nom: string
  prenom: string
  telephone: string
  email: string
  vehicule: string
}

export interface Colis {
  numero: number
  masse: number
  longueur: number
  largeur: number
  hauteur: number
  statut: 'En attente' | 'En cours de livraison' | 'Livré'
  expedition: string
  livraisonPrevue: string
  livraisonEffective?: string
  expediteur: number
  destinataire: number
  livreur?: number
}

export const mockClients: Client[] = [
  {
    id: 1,
    nom: 'Dupont',
    prenom: 'Jean',
    adresse: '10 rue de Paris, 75001 Paris',
    telephone: '0600000001',
    email: 'jean.dupont@email.com'
  },
  {
    id: 2,
    nom: 'Martin',
    prenom: 'Sophie',
    adresse: '15 avenue de Lyon, 69000 Lyon',
    telephone: '0600000002',
    email: 'sophie.martin@email.com'
  },
  {
    id: 3,
    nom: 'Bernard',
    prenom: 'Pierre',
    adresse: '22 boulevard de Marseille, 13000 Marseille',
    telephone: '0600000003',
    email: 'pierre.bernard@email.com'
  },
  {
    id: 4,
    nom: 'Dubois',
    prenom: 'Marie',
    adresse: '8 place de Toulouse, 31000 Toulouse',
    telephone: '0600000004',
    email: 'marie.dubois@email.com'
  },
  {
    id: 5,
    nom: 'Moreau',
    prenom: 'Antoine',
    adresse: '33 rue de Nice, 06000 Nice',
    telephone: '0600000005',
    email: 'antoine.moreau@email.com'
  }
]

export const mockDeliverers: Livreur[] = [
  {
    id: 1,
    nom: 'Durand',
    prenom: 'Paul',
    telephone: '0700000001',
    email: 'paul.durand@delivery.com',
    vehicule: 'Camion'
  },
  {
    id: 2,
    nom: 'Leroy',
    prenom: 'Emma',
    telephone: '0700000002',
    email: 'emma.leroy@delivery.com',
    vehicule: 'Moto'
  },
  {
    id: 3,
    nom: 'Petit',
    prenom: 'Lucas',
    telephone: '0700000003',
    email: 'lucas.petit@delivery.com',
    vehicule: 'Vélo'
  },
  {
    id: 4,
    nom: 'Roux',
    prenom: 'Camille',
    telephone: '0700000004',
    email: 'camille.roux@delivery.com',
    vehicule: 'Fourgon'
  }
]

export const mockPackages: Colis[] = [
  {
    numero: 1001,
    masse: 2.5,
    longueur: 30,
    largeur: 20,
    hauteur: 15,
    statut: 'En cours de livraison',
    expedition: '2025-01-15',
    livraisonPrevue: '2025-01-17',
    expediteur: 1,
    destinataire: 2,
    livreur: 1
  },
  {
    numero: 1002,
    masse: 1.2,
    longueur: 25,
    largeur: 18,
    hauteur: 10,
    statut: 'Livré',
    expedition: '2025-01-10',
    livraisonPrevue: '2025-01-12',
    livraisonEffective: '2025-01-12',
    expediteur: 2,
    destinataire: 1,
    livreur: 2
  },
  {
    numero: 1003,
    masse: 0.8,
    longueur: 20,
    largeur: 15,
    hauteur: 8,
    statut: 'En attente',
    expedition: '2025-01-16',
    livraisonPrevue: '2025-01-18',
    expediteur: 3,
    destinataire: 4
  },
  {
    numero: 1004,
    masse: 3.2,
    longueur: 35,
    largeur: 25,
    hauteur: 20,
    statut: 'En cours de livraison',
    expedition: '2025-01-14',
    livraisonPrevue: '2025-01-16',
    expediteur: 4,
    destinataire: 5,
    livreur: 3
  },
  {
    numero: 1005,
    masse: 1.8,
    longueur: 28,
    largeur: 22,
    hauteur: 12,
    statut: 'En attente',
    expedition: '2025-01-16',
    livraisonPrevue: '2025-01-19',
    expediteur: 5,
    destinataire: 3
  },
  {
    numero: 1006,
    masse: 0.5,
    longueur: 15,
    largeur: 12,
    hauteur: 5,
    statut: 'Livré',
    expedition: '2025-01-08',
    livraisonPrevue: '2025-01-10',
    livraisonEffective: '2025-01-09',
    expediteur: 1,
    destinataire: 3,
    livreur: 4
  },
  {
    numero: 1007,
    masse: 4.1,
    longueur: 40,
    largeur: 30,
    hauteur: 25,
    statut: 'En attente',
    expedition: '2025-01-17',
    livraisonPrevue: '2025-01-20',
    expediteur: 2,
    destinataire: 5
  }
]