import { useState } from 'react';
import { Trash2, Edit, Plus } from 'lucide-react';

const MinhasObras = () => {
  const [obras, setObras] = useState([
    { id: 1, titulo: 'Abstracao Digital', imagem: 'https://via.placeholder.com/250?text=Obra+1', criada: '2024-01-15' },
    { id: 2, titulo: 'Flores Cromaticas', imagem: 'https://via.placeholder.com/250?text=Obra+2', criada: '2024-02-10' },
    { id: 3, titulo: 'Paisagem Noturna', imagem: 'https://via.placeholder.com/250?text=Obra+3', criada: '2024-02-20' },
  ]);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Minhas Obras</h1>
        <button className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
          <Plus size={20} /> Nova Obra
        </button>
      </div>

      {obras.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          <p>Voce ainda nao criou nenhuma obra. Comece criando uma no Studio!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {obras.map((obra) => (
            <div key={obra.id} className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition">
              <img src={obra.imagem} alt={obra.titulo} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{obra.titulo}</h3>
                <p className="text-sm text-gray-400 mb-4">Criada em {obra.criada}</p>
                <div className="flex gap-2">
                  <button className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded">
                    <Edit size={16} /> Editar
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded">
                    <Trash2 size={16} /> Deletar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MinhasObras;
