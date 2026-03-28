export default function Footer() {
  return (
    <footer style={{
      background: 'white',
      borderTop: `1px solid var(--border-light)`,
      padding: '2rem 0',
      marginTop: 'auto',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        <p style={{
          color: 'var(--text-muted)',
          fontSize: '0.9rem',
          margin: '0 0 1rem 0'
        }}>
          Built with <span style={{ color: 'var(--blue-primary)', fontWeight: '500' }}>FastAPI</span> · 
          <span style={{ color: 'var(--blue-primary)', fontWeight: '500' }}> LangChain</span> · 
          <span style={{ color: 'var(--blue-primary)', fontWeight: '500' }}> Claude API</span> · 
          <span style={{ color: 'var(--blue-primary)', fontWeight: '500' }}> Pinecone</span>
        </p>
        <div>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--blue-primary)',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: '500',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              border: `1px solid var(--border-light)`,
              borderRadius: '6px',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'var(--blue-light)';
              e.target.style.borderColor = 'var(--blue-primary)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.borderColor = 'var(--border-light)';
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View on GitHub
          </a>
        </div>
        <p style={{
          color: 'var(--text-muted)',
          fontSize: '0.8rem',
          margin: '1rem 0 0 0'
        }}>
          © 2024 Fernando Contreras
        </p>
      </div>
    </footer>
  );
}
