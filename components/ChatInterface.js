'use client';

import { useState, useRef, useEffect } from 'react';

export default function ChatInterface() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = { role: 'user', content: inputValue.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: userMessage.content }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const result = await response.json();
      console.log('Backend response:', result);
      
      // Parse the answer field to extract English, Spanish, and Source
      const answer = result.answer || '';
      const englishMatch = answer.match(/English:\s*(.*?)(?=\n\nEspañol:|\n\nSource:|$)/s);
      const spanishMatch = answer.match(/Español:\s*(.*?)(?=\n\nSource:|$)/s);
      const sourceMatch = answer.match(/Source:\s*"([^"]*)"/s);
      
      const botMessage = {
        role: 'bot',
        english: englishMatch ? englishMatch[1].trim() : (result.answer || 'No English response available'),
        spanish: spanishMatch ? spanishMatch[1].trim() : 'No Spanish response available',
        source: sourceMatch ? sourceMatch[1].trim() : 'No source available'
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (err) {
      setError('Sorry, something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="card" style={{ 
      maxWidth: '800px', 
      margin: '2rem auto',
      height: '600px',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{
        borderBottom: `1px solid var(--border-light)`,
        padding: '1rem',
        background: 'var(--bg-page)',
        borderRadius: '8px 8px 0 0'
      }}>
        <h3 style={{ margin: 0, color: 'var(--text-primary)' }}>Chat with your document</h3>
      </div>

      <div style={{
        flex: 1,
        overflowY: 'auto',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        {messages.length === 0 && !isLoading && (
          <div style={{
            textAlign: 'center',
            color: 'var(--text-muted)',
            padding: '2rem'
          }}>
            <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Ask a question about your document</p>
            <p style={{ fontSize: '0.9rem' }}>Type your question below and press Enter</p>
          </div>
        )}

        {messages.map((message, index) => (
          <div key={index}>
            {message.role === 'user' ? (
              <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginBottom: '1rem'
              }}>
                <div style={{
                  background: 'var(--blue-primary)',
                  color: 'white',
                  padding: '0.75rem 1rem',
                  borderRadius: '18px 18px 4px 18px',
                  maxWidth: '70%',
                  wordWrap: 'break-word'
                }}>
                  {message.content}
                </div>
              </div>
            ) : (
              <div style={{
                background: 'var(--bg-page)',
                padding: '1rem',
                borderRadius: '8px',
                border: `1px solid var(--border-light)`
              }}>
                <div style={{ marginBottom: '0.75rem' }}>
                  <span style={{
                    background: 'var(--blue-primary)',
                    color: 'white',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '4px',
                    fontSize: '0.875rem',
                    fontWeight: '500'
                  }}>
                    English:
                  </span>
                  <p style={{ margin: '0.5rem 0 0 0', color: 'var(--text-primary)', lineHeight: '1.5' }}>
                    {message.english}
                  </p>
                </div>

                <div style={{ marginBottom: '0.75rem' }}>
                  <span style={{
                    background: 'var(--yellow-primary)',
                    color: 'white',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '4px',
                    fontSize: '0.875rem',
                    fontWeight: '500'
                  }}>
                    Español:
                  </span>
                  <p style={{ margin: '0.5rem 0 0 0', color: 'var(--text-primary)', lineHeight: '1.5' }}>
                    {message.spanish}
                  </p>
                </div>

                <div>
                  <span style={{
                    background: '#6b7280',
                    color: 'white',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '4px',
                    fontSize: '0.875rem',
                    fontWeight: '500'
                  }}>
                    Source:
                  </span>
                  <p style={{
                    margin: '0.5rem 0 0 0',
                    color: 'var(--text-muted)',
                    fontStyle: 'italic',
                    lineHeight: '1.5',
                    fontSize: '0.9rem'
                  }}>
                    "{message.source}"
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}

        {isLoading && (
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            padding: '1rem'
          }}>
            <div className="loading-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}

        {error && (
          <div style={{
            background: '#fee2e2',
            border: '1px solid #fecaca',
            borderRadius: '6px',
            color: '#991b1b',
            padding: '1rem',
            textAlign: 'center'
          }}>
            {error}
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div style={{
        borderTop: `1px solid var(--border-light)`,
        padding: '1rem',
        display: 'flex',
        gap: '0.5rem'
      }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask a question about your document..."
          disabled={isLoading}
          style={{
            flex: 1,
            padding: '0.75rem',
            border: `1px solid var(--border-light)`,
            borderRadius: '6px',
            fontSize: '1rem',
            outline: 'none',
            background: 'white'
          }}
        />
        <button
          onClick={handleSend}
          disabled={isLoading || !inputValue.trim()}
          className="btn btn-primary"
          style={{
            padding: '0.75rem 1.5rem'
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}
