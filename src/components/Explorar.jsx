export default function Explorar() {
  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map(i => (
          <div key={i} className="bg-gradient-to-br from-purple-800 to-indigo-900 rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-pink-500/50 transition-all cursor-pointer group">
            <div className="h-48 bg-gradient-to-b from-purple-600 to-indigo-600 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity transform group-hover:translate-x-full"></div>
              <span className="text-6xl">{['🎨', '✨', '🌈', '🎭', '🖌️', '💫'][i-1]}</span>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-pink-400">Obra #{i}</h3>
              <p className="text-sm text-purple-300 mt-2">Artista Incrível • {Math.floor(Math.random()*999)+100} curtidas</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
