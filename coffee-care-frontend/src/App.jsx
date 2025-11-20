import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import FarmerDashboard from './pages/FarmerDashboard';
import AdminDashboard from './pages/AdminDashboard';
import ExpertDashboard from './pages/ExpertDashboard';
import CoffeeVarieties from './pages/CoffeeVarieties';
import Factories from './pages/Factories';
import Education from './pages/Education';
import Market from './pages/Market';
import Counties from './pages/Counties';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function PrivateRoute({ children, role }) {
  const userRole = localStorage.getItem('role');
  if (!userRole || (role && userRole !== role)) return <Navigate to="/" />;
  return children;
}

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto p-4">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/farmer-dashboard" element={
            <PrivateRoute role="farmer"><FarmerDashboard /></PrivateRoute>
          } />
          <Route path="/admin-dashboard" element={
            <PrivateRoute role="admin"><AdminDashboard /></PrivateRoute>
          } />
          <Route path="/expert-dashboard" element={
            <PrivateRoute role="expert"><ExpertDashboard /></PrivateRoute>
          } />
          <Route path="/coffee-varieties" element={<CoffeeVarieties />} />
          <Route path="/factories" element={<Factories />} />
          <Route path="/education" element={<Education />} />
          <Route path="/market" element={<Market />} />
          <Route path="/counties" element={<Counties />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
