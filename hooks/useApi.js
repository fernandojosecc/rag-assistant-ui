import { useState } from 'react';

export function useApiRequest() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const executeRequest = async (requestFunction, errorMessage = 'Request failed') => {
    setLoading(true);
    setError(null);

    try {
      const result = await requestFunction();
      setLoading(false);
      return { success: true, data: result, error: null };
    } catch (err) {
      setLoading(false);
      const errorObj = { 
        success: false, 
        data: null, 
        error: err.message || errorMessage 
      };
      setError(errorObj.error);
      return errorObj;
    }
  };

  return { loading, error, executeRequest };
}

export function useUpload() {
  const { loading, error, executeRequest } = useApiRequest();

  const uploadFile = async (file, apiUrl) => {
    const formData = new FormData();
    formData.append('file', file);

    return executeRequest(
      async () => {
        const response = await fetch(apiUrl, {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(`Upload failed: ${response.status} ${errorData.detail || response.statusText}`);
        }

        return await response.json();
      },
      'File upload failed. Please try again.'
    );
  };

  return { uploadLoading: loading, uploadError: error, uploadFile };
}

export function useChat() {
  const { loading, error, executeRequest } = useApiRequest();

  const sendMessage = async (question, apiUrl) => {
    return executeRequest(
      async () => {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ question }),
        });

        if (!response.ok) {
          throw new Error('Failed to get response');
        }

        const result = await response.json();
        
        // Parse answer field to extract English, Spanish, and Source
        const answer = result.answer || '';
        const englishMatch = answer.match(/English:\s*(.*?)(?=\n\nEspañol:|\n\nSource:|$)/s);
        const spanishMatch = answer.match(/Español:\s*(.*?)(?=\n\nSource:|$)/s);
        const sourceMatch = answer.match(/Source:\s*"([^"]*)"/s);
        
        return {
          english: englishMatch ? englishMatch[1].trim() : (result.answer || 'No English response available'),
          spanish: spanishMatch ? spanishMatch[1].trim() : 'No Spanish response available',
          source: sourceMatch ? sourceMatch[1].trim() : 'No source available'
        };
      },
      'Sorry, something went wrong. Please try again.'
    );
  };

  return { chatLoading: loading, chatError: error, sendMessage };
}
