'use client';

import { useState } from 'react';
import Container from './Container';

export default function Header({ documentReady }) {
  return (
    <header style={{
      background: 'white',
      borderBottom: `1px solid var(--border-light)`,
      padding: '1.5rem 0',
      textAlign: 'center',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
    }}>
      <Container>
        <h1 style={{
          color: 'var(--blue-primary)',
          fontSize: '2rem',
          fontWeight: '600',
          margin: '0 0 0.5rem 0'
        }}>
          RAG Document Assistant
        </h1>
        <p style={{
          color: 'var(--text-muted)',
          fontSize: '1rem',
          margin: '0 0 1rem 0'
        }}>
          by Fernando Contreras
        </p>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.5rem 1rem',
          background: documentReady ? 'var(--blue-light)' : 'var(--border-light)',
          borderRadius: '20px',
          fontSize: '0.875rem'
        }}>
          <div style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: documentReady ? '#10b981' : '#6b7280'
          }}></div>
          <span style={{
            color: documentReady ? '#047857' : 'var(--text-muted)',
            fontWeight: '500'
          }}>
            {documentReady ? 'Ready' : 'No document uploaded'}
          </span>
        </div>
      </Container>
    </header>
  );
}
