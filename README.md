# RAG Document Assistant — Frontend

[![Vercel Status](https://therealsujitk-vercel-badge.vercel.app/?app=rag-assistant-ui)](https://rag-assistant-ui.vercel.app/)
![License](https://img.shields.io/badge/license-MIT-blue)
![Next.js](https://img.shields.io/badge/Next.js-14+-black?logo=next.js)

Next.js frontend for bilingual RAG document assistant. Upload any PDF and ask questions about it — powered by FastAPI, LangChain, and Claude API.

## 🚀 Live Demo
[https://rag-assistant-ui.vercel.app/](https://rag-assistant-ui.vercel.app/)

![RAG Document Assistant Screenshot](rag-assistant-ui.vercel.app_(Mac).png)

## 📖 What It Does

- **Clean PDF Upload Interface**: Intuitive drag-and-drop or click-to-browse file upload with visual feedback and progress indicators
- **Real-time Chat Interface**: Ask questions about your uploaded document with smooth, responsive messaging experience
- **Bilingual Responses**: Get answers in both English and Spanish with source citations for verification
- **Mobile Responsive**: Fully optimized for all screen sizes with touch-friendly interactions

## 🛠 Tech Stack

**Frontend**
- **Next.js 16** - React framework with App Router and Server Components
- **React 19** - Modern UI library with hooks and concurrent features
- **Pure CSS** - No external UI libraries, custom CSS variables for theming
- **Deployed on Vercel** - Edge deployment with global CDN

**Backend Integration**
- **FastAPI** - High-performance Python web framework
- **REST API** - Clean endpoints for upload and chat operations
- **Real-time Communication** - Fetch API with loading states and error handling

## 🚀 How to Run Locally

### Prerequisites
- Node.js 18+ and npm
- Python 3.8+ and pip
- Access to Claude API and Pinecone

### Step-by-Step Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/fernandojosecc/rag-assistant-ui.git
   cd rag-assistant-ui
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create `.env.local` in the project root:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:8000
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```

5. **Access the Application**
   Open `http://localhost:3000` in your browser

> **Note**: Requires the backend (`rag-assistant-api`) running locally on port 8000

## ⚙️ Environment Variables

| Variable | Description | Required |
|-----------|-------------|----------|
| `NEXT_PUBLIC_API_URL` | URL of the FastAPI backend | ✅ Required |

## 🔗 Related Repository

**Backend Repository**: [rag-assistant-api](https://github.com/fernandojosecc/rag-assistant-api)

> The backend handles all AI logic — LangChain for document processing, Claude API for intelligent responses, and Pinecone for vector storage and retrieval.

## 👨‍💻 About the Developer

**Fernando Contreras**  
AI Tools Specialist  
Portfolio: [fernandocontreras.dev](https://fernandocontreras.dev)  
GitHub: [github.com/fernandojosecc](https://github.com/fernandojosecc)

> Part of my AI engineering portfolio — building real AI applications in public. Focus on production-ready code, modern web technologies, and exceptional user experiences.

---

## 📁 Project Structure

```
rag-assistant-ui/
├── app/                  # Next.js app directory
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.js         # Root layout component
│   └── page.js           # Main page component
├── components/           # Reusable React components
│   ├── Header.js         # Application header with status
│   ├── UploadZone.js     # File upload interface
│   ├── ChatInterface.js  # Chat functionality
│   ├── Button.js         # Reusable button component
│   ├── Container.js      # Layout wrapper component
│   └── Footer.js        # Application footer
├── hooks/               # Custom React hooks
│   └── useApi.js        # API call management
└── public/              # Static assets
```

## 🎯 Available Scripts

```bash
npm run dev      # Start development server with hot reload
npm run build    # Build optimized production bundle
npm run start    # Start production server
npm run lint      # Run ESLint for code quality
```

## 🔧 Development Notes

### Key Features Implemented
- **Error Boundaries**: Graceful error handling with user-friendly messages
- **Loading States**: Visual feedback during API calls and file processing
- **Responsive Design**: Mobile-first approach with fluid layouts
- **Accessibility**: Semantic HTML and ARIA-friendly interactions
- **Performance**: Optimized assets and efficient re-renders

### Code Quality
- **Custom Hooks**: Centralized API logic with loading/error states
- **Component Reusability**: Shared components for consistent UI
- **CSS Variables**: Theming system for maintainable styles
- **Type Safety**: PropTypes and proper component patterns

## 🤝 Contributing

1. **View Repository**: [![GitHub](https://img.shields.io/badge/GitHub-Review%20Code-blue?style=for-the-badge&logo=github)](https://github.com/fernandojosecc/rag-assistant-ui?tab=readme-ov-file)
2. Fork the repository
3. Create a feature branch (`git checkout -b feature/amazing-feature`)
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support & Troubleshooting

For issues and questions:
- Open an issue on GitHub
- Check the browser console for specific errors
- Review the troubleshooting section in the backend documentation

---

**Built with ❤️ using modern web technologies**
