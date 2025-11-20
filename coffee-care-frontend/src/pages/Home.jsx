import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';

function Home() {
  const [darkMode, setDarkMode] = useState(false);

  // Sample data (in a real app, fetch from API)
  const stats = [
    { title: 'Total Farmers', value: 120, icon: '👨‍🌾', color: 'bg-green-500' },
    { title: 'Total Deliveries', value: 80, icon: '🚚', color: 'bg-blue-500' },
    { title: 'Total Payments', value: 150, icon: '💰', color: 'bg-yellow-500' },
    { title: 'Pending Payments', value: 20, icon: '⏳', color: 'bg-red-500' },
  ];

  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <Sidebar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="flex-1 p-8 ml-0 md:ml-64">
        <h1 className="text-3xl font-bold mb-6">Welcome to Coffee Care</h1>
        <p className="mb-6">Manage your coffee farming, deliveries, and payments efficiently.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-lg shadow-lg flex flex-col items-center justify-center ${stat.color} text-white hover:scale-105 transition`}
            >
              <span className="text-4xl mb-2">{stat.icon}</span>
              <h2 className="text-xl font-bold">{stat.title}</h2>
              <p className="text-2xl mt-1">{stat.value}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;
