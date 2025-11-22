import { useState } from 'react'
import Explorar from './components/Explorar'
import MinhasObras from './components/MinhasObras'
import Studio from './components/Studio'
import Persona from './components/Persona'

export default function App() {
  const [activeTab, setActiveTab] = useState('explorar')

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black">
      {/* Header */}
      <header className="bg-black bg-opacity-50 backdrop-blur-md border-b border-purple-500 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-3xl">🎨</span>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                ARTSPHERE
              </h1>
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-sm text-purple-300">Beta v1.0</span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-black bg-opacity-30 border-b border-purple-500 border-opacity-30 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 flex gap-4 overflow-x-auto">
          {[
            { id: 'explorar', label: '🖼️ Explorar', icon: '📷' },
            { id: 'obras', label: '🎨 Minhas Obras', icon: '🎭' },
            { id: 'studio', label: '✨ Studio IA', icon: '🤖' },
            { id: 'persona', label: '💬 Persona', icon: '🎭' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 font-semibold transition-all ${
                activeTab === tab.id
                  ? 'text-pink-400 border-b-2 border-pink-400'
                  : 'text-purple-300 hover:text-pink-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'explorar' && <Explorar />}
        {activeTab === 'obras' && <MinhasObras />}
        {activeTab === 'studio' && <Studio />}
        {activeTab === 'persona' && <Persona />}
      </main>

      {/* Footer */}
      <footer className="bg-black bg-opacity-50 border-t border-purple-500 border-opacity-30 mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-purple-300 text-sm">
          <p>🚀 ARTSPHERE - Plataforma de Artes Alimentada por IA</p>
          <p className="mt-2">Desenvolvido com React, Firebase e Gemini AI</p>
          <p className="mt-4 text-purple-500">© 2025 ARTSPHERE. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
