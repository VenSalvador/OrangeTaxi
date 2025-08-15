import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DatabasePage from './pages/DatabasePage';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <h1 className="text-4xl font-bold mb-4">🚀 Tailwind CSS is Working!</h1>
      <button className="px-6 py-3 bg-white text-blue-500 rounded-lg shadow-lg hover:bg-blue-100 transition">
        Test Button
      </button>
      <DatabasePage />
    </div>
    
  );
}

export default App
