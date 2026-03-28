# RAG Document Assistant

A modern web application that allows users to upload PDF documents and ask questions about their content using AI-powered retrieval-augmented generation (RAG).

## Features

- 📄 **PDF Upload**: Drag-and-drop or click to upload PDF documents
- 🤖 **AI Chat**: Ask questions about your uploaded documents
- 🌐 **Multilingual**: Get responses in both English and Spanish
- 📚 **Source Citations**: See the exact source text used for answers
- ⚡ **Real-time**: Fast responses powered by FastAPI backend

## Tech Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **CSS Variables** - Customizable theming system

### Backend
- **FastAPI** - High-performance Python web framework
- **LangChain** - RAG orchestration
- **Claude API** - AI model for responses
- **Pinecone** - Vector database for document storage

## Prerequisites

- Node.js 18+ and npm
- Python 3.8+ and pip
- Access to Claude API
- Pinecone API key

## Installation

### Frontend Setup

```bash
cd rag-assistant-ui
npm install
npm run dev
```

The frontend will be available at `http://localhost:3000`

### Backend Setup

```bash
cd rag-backend
pip install -r requirements.txt
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

The backend API will be available at `http://localhost:8000`

## Environment Variables

Create a `.env.local` file in the frontend directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

Create a `.env` file in the backend directory:

```env
ANTHROPIC_API_KEY=your_claude_api_key
PINECONE_API_KEY=your_pinecone_api_key
PINECONE_INDEX_NAME=your_index_name
```

## Usage

1. **Upload a Document**
   - Drag and drop a PDF file into the upload zone
   - Or click to browse and select a PDF
   - Wait for processing confirmation

2. **Ask Questions**
   - Type your question in the chat interface
   - Press Enter or click "Send"
   - Receive answers in English and Spanish with source citations

3. **View Sources**
   - Each response includes the exact text source
   - Helps verify accuracy and find more context

## API Endpoints

### Upload Document
```
POST /upload
Content-Type: multipart/form-data

Response:
{
  "status": "success",
  "chunks": 15,
  "message": "Successfully processed document.pdf"
}
```

### Chat with Document
```
POST /chat
Content-Type: application/json

{
  "question": "What is this document about?"
}

Response:
{
  "answer": "English: Response text\n\nEspañol: Texto en español\n\nSource: \"Source citation\""
}
```

## Development

### Project Structure

```
rag-assistant-ui/
├── app/                  # Next.js app directory
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.js         # Root layout component
│   └── page.js           # Main page component
├── components/           # Reusable React components
│   ├── Header.js         # Application header
│   ├── UploadZone.js     # File upload interface
│   ├── ChatInterface.js  # Chat functionality
│   └── Footer.js        # Application footer
└── public/              # Static assets
```

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint      # Run ESLint
```

## Troubleshooting

### Common Issues

**Upload not working**
- Check that backend is running on port 8000
- Verify `.env.local` has correct API URL
- Ensure file is a valid PDF

**No chat responses**
- Confirm document was uploaded successfully
- Check backend logs for errors
- Verify API keys are correctly configured

**CORS errors**
- Ensure backend has CORS middleware configured
- Check that frontend URL is in allowed origins

### Browser Console Tips

Open Developer Tools (F12) and check:
- **Console**: For JavaScript errors
- **Network**: For failed API requests
- **Elements**: For UI rendering issues

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For issues and questions:
- Open an issue on GitHub
- Check the troubleshooting section above
- Review browser console for specific errors
