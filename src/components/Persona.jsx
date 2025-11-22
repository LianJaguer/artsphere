import { useState } from 'react';
import { Send, MessageCircle } from 'lucide-react';

const Persona = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [selectedPersona, setSelectedPersona] = useState('Muse');

  const personas = [
    { id: 'muse', name: 'Muse', description: 'Inspira criatividade', color: 'from-purple-500 to-pink-500' },
    { id: 'critic', name: 'Critic', description: 'Oferece critica construtiva', color: 'from-blue-500 to-cyan-500' },
    { id: 'mentor', name: 'Mentor', description: 'Oferece orientacao', color: 'from-green-500 to-emerald-500' },
  ];

  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    const userMessage = { id: Date.now(), text: input, sender: 'user' };
    setMessages([...messages, userMessage]);
    setInput('');
    
    setTimeout(() => {
      const aiMessage = {
        id: Date.now() + 1,
        text: `Resposta de ${selectedPersona}: Que pergunta interessante! Estou aqui para ajudar com sua jornada artistica.`,
        sender: 'ai'
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 800);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Persona - Chat de IA</h1>
      
      <div className="mb-6">
        <label className="block text-sm font-medium mb-3">Escolha uma Persona:</label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {personas.map((persona) => (
            <button
              key={persona.id}
              onClick={() => setSelectedPersona(persona.name)}
              className={`p-4 rounded-lg border-2 transition ${
                selectedPersona === persona.name
                  ? `border-white bg-gradient-to-r ${persona.color}`
                  : 'border-gray-600 bg-gray-800 hover:border-gray-400'
              }`}
            >
              <h3 className="font-bold text-lg mb-1">{persona.name}</h3>
              <p className="text-sm opacity-90">{persona.description}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-4 mb-4 flex flex-col h-96">
        <div className="flex-1 overflow-y-auto mb-4 space-y-4">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <MessageCircle size={48} className="mb-4 opacity-50" />
              <p>Comece uma conversacao com {selectedPersona}</p>
            </div>
          ) : (
            messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    msg.sender === 'user'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-700 text-gray-100'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))
          )}
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Digite sua mensagem..."
            className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400"
          />
          <button
            onClick={handleSendMessage}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <Send size={18} /> Enviar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Persona;
