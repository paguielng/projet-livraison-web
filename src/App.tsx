import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ClientDashboard from './pages/ClientDashboard'
import DeliveryDashboard from './pages/DeliveryDashboard'
import PackageTracking from './pages/PackageTracking'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/client" element={<ClientDashboard />} />
        <Route path="/livreur" element={<DeliveryDashboard />} />
        <Route path="/suivi" element={<PackageTracking />} />
      </Routes>
    </Layout>
  )
}

export default App