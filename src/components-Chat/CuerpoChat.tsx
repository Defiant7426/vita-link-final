import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

export default function CuerpoChat() {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const [messages, setMessages] = useState([
    { sender: 'Asistente IA', text: 'Hola, ¿en qué puedo ayudarte a reservar una cita médica?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isListening, setIsListening] = useState(false);
  const { theme } = useContext(ThemeContext);
  const username = localStorage.getItem("username") || "Paciente";


  // Función para manejar la captura de voz
  const startListening = () => {
    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.lang = 'es-ES'; // Idioma español
    recognition.interimResults = false;

    recognition.onstart = () => setIsListening(true);

    recognition.onresult = (event: { results: { transcript: any; }[][]; }) => {
      const transcript = event.results[0][0].transcript;
      sendMessage(transcript);  // Enviar el mensaje como texto
    };

    recognition.onend = () => setIsListening(false);
    recognition.start();
  };

  // Función para convertir texto a voz
  const speakText = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-ES'; // Idioma español
    window.speechSynthesis.speak(utterance);
  };

  // Enviar el mensaje
  const sendMessage = async (message: string) => {
    if (message.trim() === '') return;

    const newMessages = [...messages, { sender: username, text: message }];
    setMessages(newMessages);
    setInputValue('');

    try {
      const response = await axios.post('http://localhost:3001/api/chat', {
        username,
        messages: newMessages.map(msg => ({
          role: msg.sender === username ? 'user' : 'assistant',
          content: msg.text
        }))
      });

      const gptResponse = response.data.response;

      // Mostrar respuesta de GPT y reproducirla
      setMessages([...newMessages, { sender: 'Asistente IA', text: gptResponse }]);
      speakText(gptResponse);  // Reproducir la respuesta del asistente

    } catch (error) {
      console.error('Error al obtener la respuesta de GPT:', error);
      setMessages([...newMessages, { sender: 'Asistente IA', text: 'Lo siento, ha ocurrido un error. Por favor, intenta de nuevo.' }]);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    
    <div
      className={`flex flex-col ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
      style={{ minHeight: '80vh' }}
    >
      <div
        className="max-w-4xl mx-auto py-4 px-6 flex flex-col"
        style={{ flexGrow: 1, maxHeight: '80vh', overflow: 'hidden' }} // Ajuste de altura
      >
        <div
          className={`flex-1 overflow-y-auto border rounded-lg p-4 bg-gray-50' ${theme === 'dark' ? 'bg-[#2A2A40] text-[#F3F4F6]' : 'bg-white text-black'}`}
          style={{ maxHeight: 'calc(100% - 100px)', overflowY: 'auto' }} // Ajuste para evitar scroll
        >
          {messages.map((msg, index) => (
            <div key={index} className="mb-4">
              <div className={`text-sm ${msg.sender === username ? 'text-gray-700' : 'text-blue-500'}`}>
                {msg.sender}: {msg.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className={`mt-4 flex items-center border-t pt-4 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
          <input
            type="text"
            className = {`flex-1 border rounded-l-lg p-2 outline-none ${theme === 'dark' ? 'bg-[#2A2A40] text-[#F3F4F6]' : 'bg-white text-black'}`}
            placeholder="Escribe tu mensaje..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            className="bg-vita-link text-white text-sm font-bold px-4 py-2 rounded-r-lg hover:bg-vita-link-dark"
            onClick={() => sendMessage(inputValue)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>
          </button>
          <button
            className="bg-vita-link text-white text-sm font-bold px-4 py-2 ml-2 rounded-lg hover:bg-vita-link-dark"
            onClick={startListening}
            disabled={isListening}
          >
            {isListening ? 'Escuchando...' : 'Hablar'}
          </button>
        </div>
      </div>
    </div>
  );
}
