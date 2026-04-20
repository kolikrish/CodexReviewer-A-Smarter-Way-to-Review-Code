import React, { useEffect, useState } from 'react'
import Editor from "react-simple-code-editor"
import 'prismjs/themes/prism-tomorrow.css'
import prism from 'prismjs'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { 
  Code2, 
  LogOut, 
  Play, 
  FileCode, 
  Terminal as TerminalIcon, 
  ClipboardCheck,
  Loader2,
  Sparkles
} from 'lucide-react'
import '../App.css';

const Code = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    prism.highlightAll()
  }, [])

  const [code, setCode] = useState(`function calculateComplexity(n) {
  if (n <= 1) return 1;
  return calculateComplexity(n - 1) + calculateComplexity(n - 2);
}`)

  const [output, setOutput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  async function reviewCode() {
    setIsLoading(true)
    try {
      const prompt = `Review this code for quality, performance, and best practices. Provide specific suggestions: ${code}`
      const response = await axios.post('http://localhost:3000/ai/get-review', { prompt })
      setOutput(response.data)
    } catch (error) {
      setOutput('Error analyzing code. Please ensure the backend is running and try again.');
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-logo">
          <Code2 size={24} />
          Codex<span>Reviewer</span>
        </div>
        <button className="logout-btn" onClick={handleLogout}>
          <LogOut size={16} />
          Sign Out
        </button>
      </header>

      <main className="content-container">
        <div className="editor-section">
          <div className="section-header">
            <FileCode size={18} color="#52b788" />
            <h2>Source Code</h2>
          </div>
          <div className="code-editor">
            <Editor
              value={code}
              onValueChange={code => setCode(code)}
              highlight={code => prism.highlight(code, prism.languages.javascript, 'javascript')}
              padding={24}
              style={{
                fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                fontSize: 15,
                height: '100%',
                width: '100%',
                lineHeight: '1.5',
              }}
            />
          </div>
          <button 
            className="review-button"
            onClick={reviewCode}
            disabled={isLoading || !code.trim()}
          >
            {isLoading ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                <Sparkles size={18} />
                Analyze Logic
              </>
            )}
          </button>
        </div>

        <div className="output-section">
          <div className="section-header">
            <TerminalIcon size={18} color="#52b788" />
            <h2>AI Insights</h2>
          </div>
          <div className="output-container">
            {output ? (
              <pre>
                <code>{output}</code>
              </pre>
            ) : (
              <div className="placeholder-message">
                <ClipboardCheck size={48} strokeWidth={1} style={{ opacity: 0.15 }} />
                <p>Run analysis to see AI-driven code reviews and logic refinements.</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="app-footer">
        <p>© 2024 CodexReviewer Engine v1.5 • Powered by Gemini AI</p>
      </footer>
    </div>
  )
}

export default Code
