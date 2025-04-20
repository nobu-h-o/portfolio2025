'use client';

import { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

type Message = {
  role: 'user' | 'assistant' | 'system';
  content: string;
};

export default function ChatbotPage() {
  const context = process.env.NEXT_PUBLIC_CHAT_CONTEXT;
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'system', 
      content: context ? `You are a helpful assistant on Nobuhiro Oto's portfolio website. He is a CS student at Waseda University, and has intern experience at multiple companies. Here's some information about him: ${context}` : 'You are a helpful assistant on Nobuhiro Oto\'s portfolio website. He is a CS student at Waseda University, and has intern experience at multiple companies. Your responses should be concise, helpful, and in a friendly tone.',
    },
    { 
      role: 'assistant', 
      content: 'Hi there! I\'m Nobuhiro\'s AI assistant. I have access to his tweets and resume. Feel free to ask me any questions!\n(I was last updated on April 2025)'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Add effect to maintain focus
  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === '') return;

    // Add user message to the chat
    const userMessage = { role: 'user' as const, content: input };
    setMessages((prev) => [...prev, userMessage]);
    
    // Clear input and set loading state
    setInput('');
    setIsLoading(true);

    try {
      // Call API route that will use OpenAI SDK
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch from API');
      }

      const data = await response.json();
      
      // Add assistant response to the chat
      setMessages((prev) => [...prev, { role: 'assistant', content: data.content }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Sorry, I encountered an error. Please try again later.' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Chat Assistant</h1>
      
      <div className="flex flex-col h-[calc(100vh-16rem)] max-h-[500px] overflow-hidden">
        <div className="flex-1 overflow-auto mb-4 border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 scrollbar-hide">
          {messages.map((message, index) => (
            message.role !== 'system' && (
              <div 
                key={index} 
                className={`mb-4 ${message.role === 'user' ? 'text-right' : 'text-left'}`}
              >
                <div 
                  className={`inline-block p-3 rounded-lg max-w-[80%] whitespace-pre-wrap ${
                    message.role === 'user' 
                      ? 'bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100'
                      : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-700'
                  }`}
                >
                  {message.role === 'assistant' ? (
                    <ReactMarkdown>{message.content}</ReactMarkdown>
                  ) : (
                    message.content
                  )}
                </div>
              </div>
            )
          ))}
          {isLoading && (
            <div className="text-left mb-4">
              <div className="inline-block p-3 rounded-lg bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-700">
                <div className="flex space-x-1 items-center">
                  <div className="w-2 h-2 bg-neutral-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-neutral-400 rounded-full animate-pulse delay-100"></div>
                  <div className="w-2 h-2 bg-neutral-400 rounded-full animate-pulse delay-200"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-2 border border-neutral-300 dark:border-neutral-700 rounded-lg bg-white dark:bg-black text-neutral-900 dark:text-neutral-100 focus:outline-none"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-neutral-800 dark:bg-neutral-200 text-white dark:text-black px-4 py-2 rounded-lg hover:bg-neutral-700 dark:hover:bg-neutral-300 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-500"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}