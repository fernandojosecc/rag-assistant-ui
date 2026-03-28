'use client';

import { useState, useRef } from 'react';

export default function UploadZone({ onUploadSuccess }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(null);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      setSelectedFile(file);
      setError(null);
      setUploadSuccess(null);
    } else {
      setError('Please select a PDF file');
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.type === 'application/pdf') {
      setSelectedFile(file);
      setError(null);
      setUploadSuccess(null);
    } else {
      setError('Please drop a PDF file');
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setUploading(true);
    setError(null);

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/upload`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const result = await response.json();
      setUploadSuccess(`Document ready! ${selectedFile.name} — ${result.chunks || 0} chunks processed`);
      onUploadSuccess();
    } catch (err) {
      setError('Upload failed. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  return (
    <div className="card" style={{ maxWidth: '600px', margin: '2rem auto' }}>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={() => fileInputRef.current?.click()}
        style={{
          border: `2px dashed var(--border-light)`,
          borderRadius: '8px',
          padding: '3rem 2rem',
          textAlign: 'center',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          background: 'var(--bg-page)'
        }}
        onMouseEnter={(e) => {
          e.target.style.borderColor = 'var(--blue-primary)';
          e.target.style.background = 'var(--blue-light)';
        }}
        onMouseLeave={(e) => {
          e.target.style.borderColor = 'var(--border-light)';
          e.target.style.background = 'var(--bg-page)';
        }}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf"
          onChange={handleFileSelect}
          style={{ display: 'none' }}
        />
        
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📄</div>
        <p style={{ color: 'var(--text-primary)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
          Drop your PDF here or click to browse
        </p>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          Only PDF files are supported
        </p>
      </div>

      {selectedFile && (
        <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'var(--bg-page)', borderRadius: '6px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <div>
              <p style={{ fontWeight: '500', color: 'var(--text-primary)', margin: '0 0 0.25rem 0' }}>
                {selectedFile.name}
              </p>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', margin: 0 }}>
                {formatFileSize(selectedFile.size)}
              </p>
            </div>
            <button
              onClick={() => {
                setSelectedFile(null);
                setError(null);
                setUploadSuccess(null);
              }}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                fontSize: '1.2rem',
                padding: '0.5rem'
              }}
            >
              ✕
            </button>
          </div>
          
          <button
            onClick={handleUpload}
            disabled={uploading}
            className="btn btn-primary"
            style={{ width: '100%' }}
          >
            {uploading ? (
              <>
                <span className="spinner" style={{ marginRight: '0.5rem' }}></span>
                Uploading...
              </>
            ) : (
              'Upload Document'
            )}
          </button>
        </div>
      )}

      {uploadSuccess && (
        <div style={{
          marginTop: '1rem',
          padding: '1rem',
          background: '#d1fae5',
          border: '1px solid #6ee7b7',
          borderRadius: '6px',
          color: '#065f46'
        }}>
          ✓ {uploadSuccess}
        </div>
      )}

      {error && (
        <div style={{
          marginTop: '1rem',
          padding: '1rem',
          background: '#fee2e2',
          border: '1px solid #fecaca',
          borderRadius: '6px',
          color: '#991b1b'
        }}>
          ✕ {error}
        </div>
      )}
    </div>
  );
}
