import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaUsers, FaMoneyBillWave, FaTruck, FaTimes, FaBars } from 'react-icons/fa';

function Sidebar({ darkMode, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: 'Home', path: '/', icon: <FaHome /> },
    { name: 'Farmer Dashboard', path: '/farmer', icon: <FaUser /> },
    { name: 'Admin Dashboard', path: '/admin', icon: <FaUsers /> },
    { name: 'Payments', path: '/payments', icon: <FaMoneyBillWave /> },
    { name: 'Deliveries', path: '/deliveries', icon: <FaTruck /> },
  ];

  return (
    <>
      {/* Mobile toggle button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={toggleSidebar}
          className="p-2 bg-green-700 dark:bg-gray-800 text-white rounded shadow-md hover:bg-green-600 dark:hover:bg-gray-700 transition"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-green-700 dark:bg-gray-800 text-white transform md:translate-x-0 transition-transform duration-300 z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 flex flex-col h-full">
          <h2 className="text-2xl font-bold mb-8">Coffee Care</h2>

          <nav className="flex-1">
            {menuItems.map((item, idx) => (
              <Link
                key={idx}
                to={item.path}
                className="flex items-center space-x-2 mb-4 p-2 rounded hover:bg-green-600 dark:hover:bg-gray-700 transition"
                onClick={() => setIsOpen(false)} // Close sidebar on mobile after click
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          <button
            onClick={toggleDarkMode}
            className="mt-auto p-2 rounded bg-green-600 dark:bg-gray-700 hover:bg-green-500 dark:hover:bg-gray-600 transition"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}

export default Sidebar;
