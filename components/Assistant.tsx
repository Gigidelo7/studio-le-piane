import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { ChatMessage, LoadingState } from '../types';
import { createChatSession, sendMessageToGemini } from '../services/geminiService';
import { Chat } from '@google/genai';

const Assistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: 'Ciao! Sono l\'assistente virtuale dello Studio Le Piane. Come posso aiutarti oggi?',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);
  
  // Ref to hold the Chat session instance so it persists across renders
  const chatSessionRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || status === LoadingState.LOADING) return;

    const userText = inputValue.trim();
    setInputValue('');
    
    // Add user message
    setMessages(prev => [...prev, { role: 'user', text: userText, timestamp: new Date() }]);
    setStatus(LoadingState.LOADING);

    try {
      // Initialize session if not exists
      if (!chatSessionRef.current) {
        chatSessionRef.current = createChatSession();
      }

      const responseText = await sendMessageToGemini(chatSessionRef.current, userText);

      setMessages(prev => [...prev, { role: 'model', text: responseText, timestamp: new Date() }]);
      setStatus(LoadingState.SUCCESS);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: 'Si è verificato un errore. Riprova più tardi.', timestamp: new Date() }]);
      setStatus(LoadingState.ERROR);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all duration-300 ${isOpen ? 'bg-slate-200 text-slate-800 rotate-90' : 'bg-dental-600 text-white hover:bg-dental-700 hover:scale-110'}`}
        aria-label="Apri assistente virtuale"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={28} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[500px]">
          
          {/* Header */}
          <div className="bg-dental-600 p-4 text-white">
            <h3 className="font-bold flex items-center gap-2">
              <MessageCircle size={18} />
              Assistente Studio Le Piane
            </h3>
            <p className="text-xs text-dental-100 mt-1">Chiedimi info sui servizi o appuntamenti</p>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 h-80">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm shadow-sm ${
                    msg.role === 'user'
                      ? 'bg-dental-600 text-white rounded-br-none'
                      : 'bg-white text-slate-700 border border-slate-200 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {status === LoadingState.LOADING && (
              <div className="flex justify-start">
                <div className="bg-white text-dental-600 border border-slate-200 rounded-2xl rounded-bl-none px-4 py-2 shadow-sm">
                  <Loader2 className="animate-spin h-5 w-5" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-slate-100">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Scrivi un messaggio..."
                className="flex-1 border border-slate-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-dental-500 focus:ring-1 focus:ring-dental-500"
              />
              <button
                onClick={handleSendMessage}
                disabled={status === LoadingState.LOADING || !inputValue.trim()}
                className="p-2 bg-dental-600 text-white rounded-full hover:bg-dental-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-[10px] text-slate-400 text-center mt-2">
              L'IA può commettere errori. Non fornisce diagnosi mediche.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Assistant;