import { useState } from 'react';
import { ImagePlus, Download, Sparkles } from 'lucide-react';

const Studio = () => {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [generatedImages, setGeneratedImages] = useState([]);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setIsLoading(true);
    // Simulated API call to Gemini
    setTimeout(() => {
      const newImage = {
        id: Date.now(),
        url: `https://via.placeholder.com/500?text=${encodeURIComponent(prompt)}`,
        prompt,
        criada: new Date().toLocaleDateString('pt-BR')
      };
      setGeneratedImages([newImage, ...generatedImages]);
      setPrompt('');
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Studio de Criacao</h1>
      
      <div className="bg-gray-800 rounded-lg p-6 mb-6">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Descreva sua imagem:</label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ex: Um castelo no topo de uma montanha ao por do sol..."
            className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white placeholder-gray-400"
            rows="4"
          />
        </div>
        
        <button
          onClick={handleGenerate}
          disabled={isLoading || !prompt.trim()}
          className="flex items-center gap-2 w-full justify-center bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-4 rounded-lg hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Sparkles size={20} /> {isLoading ? 'Gerando...' : 'Gerar Imagem'}
        </button>
      </div>

      <h2 className="text-xl font-bold mb-4">Imagens Geradas</h2>
      
      {generatedImages.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          <ImagePlus size={48} className="mx-auto mb-4 opacity-50" />
          <p>Nenhuma imagem gerada ainda. Comece descrevendo uma!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {generatedImages.map((img) => (
            <div key={img.id} className="bg-gray-800 rounded-lg overflow-hidden">
              <img src={img.url} alt={img.prompt} className="w-full h-64 object-cover" />
              <div className="p-4">
                <p className="text-sm text-gray-400 mb-2 line-clamp-2">{img.prompt}</p>
                <p className="text-xs text-gray-500 mb-3">Criada em {img.criada}</p>
                <button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded">
                  <Download size={16} /> Baixar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Studio;
