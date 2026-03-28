'use client';

import { useState } from 'react';
import Header from '../components/Header';
import UploadZone from '../components/UploadZone';
import ChatInterface from '../components/ChatInterface';
import Footer from '../components/Footer';

export default function Home() {
  console.log('Home component rendering');
  const [documentReady, setDocumentReady] = useState(false);

  const handleUploadSuccess = () => {
    console.log('Upload success callback called');
    setDocumentReady(true);
  };

  return (
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
            <UploadZone onUploadSuccess={handleUploadSuccess} />
          </div>
        ) : (
          <div style={{ padding: '2rem 1rem' }}>
            <ChatInterface />
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}
