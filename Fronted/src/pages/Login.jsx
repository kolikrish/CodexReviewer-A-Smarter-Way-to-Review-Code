import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { Code2, Eye, EyeOff, Lock, Mail, ArrowRight } from 'lucide-react';
import './Auth.css';

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState(null)
  const [message, setMessage] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    setMessage(null)
    try {
      const res = await axios.post('http://localhost:3000/user/login', form);
      if (res.data && res.data.token) {
        localStorage.setItem("token", res.data.token);
        setMessage(res.data.message || "Login successful");
        setTimeout(() => {
          navigate('/code');
        }, 800);
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error)
      } else {
        setError('Login failed. Please check your credentials.');
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-glow"></div>
      
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-logo">
            <Code2 size={24} />
            Codex<span>Reviewer</span>
          </div>
          <h2 className="auth-title">Welcome back</h2>
          <p style={{ color: "#71717a", fontSize: "0.875rem", marginTop: "0.5rem" }}>
            Ready to review some code?
          </p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <div className="input-wrapper">
              <input
                className="auth-input"
                placeholder='name@company.com'
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <input
                className="auth-input"
                placeholder='••••••••'
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(v => !v)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="auth-submit"
            disabled={isLoading}
          >
            {isLoading ? "Authenticating..." : "Login to Dashboard"}
          </button>

          {(message || error) && (
            <div className={`auth-message ${error ? 'auth-error' : ''}`}>
              {message || error}
            </div>
          )}
        </form>

        <div className="auth-footer">
          Don't have an account? 
          <Link to="/signup" className="auth-link">Sign up</Link>
        </div>
      </div>
    </div>
  )
}

export default Login