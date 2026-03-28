'use client';

import { useState } from 'react';
import Header from '../components/Header';
import UploadZone from '../components/UploadZone';
import ChatInterface from '../components/ChatInterface';
import Footer from '../components/Footer';
import ErrorBoundary from '../components/ErrorBoundary';

export default function Home() {
  const [documentReady, setDocumentReady] = useState(false);

  const handleUploadSuccess = () => {
    setDocumentReady(true);
  };

  return (
    <ErrorBoundary>
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Header documentReady={documentReady} />
        
        <main style={{ flex: 1 }}>
          {!documentReady ? (
            <div style={{
              minHeight: 'calc(100vh - 200px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <ErrorBoundary>
                <UploadZone onUploadSuccess={handleUploadSuccess} />
              </ErrorBoundary>
            </div>
          ) : (
            <div style={{ padding: '2rem 1rem' }}>
              <ErrorBoundary>
                <ChatInterface />
              </ErrorBoundary>
            </div>
          )}
        </main>
        
        <Footer />
      </div>
    </ErrorBoundary>
  );
}
